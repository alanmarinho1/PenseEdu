import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { DivFormRegister, DivInputForm, DivButtonRegister, TextForm } from './styles'
import { InputTextField } from '../../components/Inputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'


export default function Cadastro({navigation}) {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
      <DivFormRegister>
        <DivInputForm>
          <TextForm>Nome:</TextForm>
          <InputTextField 
            placeholder=''
            type="text"
            onChangeText={(text) => setNome(text)}
            value={nome}/>
        </DivInputForm>
        <DivInputForm>
          <TextForm>Email:</TextForm>
          <InputTextField 
            placeholder=''
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}/>
        </DivInputForm>
        <DivInputForm>
          <TextForm>Senha:</TextForm>
          <InputTextField 
            placeholder=''
            type="text"
            onChangeText={(text) => setSenha(text)}
            value={senha}/>
        </DivInputForm>
        <DivButtonRegister>
          <PressableLoginButton
          onPress={() => navigation.navigate('Login')}
          title='Cadastrar'
          bgColor='#3CB371' />
          <PressableRegisterButton
            onPress={() => navigation.navigate('Login')}
            title='Voltar'
            bgColor='white' />
        </DivButtonRegister>
      </DivFormRegister>
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
