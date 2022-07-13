import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { DivLogin, TextForm, TextNameApp, DivInputLogin, DivButtonLogin } from './styles'
import { InputTextField } from '../../components/Inputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import { FormElements } from '../../components/FormElements'
import auth from '@react-native-firebase/auth';


export default function Login({navigation}) {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  function handleLogin() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logado com email: ', user.email)
        alert("Conta logada com sucesso!")
        navigation.navigate('Wellcome');
      })
      .catch(error => {

        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          alert('Email/senha invalidos');
        } else if (error.code === 'auth/invalid-email') {
          alert("Formato de email inválido");
        } else {
          alert(error.message)
        }
    });
  }

  // useEffect(() => {
  //   // const unsubscribe = auth.onAuthStateChanged(user => {
  //   //   if (user){
  //   //     navigation.navigate("Wellcome")
  //   //   }
  //   // })

  //   // return unsubscribe

  //   // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   // return subscriber; // unsubscribe on unmount
  // }, [])

  // if (initializing) return null;

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
      {/* <Container> */}
      {console.log("Xablau")}
      <TextNameApp>CompEdu</TextNameApp>
      <DivLogin>
        {/* <FormElements
        texto = 'Xablau'
        placeholder = 'Dale'
        func = {setUsuario}
        value = {{usuario}}
        /> */}
        <DivInputLogin>
          <TextForm>Email:</TextForm>
          <InputTextField 
            placeholder='Digite seu email'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}/>
        </DivInputLogin>
        <DivInputLogin>
          <TextForm>Senha:</TextForm>
          <InputTextField 
          placeholder='Digite sua senha'
          type="text"
          onChangeText={(text) => setPassword(text)}
          value={password}/>
        </DivInputLogin>
        <DivButtonLogin>
          <PressableLoginButton
            onPress={() => {handleLogin}}
            title='Entrar'
            bgColor='#3CB371' />
          <PressableRegisterButton
            onPress={() => navigation.navigate('Cadastro')}
            title='Cadastrar'
            bgColor='white' />
        </DivButtonLogin>
        
      </DivLogin>
    {/* </Container> */}
    </KeyboardAvoidingView>
    
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})