
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SentinelaDetalhes from './src/screens/SentinelaDetalhes';
import Sentinela from './src/screens/Sentinela';
import Inicio from './src/screens/Inicio';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();



export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Lista de Sentinelas' component={Sentinela} />
        <Stack.Screen name='Detalhes dos Sentinelas' component={SentinelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  
});