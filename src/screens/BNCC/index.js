import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { BNCCImage, Container } from './styles'

export default function BNCC() {
  return (
    <ScrollView>
        <Container>
            <BNCCImage source={require('../../assets/bncc-logo.png')}/>
        </Container>
    </ScrollView>
  )
}