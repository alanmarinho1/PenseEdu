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

  function handleLogin() {
    if(email.trim() === '' || password.trim() === ''){
      alert("Existe campo vazio, favor preencher")
    } else {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        // const user = userCredentials.user;
        alert("Conta logada com sucesso!")
        navigation.navigate('Wellcome');
      })
      .catch(error => {

        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          alert('Email/senha invalidos');
        } else if (error.code === 'auth/invalid-email') {
          alert("Formato de email inválido");
        } else if (error.code === 'auth/user-disabled') {
          alert("Usuario desativado.");
        } else {
          alert(error.message)
        }
       
    });
    } 
  }

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
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
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}/>
        </DivInputLogin>
        <DivButtonLogin>
          <PressableLoginButton
            onPress={handleLogin}
            title='Entrar'
            bgColor='#3CB371' />
          <PressableRegisterButton
            onPress={() => navigation.navigate('Cadastro')}
            title='Cadastrar'
            bgColor='white' />
        </DivButtonLogin>
      </DivLogin>
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