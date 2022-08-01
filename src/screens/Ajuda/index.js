import { View, Text } from 'react-native'
import {Container, DivHelp, TextHelp, TitleScreen, Title} from './styles'
import React from 'react'


export default function Ajuda() {
  return (
    <Container
    contentContainerStyle={{alignItems: 'center'}}>
      <TitleScreen>Ajuda</TitleScreen>
      <DivHelp>
        <TextHelp>Bem vindo ao guia completo do <Text style={{fontWeight: 'bold'}}>CompEdu!</Text></TextHelp>
        <TextHelp>Essa seção é destinada para lhe ajudar na navegação deste app</TextHelp>
      </DivHelp>
      <Title>Home</Title>
      <DivHelp>
        <TextHelp>
          Essa tela é onde está as informações mais relevantes para voce. A área de <Text style={{fontWeight: 'bold'}}>"Ultimas Atividades"</Text> mostra as atividades mais recentes, seja inserida pelo administrador ou pela comunidade.
        </TextHelp>
        <TextHelp>
          A área de <Text style={{fontWeight: 'bold'}}>"Atividades Sugeridas"</Text> serve como atalho para atividades das disciplinas que voce tem interesse.
        </TextHelp>
        <TextHelp>
          Em <Text style={{fontWeight: 'bold'}}>"O que há de novo"</Text> você encontra novidades no ramo da educação com utilização da interdisciplinaridade do Pensamento Computacional.
        </TextHelp>
      </DivHelp>
      <Title>Perfil</Title>
      <DivHelp>
        <TextHelp>
          Esse menu exibe todos os seus dados e dá a possibilidade de alterar alguma informação, incluindo sua foto de perfil.
        </TextHelp>
      </DivHelp>
      <Title>Disciplinas</Title>
      <DivHelp>
        <TextHelp>

        </TextHelp>
      </DivHelp>
      <Title>Glossário</Title>
      <DivHelp>
        <TextHelp>
          
        </TextHelp>
      </DivHelp>
      <Title>Pensamento Computacional</Title>
      <DivHelp>
        <TextHelp>
          
        </TextHelp>
      </DivHelp>
      <Title>BNCC</Title>
      <DivHelp>
        <TextHelp>
          
        </TextHelp>
      </DivHelp>
      <Title>Sobre</Title>
      <DivHelp>
        <TextHelp>
          
        </TextHelp>
      </DivHelp>
    </Container>
  )
}