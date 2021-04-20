import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import { Welcome } from './src/pages/Welcome';
import { Camera } from './src/pages/Camera';
import { About } from './src/pages/About';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Welcome}
        />
        <Stack.Screen
         name="Analise"
         component={Camera} />
         <Stack.Screen
         name="Sobre Kedelai"
         component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
