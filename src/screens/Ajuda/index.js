import { View, Text } from 'react-native'
import {Container, DivHelp, TextHelp, TitleScreen, Title} from './styles'
import React from 'react'


export default function Ajuda() {
  return (
    <Container
    contentContainerStyle={{alignItems: 'center'}}>
      <TitleScreen>Ajuda</TitleScreen>
      <DivHelp>
        <TextHelp>Bem vindo ao guia completo do <Text style={{fontWeight: 'bold'}}>PenseEdu!</Text></TextHelp>
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
          Em <Text style={{fontWeight: 'bold'}}>"Feed - Educação e Tecnologia"</Text> você encontra as ultimas novidades no ramo da educação e tecnologia.
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
          No menu de disciplinas será o espaço reservado para visualização das suas disciplinas favoritas e todas as disciplinas disponiveis no aplicativo até o momento. 
          Acessando cada uma você será direcionado a tela principal da disciplina, mostrando a sua relação com o PC e as atividades que por ventura voce criou ou as atividades disponiveis no aplicativo até o momento.
          Acessando qualquer uma das atividades, voce será direcionado a uma tela contendo o título, publico alvo, autor, duração, disciplina, habilidade BNCC, descrição e o pilar de PC que essa atividade está relacionada.
        </TextHelp>
      </DivHelp>
      <Title>Glossário</Title>
      <DivHelp>
        <TextHelp>
          Tela de Glossário que serve como guia com significado para algumas palavras chaves utilizadas no ramo da Ciencia da Computação.
        </TextHelp>
      </DivHelp>
      <Title>Pensamento Computacional</Title>
      <DivHelp>
        <TextHelp>
          Area reservada para um resumo sobre o Pensamento Computacional, suas características, os seus principais pilares e por que utiliza-las em suas disciplinas
        </TextHelp>
      </DivHelp>
      <Title>BNCC</Title>
      <DivHelp>
        <TextHelp>
          Essa tela mostra um breve resumo sobre o que é a BNCC, como ela representa as habilidades estabelecidas e a sua relação com o Pensamento Computacional.
        </TextHelp>
      </DivHelp>
      <Title>Sobre</Title>
      <DivHelp>
        <TextHelp>
          A tela de Sobre indica algumas informações gerais do app, a sua motivação e objetivo. Alem de abrir um espaço para que usuarios mandem comentários e sugestões para melhoria do app.
        </TextHelp>
      </DivHelp>
    </Container>
  )
}