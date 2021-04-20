import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react'; 

import soybeanImg from '../assets/soybean.png'

export function Welcome({ navigation }){

    
    return(
        <ImageBackground source={soybeanImg} style={styles.backgroundImg}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Kedelai
                </Text>
                <TouchableOpacity
                style={styles.button} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Analise') }
                >
                    <Text style = {styles.subTitle}>
                        Analise sua plantação!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button2} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Sobre Kedelai')}
                >
                    <Text style = {styles.subTitle}>
                        Mais informações 
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
        justifyContent: 'center'
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
        marginBottom:100
      },
    title: {
      flex:1,
      alignItems: 'center',
      marginTop:300,
      fontWeight:'400',
      fontSize: 84,
      color: '#A46262'
    },
    subTitle: {
      textAlign: 'center',
      fontWeight:'400',
      margin:12,
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

