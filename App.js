import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import { Welcome } from './src/pages/Welcome';
import { Analysis } from './src/pages/Analysis';
import { About } from './src/pages/About';
import { Chose } from './src/pages/Chose';
import { Upload } from './src/pages/Upload';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="Menu"
          headerMode="none"
        >
        <Stack.Screen
          name="Menu"
          component={Welcome}
        />
        <Stack.Screen
         name="Analise"
         component={Analysis}
        />
        <Stack.Screen
        name="Sobre Kedelai"
        component={About} 
        />
        <Stack.Screen
        name="Escolher"
        component={Chose} 
        />
        <Stack.Screen
        name="Enviar"
        component={Upload} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
