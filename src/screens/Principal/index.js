import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Container, DivFlatListAtv, TitleComponents, DivNews, DivBNCC } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'

export default function Home(props) {
  return (
    <ScrollView>
      <Container>
      <DivFlatListAtv>
        <TitleComponents>Ultimas Atividades:</TitleComponents>
        <ListH{...props}/>
        <TitleComponents>Atividades Sugeridas:</TitleComponents>
        <ListH/>
      </DivFlatListAtv>
      <DivNews>
        <TitleComponents>O que há de novo?</TitleComponents>
      </DivNews>
      <DivBNCC>
        <TitleComponents>BNCC:</TitleComponents>
      </DivBNCC>
    </Container>

    </ScrollView>
    
  )
}