import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { Container, DivLogin, TextLogin, TextNameApp, DivInputLogin } from './styles'
import { InputTextField } from '../../components/Inputs';
import { PressableLoginButton } from '../../components/Button'

export default function Login({navigation}) {
  
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
      {/* <Container> */}
      {console.log("Xablau")}
      <TextNameApp>CompEdu</TextNameApp>
      <DivLogin>
        <DivInputLogin>
        <TextLogin>Usuario</TextLogin>
        <InputTextField 
          placeholder='Digite seu usuario'
          type="text"
          onChangeText={(text) => setUsuario(text)}
          value={usuario}/>
        </DivInputLogin>
        <DivInputLogin>
          <TextLogin>Senha</TextLogin>
          <InputTextField 
          placeholder='Digite sua senha'
          type="text"
          onChangeText={(text) => setSenha(text)}
          value={senha}/>
        </DivInputLogin>
        
        <PressableLoginButton
          onPress={() => navigation.navigate('Wellcome')}
          title='Entrar'
          bgColor='#3CB371' />
      </DivLogin>
    {/* </Container> */}
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})