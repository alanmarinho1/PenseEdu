import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { Component, useState, useEffect } from 'react';
import { DivLogin, TextForm, TextNameApp, DivInputLogin, DivButtonLogin } from './styles'
import { InputTextField } from '../../components/Inputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import { FormElements } from '../../components/FormElements'


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
        {/* <FormElements
        texto = 'Xablau'
        placeholder = 'Dale'
        func = {setUsuario}
        value = {{usuario}}
        /> */}
        <DivInputLogin>
          <TextForm>Usuario:</TextForm>
          <InputTextField 
            placeholder='Digite seu usuario'
            type="text"
            onChangeText={(text) => setUsuario(text)}
            value={usuario}/>
        </DivInputLogin>
        <DivInputLogin>
          <TextForm>Senha:</TextForm>
          <InputTextField 
          placeholder='Digite sua senha'
          type="text"
          onChangeText={(text) => setSenha(text)}
          value={senha}/>
        </DivInputLogin>
        <DivButtonLogin>
          <PressableLoginButton
            onPress={() => navigation.navigate('Wellcome')}
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