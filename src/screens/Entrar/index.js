import { StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { DivLogin, TextForm, TextNameApp, DivInputLogin, DivButtonLogin } from './styles'
import { InputTextField } from '../../components/SignInputs';
import { PressableButton, PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import { FormElements } from '../../components/FormsElements'
import auth from '@react-native-firebase/auth';


export default function Login({navigation}) {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    if(email.trim() === '' || password.trim() === ''){
      return Alert.alert('Acesso a conta', "Existe campo vazio, favor preencher")
    } else {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        navigation.navigate('Wellcome', {id: response.user.uid});
        return Alert.alert('Acesso a conta', "Conta logada com sucesso!")
        
      })
      .catch(error => {
        console.log(error.message)
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          return Alert.alert('Acesso a conta', 'Email ou senha inválido');
        } else if (error.code === 'auth/invalid-email') {
          return Alert.alert('Acesso a conta', "Formato de email inválido");
        } else if (error.code === 'auth/user-disabled') {
          return Alert.alert('Acesso a conta', "Usuário desativado.");
        } else {
          console.log(error)
          return Alert.alert('Acesso a conta', "Houve um erro ao tentar logar");
        }
       
    });
    } 
  }

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
      <TextNameApp>PenseEdu</TextNameApp>
      <DivLogin>
        <DivInputLogin>
          <TextForm>Email:</TextForm>
          <InputTextField 
            placeholder='Digite seu email'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoComplete={"email"}
            keyboardType={"email-address"}/>
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
            onPress={() => {navigation.navigate('Cadastro');
                            setEmail("");
                            setPassword("")}}
            title='Cadastrar'
            bgColor='white'
             />
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