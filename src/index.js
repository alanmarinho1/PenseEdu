import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerComponent } from './components/DrawerMenu'
import Login from './screens/Entrar';
import Home from './screens/Principal';
import Cadastro from './screens/CadastroUsuario';
import Wellcome from './screens/Bemvindo';
import Disciplinas from './screens/Disciplinas';
import Atividade from './screens/Atividade';
import Disciplina from './screens/DetalhesDisciplina';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from './components/Loading';
import { NativeBaseProvider } from 'native-base';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular})
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUser(user)
    });
  }, [])
  return (
    <PaperProvider>
      <NativeBaseProvider>
        {fontsLoaded ? <NavigationContainer>
          {user ? <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={DrawerComponent} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Wellcome" component={Wellcome} />
            <Stack.Screen name="Disciplinas" component={Disciplinas} />
            <Stack.Screen name="Disciplina" component={Disciplina} />
            <Stack.Screen name="Atividade" component={Atividade} />
          </Stack.Navigator> : 
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={DrawerComponent} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Wellcome" component={Wellcome} />
          <Stack.Screen name="Disciplinas" component={Disciplinas} />
          <Stack.Screen name="Disciplina" component={Disciplina} />
          <Stack.Screen name="Atividade" component={Atividade} />
        </Stack.Navigator>}
          
        </NavigationContainer> : <Loading/>}
      </NativeBaseProvider>
      
      {/* // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Home" component={DrawerComponent} />
      //     <Stack.Screen name="Cadastro" component={Cadastro} />
      //     <Stack.Screen name="Wellcome" component={Wellcome} />
      //     <Stack.Screen name="Disciplinas" component={Disciplinas} />
      //     <Stack.Screen name="Disciplina" component={Disciplina} />
      //     <Stack.Screen name="Atividade" component={Atividade} />
      //   </Stack.Navigator>
      // </NavigationContainer> */}
    </PaperProvider>
  )
}


