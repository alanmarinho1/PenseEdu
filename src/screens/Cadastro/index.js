import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DivFormRegister, DivInputForm, DivButtonRegister, TextForm } from './styles'
import { InputTextField } from '../../components/Inputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import auth from '@react-native-firebase/auth';


export default function Cadastro({navigation}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [created, setCreated] = useState(false)

  function handleSignUp() {
    auth()
     .createUserWithEmailAndPassword(email, password)
     .then(userCredentials => {
       const user = userCredentials.user;
       alert("Conta criada com sucesso, favor realizar login");
       console.log("Conta criada!!");
       console.log(user.name, user.email, user.password);
       navigation.goBack();
      //  setCreated(true)
     })
     .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert("Email já em uso");
        } else if (error.code === 'auth/invalid-email') {
          alert("Formato de email inválido");
        } else if (error.code === 'auth/weak-password') {
          alert("Favor inserir senha de no minimo 6 caracteres");
        } else {
          alert(error.message)
        }
     })
  }

  // useEffect(() => {
  //     console.log(created)
  //     if (created){
  //       navigation.goBack();
  //     }

  // }, [])

  return (
    <KeyboardAvoidingView 
      behavior="height"
      style={styles.container}
    >
      <DivFormRegister>
        <DivInputForm>
          <TextForm>Nome:</TextForm>
          <InputTextField 
            placeholder='Ex: Alan Marinho...'
            type="text"
            onChangeText={(text) => setName(text)}
            value={name}/>
        </DivInputForm>
        <DivInputForm>
          <TextForm>Email:</TextForm>
          <InputTextField 
            placeholder='Ex: alan.marinho@...'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}/>
        </DivInputForm>
        <DivInputForm>
          <TextForm>Senha:</TextForm>
          <InputTextField 
            placeholder=''
            type="text"
            onChangeText={(text) => setPassword(text)}
            value={password}/>
        </DivInputForm>
        <DivButtonRegister>
          <PressableLoginButton
          onPress={() => {handleSignUp()}}
          title='Cadastrar'
          bgColor='#3CB371' />
          <PressableRegisterButton
            onPress={() => navigation.goBack()}
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
