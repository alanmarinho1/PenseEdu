import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Entrar';
import Home from './screens/Principal';
import Cadastro from './screens/Cadastro';
import Wellcome from './screens/Bemvindo';
import Disciplinas from './screens/Disciplinas';
import Atividade from './screens/Atividade';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Disciplinas" component={Disciplinas} />
        <Stack.Screen name="Atividade" component={Atividade} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();
