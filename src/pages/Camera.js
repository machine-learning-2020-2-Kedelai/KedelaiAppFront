import {StyleSheet, View, Text} from 'react-native';
import React from 'react'; 


export function Camera({navigation}){
    return(
    <View style={styles.container}>
        <Text>
            Teste
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

