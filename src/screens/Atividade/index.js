import { ScrollView, FlatList } from 'react-native'
import React from 'react'
import storage from '@react-native-firebase/storage';

import { Container, 
  PCImage, 
  DivAtvInfo, 
  DivAtvTitle, 
  DivAtvDetailsParent, 
  DivAtvDetailsChildren, 
  AtvDetailsTitle, 
  AtvDetails, 
  AtvTitle, 
  DivAtvDescription,
  AtvDescription,
  AtvSubTitle } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PressableSendMessageButton } from '../../components/Button';
import * as WebBrowser from 'expo-web-browser';

const openURL = (url) => {
  WebBrowser.openBrowserAsync(url);
}

export default function Atividade({route}) {

  const title = route.params.title
  const author = route.params.author
  const hability = route.params.hability
  const discipline = route.params.discipline
  const description = route.params.description
  const objective = route.params.objective
  const pilar = route.params.pilar
  const resources = route.params.resources
  const scenario = route.params.scenario
  const type = route.params.type
  const created = route.params.created
  const attachment = route.params.attachment
  
  return (
    <Container>
        <PCImage source={require('../../assets/classe.png')}/>
        <DivAtvInfo>
          <DivAtvTitle>
            <AtvTitle>{title}</AtvTitle>
          </DivAtvTitle>
          <DivAtvDetailsParent>
            <InfoComponent 
              title={'Tipo de atividade'}
              detail={type}
            />
            <InfoComponent 
              title={'Criado em'}
              detail={created.substring(3,6) + created.substring(0,2) + created.substring(5,8)}
            />
            <InfoComponent 
              title={'Habilidade (BNCC)'}
              detail={hability}
            />
          </DivAtvDetailsParent>
          <DivAtvDetailsParent>
          <InfoComponent 
              title={'Autor ou Fonte'}
              detail={author}
            />
            <InfoComponent 
              title={'Disciplina'}
              detail={discipline}
            />
            <InfoComponent 
              title={'Pilar do PC'}
              detail={pilar}
            />
          </DivAtvDetailsParent>
          <AtvSubTitle>Objetivo</AtvSubTitle>
          <DivAtvDescription>
            <AtvDescription>{objective}</AtvDescription>
          </DivAtvDescription>
          <AtvSubTitle>Recursos/Materiais</AtvSubTitle>
          <DivAtvDescription>
            {resources.map((item) => <AtvDescription>{"• " + item}</AtvDescription>)}
            <ButtonDownloadAttachment attachment={attachment}/>
          </DivAtvDescription>
          <AtvSubTitle>Cenário/Ambiente da Atividade</AtvSubTitle>
          <DivAtvDescription>
            {scenario.map((item) => <AtvDescription>{item}</AtvDescription>)}
          </DivAtvDescription>
          <AtvSubTitle>Desenvolvimento da Atividade</AtvSubTitle>
          <DivAtvDescription>
            {description.map((item) => <AtvDescription>{item}</AtvDescription>)}
          </DivAtvDescription>
        </DivAtvInfo>
    </Container>
  )
}

const InfoComponent = ({title, detail}) => (
  <DivAtvDetailsChildren>
    <AtvDetailsTitle>{title}</AtvDetailsTitle>
    <AtvDetails>{detail}</AtvDetails>
  </DivAtvDetailsChildren>
)

const  ButtonDownloadAttachment = (id) => {
  if(id){
    return (
      <PressableSendMessageButton 
      title='Anexos'
      bgColor='#3CB371'
      onPress={async () => {
        const url = await storage().ref('anexos_atividades/' + id.attachment + '.pdf').getDownloadURL();
        openURL(url);
      }}
      />
    )
  }
}