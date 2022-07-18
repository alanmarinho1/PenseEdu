import { View, Text } from 'react-native'
import React from 'react'
import { Container, TitleScreen, DivFlatListAtv, TitleFlatListAtv, DivAllAtv } from './styles'
import ListV from '../../components/FlatListsScrollV'
import ListGrid from '../../components/FlatListsScrollGrid'

export default function Disciplina(props) {
  return (
    <Container>
      <TitleScreen >Disciplina Tal...</TitleScreen>
      <DivFlatListAtv>
        <TitleFlatListAtv>Suas Atividades:</TitleFlatListAtv>
        <ListV{...props}/>
      </DivFlatListAtv>
      <DivAllAtv>
        <TitleFlatListAtv>Todas as atividades:</TitleFlatListAtv>
        <ListV{...props}/>
      </DivAllAtv>
    </Container>
  )
}