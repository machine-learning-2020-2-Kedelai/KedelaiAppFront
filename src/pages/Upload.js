import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, Platform, Modal} from 'react-native';
import React, { useEffect, useState } from 'react';

import {FontAwesome} from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import soybeanImg from '../assets/soybean.png'

export function Upload({ navigation }){

    const [image, setImage] = useState('');
    const [modalOpen, setModalOpen]= useState(false);


    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Desculpa, precisamos da permissão para usar essa função 😢');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
        
        console.log(result);
    
        if (!result.cancelled) {
            await setImage(result.uri);
            setModalOpen(true)
        }
      };

    return(
        <ImageBackground source={soybeanImg} style={styles.backgroundImg}>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.buttonIcon} onPress={pickImage} >
                        <Text style={styles.buttonText}>Clique para fazer Upload</Text>
                    </TouchableOpacity>
                </View>
                {
                    (image!=='') &&
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalOpen}
                    >
                        <View style={styles.Modalmodal}>
                            <TouchableOpacity style={styles.ModalcloseButton} onPress={()=>setModalOpen(false)}>
                                <FontAwesome name="window-close" size={30} color="black"/>
                            </TouchableOpacity>
                            <Text style={styles.ModaldoencaDetectada}>
                                Doença detectada {'\n'} com sucesso!
                            </Text>
                            <View>
                                <Text style={styles.ModaltituloSimples}>
                                    Doença:
                                </Text>
                                <Text style={styles.ModaldoencaNome}>
                                    Ferrugem-asiática{'\n'} (Phytophthora sojae)
                                </Text>
                            </View>
                            <Text style={styles.ModaltituloSimples}>
                                foto analisada:
                            </Text>
                            <Image 
                                style={styles.ModalmodalImg}
                                source = {{uri: image}}
                            />
                            <TouchableOpacity
                            style={styles.Modalbutton} 
                            activeOpacity={0.8}
                            onPress={()=>setModalOpen(false) }
                            >
                                <Text style = {styles.ModalsubTitle}>
                                    Analise outra planta!
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={styles.Modalbutton2} 
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Menu')}
                            >
                                <Text style = {styles.ModalsubTitle}>
                                    Voltar ao menu
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                }
            </View>
        </ImageBackground> 
    );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 200
    },
    button: {
      width: 280,
      height: 50,
      backgroundColor: '#615D4F',
      shadowOpacity: 3,
      borderRadius:15,
      marginBottom:10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button2: {
        width: 280,
        height: 50,
        backgroundColor: '#615D4F',
        shadowOpacity: 3,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center'
      },
    subTitle: {
      fontWeight:'400',
      fontSize: 18,
      color: 'white'
    },
    backgroundImg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'       
    },
    buttonIcon:{
        width: 280,
        height: 50,
        backgroundColor: '#615D4F',
        shadowOpacity: 3,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight:'600',
        fontSize: 20,
        color: 'white'
    },
    Modalmodal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center', 
        margin: 5,
        backgroundColor: '#B3FFB1'
    },
    ModalmodalImg:{
        width: '100%',
        height: 380,
        width:400,
        borderRadius: 20,
        marginBottom: 30

    },
    ModalcloseButton:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 350
    },
    ModaldoencaDetectada:{
        fontWeight:'400',
        fontSize: 32,
        textAlign: 'center',
        color: "#138A00",
        margin: 20,
        marginTop:10
    },
    ModaldoencaNome:{
        fontWeight:'400',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    },
    ModaltituloSimples:{
        fontWeight:'400',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    Modalbutton: {
      width: 280,
      height: 50,
      backgroundColor: '#615D4F',
      shadowOpacity: 3,
      borderRadius:15,
      marginBottom:10
    },
    Modalbutton2: {
        width: 280,
        height: 50,
        backgroundColor: '#615D4F',
        shadowOpacity: 3,
        borderRadius:15,
        marginBottom:40
      },
    ModalsubTitle: {
      textAlign: 'center',
      fontWeight:'400',
      margin:12,
      fontSize: 18,
      color: 'white'
    },
  });

