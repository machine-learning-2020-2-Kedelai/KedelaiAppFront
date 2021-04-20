import {StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState, useEffect, useRef} from 'react'; 
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';

import changeCameraImg from '../assets/switch-camera.png'


export function Analysis({navigation}){

    const [flip, setFlip] = useState(Camera.Constants.Type.back);
    const [permission, setPermission] = useState(null)
    const camRef = useRef(null);
    const [captured, setCaptured] = useState(null);
    const [modalOpen, setModalOpen]= useState(false);

    useEffect(()=>{
        (async()=>{
            const{status} = await Camera.requestPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, [])

    function handleChangeCamera(){
        setFlip(
            flip === Camera.Constants.Type.back? Camera.Constants.Type.front : Camera.Constants.Type.back
        );
    }

    async function handleTakePhoto(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCaptured(data.uri);
            setModalOpen(true)
        }
    }

    if(permission === null){
        return <View/>
    }

    if(permission === false){
        return <Text style={{color: 'red'}}>
            Acesso Negado!
        </Text>
    }

    return(
    <View style={styles.container}>
        <Camera
            style={styles.camerum}
            type={flip}
            ref={camRef}
        >
            <View style={styles.buttonCamera}>
                <TouchableOpacity 
                style={styles.buttonCamera2}
                onPress={handleChangeCamera}
                >
                <Image source={changeCameraImg} style={styles.changeCamera}/>
                </TouchableOpacity>
            </View>
        </Camera>
        <TouchableOpacity style={styles.buttonTakePhoto} onPress={handleTakePhoto}>
            <FontAwesome name="camera" size={25} color="#FFF"/>
        </TouchableOpacity>

        {
            captured &&
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalOpen}
            >
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.closeButton} onPress={()=>setModalOpen(false)}>
                        <FontAwesome name="window-close" size={30} color="black"/>
                    </TouchableOpacity>
                    <Text style={styles.doencaDetectada}>
                        Doença detectada {'\n'} com sucesso!
                    </Text>
                    <View>
                        <Text style={styles.tituloSimples}>
                            Doença:
                        </Text>
                        <Text style={styles.doencaNome}>
                            Ferrugem-asiática{'\n'} (Phytophthora sojae)
                        </Text>
                    </View>
                    <Text style={styles.tituloSimples}>
                        foto analisada:
                    </Text>
                    <Image 
                        style={styles.modalImg}
                        source = {{uri: captured}}
                    />
                    <TouchableOpacity
                    style={styles.button} 
                    activeOpacity={0.8}
                    onPress={()=>setModalOpen(false) }
                    >
                        <Text style = {styles.subTitle}>
                            Analise outra planta!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button2} 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Menu')}
                    >
                        <Text style = {styles.subTitle}>
                            Voltar ao menu
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        }
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    camerum:{
        flex:1,
        backgroundColor:'rgba(196, 196, 196, 0.85)'
    },
    buttonCamera:{
        flex:1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    buttonCamera2:{
        position: 'absolute',
        bottom: 20,
        left:20,
        backgroundColor:'grey',
        borderRadius:70,
        width:65,
        height:65
    },
    changeCamera:{
        width:50,
        height:50,
        marginLeft:7,
        marginTop:7
    },
    buttonTakePhoto:{
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#121212',
        margin: 100,
        marginLeft:180,
        borderRadius: 50,
        height: 70,
        width:70
    },
    modal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center', 
        margin: 5,
        backgroundColor: '#B3FFB1'
    },
    modalImg:{
        width: '100%',
        height: 380,
        width:400,
        borderRadius: 20,
        marginBottom: 30

    },
    closeButton:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 350
    },
    doencaDetectada:{
        fontWeight:'400',
        fontSize: 32,
        textAlign: 'center',
        color: "#138A00",
        margin: 20,
        marginTop:10
    },
    doencaNome:{
        fontWeight:'400',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    },
    tituloSimples:{
        fontWeight:'400',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
      width: 280,
      height: 50,
      backgroundColor: '#615D4F',
      shadowOpacity: 3,
      borderRadius:15,
      marginBottom:10
    },
    button2: {
        width: 280,
        height: 50,
        backgroundColor: '#615D4F',
        shadowOpacity: 3,
        borderRadius:15,
        marginBottom:40
      },
    subTitle: {
      textAlign: 'center',
      fontWeight:'400',
      margin:12,
      fontSize: 18,
      color: 'white'
    },
  });

