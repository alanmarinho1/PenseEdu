import { View, Text, ImageBackground, Button } from 'react-native'
import React from 'react'
import { Container, WellcomeImage, DivWellcome, DivWellcomeOne, DivWellcomeTwo, TitleComponent, TextComponent } from './styles'
import { PressableWellcomeButton } from '../../components/Button'
import { TouchableOpacity } from 'react-native-web'

export default function Wellcome({route, navigation}) {

  const { id } = route.params;

  return (

   <View style={{backgroundColor: '#E0FFFF', flex:1, alignItems: 'center', justifyContent: 'center'}} >
    <WellcomeImage source={require('../../assets/wellcome_background.jpg')}>
      <DivWellcome>
        <DivWellcomeOne>
        {console.log("Passando ID por rota em Bem Vindo", id)}
          <TitleComponent>Seja bem-vindo(a)! </TitleComponent>
          <TextComponent>
            Olá! Vamos aprender de forma prática que a computação 
            faz parte do cotidiano social e o pensamento computacional é desenvolvido de maneira multidisciplinar.
          </TextComponent>
        </DivWellcomeOne>
        <DivWellcomeTwo>
          <TitleComponent>Nosso principal objetivo:</TitleComponent>
            <TextComponent>
              Todas as atividades serão de cunho tecnológico ou desplugado, com o objetivo de despertar no aluno o interesse no desenvolvimento na disciplina que você estiver lecionando como primórdio, utilizando os pilares básicos do Pensamento Computacional.
              Aqui você será direcionado à aplicação do Pensamento Computacional para atividades praticas como ponte da multidisciplinaridade!
            </TextComponent>
        </DivWellcomeTwo>
      </DivWellcome>
      <PressableWellcomeButton
        onPress={() => {navigation.navigate("Home", {id: id});}}
        title='Continuar'
        bgColor='#3CB371'/>
    </WellcomeImage>
   </View>

  )
}

