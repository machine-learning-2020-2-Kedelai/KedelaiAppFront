import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import React from 'react'; 

import soybeanImg from '../assets/soybean.png'
import unbImb from '../assets/UnB.png'

export function About({navigation}){
    return(
    <ImageBackground source={soybeanImg} style={styles.backgroundImg}>
        <View style={styles.container}>
            <Text style={styles.title}>
                Sobre Kedelai
            </Text>
            <Text style={styles.text}>
                Kedelai é um projeto da matéria de Aprendizado de Máquina da Univesidade de Brasília que tem como objetivo analisar plantas de soja e identificar doenças nelas, utilizando rede neural para que ela perceba padrões de um dataset com plantas doentes e saudáveis.
            </Text>
            <Image source={unbImb} style={styles.unbImgStyle}/>

        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width:350,
        height: 700,
        backgroundColor:'rgba(196, 196, 196, 0.9)',
        margin:35,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    backgroundImg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%' 
    },
    text:{
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        margin:20

    }, 
    title:{
        color: 'black',
        textAlign: 'center',
        fontWeight:'400',
        fontSize:40,
        marginBottom:35
    },
    unbImgStyle:{
        width: 200,
        height:200,
        marginBottom: 40,
        marginLeft:70
    }
  });

