import { View, StyleSheet, KeyboardAvoidingView, Alert, Modal, Pressable, Text, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Dialog, Portal, Checkbox } from 'react-native-paper';
import { DivFormRegister, DivInputForm, DivButtonRegister, TextForm, TextRegisterApp, DivItemSelection, ItemSelection } from './styles'
import { InputTextField } from '../../components/SignInputs';
import { PressableLoginButton, PressableRegisterButton } from '../../components/Button'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { Loading } from '../../components/Loading';

export default function Cadastro({navigation}) {

  const [name, setName] = useState("")
  const [graduation, setGraduation] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [contact, setContact] = useState("")
  const [disciplines, setDisciplines] = useState([])
  const [visible, setVisible] = React.useState(false);
  const [initializing, setInitializing] = useState(true)
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [listDisc, setListDisc] = useState([])
  // const [created, setCreated] = useState(false)

  const hideDialog = () => setVisible(false);

  function handleSignUp() {
    if(email.trim() === '' || password.trim() === '' || name.trim() === '' || disciplines.trim() === ''){
      return Alert.alert("Registrar", "Existe campo obrigatório vazio, favor preencher")
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
      disciplines,
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log("Usuario cadastrado no banco")
    })
    .catch((error) => {
      console.log('Deu error na criação do usuario no banco: ', error)
    })
  }

    return (
      <ScrollView
      style={styles.container}>
        <KeyboardAvoidingView 
        behavior="padding"
        style={{alignItems: 'center',
        justifyContent: 'center',
      marginBottom: 40}}
      >
        <DivFormRegister>
        <TextRegisterApp>Crie sua conta</TextRegisterApp>
          <DivInputForm>
            <TextForm>Nome*:</TextForm>
            <InputTextField 
              placeholder='Ex: Alan Marinho...'
              type="text"
              onChangeText={(text) => setName(text)}
              value={name}
              />
          </DivInputForm>
          <DivInputForm>
            <TextForm>Formação:</TextForm>
            <InputTextField 
              placeholder='Ex: Licenciado em Computação - UFRPE...'
              type="text"
              onChangeText={(text) => setGraduation(text)}
              value={graduation}
              />
          </DivInputForm>
          <DivInputForm>
            <TextForm>Disciplinas de interesse*:</TextForm>
            <Pressable 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',borderRadius: 5, borderWidth: 1, borderColor: 'grey', height: 35, width: 300, flexDirection: 'row'}}
            onPress={() => setVisible(!visible)}
            >
              {disciplines.map((element) =>
          <Text style={{marginTop: 6, paddingLeft: 5, fontSize: 15, color: 'rgba(0, 0, 0, 1)'}}>{element + ','}</Text>
        )}
            </Pressable>
          </DivInputForm>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{width: 200, marginLeft: 100}}>
              <Dialog.Actions style={{flexDirection: 'column', width: 200}}>
                <View style={{marginBottom: 20}}>
                <DivItemSelection>
                  <ItemSelection>Artes</ItemSelection>
                  <Checkbox status={checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked1){
                      disciplines.push("Artes")
                    } else {
                      disciplines.splice(disciplines.indexOf("Artes"), 1);
                    }
                    setChecked1(!checked1);
                  }}/>
                </DivItemSelection>
                <DivItemSelection>
                  <ItemSelection>Ciências</ItemSelection>
                  <Checkbox status={checked2 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked2){
                      disciplines.push("Ciências")
                    } else {
                      disciplines.splice(disciplines.indexOf("Ciências"), 1);
                    }
                    setChecked2(!checked2);
                  }}/>
                </DivItemSelection>
                <DivItemSelection>
                  <ItemSelection>Geografia</ItemSelection>
                  <Checkbox status={checked3 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked3){
                      disciplines.push("Geografia")
                    } else {
                      disciplines.splice(disciplines.indexOf("Geografia"), 1);
                    }
                    setChecked3(!checked3);
                  }}/>
                </DivItemSelection>
                <DivItemSelection>
                  <ItemSelection>História</ItemSelection>
                  <Checkbox status={checked4 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked4){
                      disciplines.push("História")
                    } else {
                      disciplines.splice(disciplines.indexOf("História"), 1);
                    }
                    setChecked4(!checked4);
                  }}/>
                </DivItemSelection>
                <DivItemSelection>
                  <ItemSelection>Lingua Portuguesa</ItemSelection>
                  <Checkbox status={checked5 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked5){
                      disciplines.push("Lingua Portuguesa")
                    } else {
                      disciplines.splice(disciplines.indexOf("Lingua Portuguesa"), 1);
                    }
                    setChecked5(!checked5);
                  }}/>
                </DivItemSelection>
                <DivItemSelection>
                  <ItemSelection>Matemática</ItemSelection>
                  <Checkbox status={checked6 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if(!checked6){
                      disciplines.push("Matemática")
                    } else {
                      disciplines.splice(disciplines.indexOf("Matemática"), 1);
                    }
                    setChecked6(!checked6);
                  }}/>
                </DivItemSelection>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Button onPress={() => {
                    setDisciplines([]);
                    setChecked1(false);
                    setChecked2(false);
                    setChecked3(false);
                    setChecked4(false);
                    setChecked5(false);
                    setChecked6(false);
                    hideDialog();
                    }}>Cancel</Button>
                  <Button onPress={() => hideDialog()}>Ok</Button>
                </View>
              </Dialog.Actions>
            </Dialog>
          </Portal>
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
            <TextForm>Email*:</TextForm>
            <InputTextField 
              placeholder='Ex: alan.marinho@...'
              type="text"
              onChangeText={(text) => setEmail(text)}
              value={email}/>
          </DivInputForm>
          <DivInputForm>
            <TextForm>Senha*:</TextForm>
            <InputTextField 
              placeholder=''
              type="text"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}/>
          </DivInputForm>
          <DivInputForm>
            <TextForm>Confirme sua senha*:</TextForm>
            <InputTextField 
              placeholder=''
              type="text"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}/>
          </DivInputForm>
          <DivButtonRegister>
            <PressableLoginButton
            onPress={() => {
              if(password === confirmPassword){
                handleSignUp()
              } else {
                Alert.alert('Confirmação de senha:', 'A confirmação de senha não confere, favor verificar')
              }
              }}
            title='Cadastrar'
            bgColor='#3CB371' />
            <PressableRegisterButton
              onPress={() => navigation.goBack()}
              title='Voltar'
              bgColor='white' />
          </DivButtonRegister>
        </DivFormRegister>
      </KeyboardAvoidingView>
      </ScrollView>
    )
}
  

export const styles = StyleSheet.create({
  container: {

    backgroundColor: '#E0FFFF',
  }
})
