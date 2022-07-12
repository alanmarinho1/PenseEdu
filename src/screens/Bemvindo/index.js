import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'

export default function Wellcome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        {/* <Container/> */}
      <Text style={{fontSize: 20}}>BEM VINDO GALERA!!!</Text>
    </View>
  )
}