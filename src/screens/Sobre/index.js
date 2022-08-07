import { View, Text, KeyboardAvoidingView, StyleSheet, Alert, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Container, DivAbout, Message, TextAbout, Title, TitleScreen } from './styles'
import { PressableSendMessageButton } from '../../components/Button'


export default function Sobre() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
          
    <Container
    contentContainerStyle={{alignItems: 'center'}}>
      <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}>
      <TitleScreen>Sobre</TitleScreen>
      <DivAbout>
          <TextAbout>
              O PenseEdu foi desenvolvido por <Text style={{fontWeight: 'bold'}}>Alan José Pavão Marinho</Text>, aluno da <Text style={{fontWeight: 'bold'}}>Universidade Federal
              Rural de Pernambuco</Text>, sendo este um artefato tecnológico vinculado ao <Text style={{fontWeight: 'bold'}}>Trabalho de Conclusão de Curso (TCC) </Text> 
              no semestre de 2021.2, sem fins lucrativos.
          </TextAbout>
      </DivAbout>
      <DivAbout>
          <TextAbout>
          Este aplicativo tem como objetivo ser um direcionamento de ensino para os docentes do <Text style={{fontWeight: 'bold'}}>Ensino Fundamental</Text>, 
          onde poderão acessar algumas atividades de suas disciplinas que tenham associação com os principais pilares do <Text style={{fontWeight: 'bold'}}>Pensamento Computacional</Text>.
          </TextAbout>
      </DivAbout>
      <Title>Contato:</Title>
      <DivAbout>
          <TextAbout>Nos ajude a melhorar: Envie seu comentário ou sugestão para melhoria do <Text style={{fontWeight: 'bold'}}>PenseEdu</Text></TextAbout>
          <Message 
          multiline={true}
          type="text"
          value={message} 
          onChangeText={(text) => setMessage(text)}/>
          <PressableSendMessageButton
          onPress={() => {
              
              Alert.alert('Mensagem enviada!', 'Agradecemos seu contato, sua contribuição é de grande valia para nós!');
              setMessage("")
          }}
          title='Enviar'
          bgColor='#3CB371' />
      </DivAbout>
      </KeyboardAvoidingView>
    </Container>
   
   
    
    
  )
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(224, 255, 255, 0.6)',
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
      
    }
  })