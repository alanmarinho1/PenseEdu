import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container, DivFlatListDisc, TitleFlatListDisc, DivAllDisc, TitleScreen } from './styles'
import ListV from '../../components/FlatListsScrollV'
import ListGrid from '../../components/FlatListsScrollGrid'

export default function Disciplinas(props) {
  return (
    <Container>
      <TitleScreen>Disciplinas</TitleScreen>
      <DivFlatListDisc>
        <TitleFlatListDisc>Suas Disciplinas:</TitleFlatListDisc>
        <ListV{...props}/>
      </DivFlatListDisc>
      <DivAllDisc>
        <TitleFlatListDisc>Todas as disciplinas:</TitleFlatListDisc>
        <ListGrid/>
      </DivAllDisc>
    </Container>
  )
}