import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react'; 

import soybeanImg from '../assets/soybean.png'

export function Chose({ navigation }){

    
    return(
        <ImageBackground source={soybeanImg} style={styles.backgroundImg}>
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.button} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Analise') }
                >
                    <Text style = {styles.subTitle}>
                        Tire sua foto
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button2} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Enviar')}
                >
                    <Text style = {styles.subTitle}>
                        Faça Upload da foto 
                    </Text>
                </TouchableOpacity> 
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
    }
  });

