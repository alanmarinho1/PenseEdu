import { View, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DivFormRegister, DivInputForm, DivButtonRegister, TextForm, TextRegisterApp } from './styles'
import { InputTextField } from '../../components/SignInputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export default function Cadastro({navigation}) {

  const [name, setName] = useState("")
  const [graduation, setGraduation] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  // const [created, setCreated] = useState(false)

  function handleSignUp() {
    if(email.trim() === '' || password.trim() === '' || name.trim() === ''){
      return Alert.alert("Registrar", "Existe campo vazio, favor preencher")
    } else {
      auth()
     .createUserWithEmailAndPassword(email, password)
     .then(userCredentials => {
       const user = userCredentials.user;
       alert("Conta criada com sucesso, favor realizar login");
       console.log("Conta criada!!");
       console.log(user.name, user.email, user.password);
       navigation.goBack();
       handleNewUserRegister(user.uid);
      //  setCreated(true)
     })
     .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          return Alert.alert("Registrar", "Email já em uso");
        } else if (error.code === 'auth/invalid-email') {
          return Alert.alert("Registrar", "Formato de email inválido");
        } else if (error.code === 'auth/weak-password') {
          return Alert.alert("Registrar", "Favor inserir senha de no minimo 6 caracteres");
        } else {
          console.log(error.message)
          return Alert.alert("Registrar", "Ocorreu um erro")
        }
     })
    }
    
  }

  function handleNewUserRegister(user_id) {
    firestore()
    .collection('users')
    .add({
      user_id: user_id,
      name,
      graduation,
      email,
      contact,
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log("Usuario cadastrado no banco")
    })
    .catch((error) => {
      console.log('Deu error na criação do usuario no banco: ', error)
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
      behavior="padding"
      style={styles.container}
    >
      <DivFormRegister>
      <TextRegisterApp>Crie sua conta</TextRegisterApp>
        <DivInputForm>
          <TextForm>Nome:</TextForm>
          <InputTextField 
            placeholder='Ex: Alan Marinho...'
            type="text"
            onChangeText={(text) => setName(text)}
            value={name}
            />
        </DivInputForm>
        <DivInputForm>
          <TextForm>Escolaridade:</TextForm>
          <InputTextField 
            placeholder='Ex: Licenciado em Computação - UFRPE...'
            type="text"
            onChangeText={(text) => setGraduation(text)}
            value={graduation}
            />
        </DivInputForm>
        <DivInputForm>
          <TextForm>Contato:</TextForm>
          <InputTextField 
            placeholder='Ex: (81) 9...'
            type="text"
            onChangeText={(text) => setContact(text)}
            value={contact}
            />
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
            secureTextEntry={true}
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
