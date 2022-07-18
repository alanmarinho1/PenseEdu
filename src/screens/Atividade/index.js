import { View, Text, ScrollView } from 'react-native'
import React from 'react'
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
  AtvDescription } from './styles'

export default function Atividade() {
  return (
    <Container>
        <PCImage source={require('../../assets/classe.png')}/>
        <DivAtvInfo>
          <DivAtvTitle>
            <AtvTitle>Titulo da Atividade Aqui! Lorem Ipsum</AtvTitle>
          </DivAtvTitle>
          <DivAtvDetailsParent>
            <DivAtvDetailsChildren>
              <AtvDetailsTitle>Público alvo</AtvDetailsTitle>
              <AtvDetails>5° ano</AtvDetails>
            </DivAtvDetailsChildren>
            <DivAtvDetailsChildren>
              <AtvDetailsTitle>Duração</AtvDetailsTitle>
              <AtvDetails>45 min</AtvDetails>
            </DivAtvDetailsChildren>
            <DivAtvDetailsChildren>
              <AtvDetailsTitle>Habilidade (BNCC)</AtvDetailsTitle>
              <AtvDetails>EM13LGG701</AtvDetails>
            </DivAtvDetailsChildren>
          </DivAtvDetailsParent>
          <DivAtvDescription>
            <ScrollView>
              <AtvDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie luctus egestas. 
                Pellentesque luctus fringilla hendrerit. In at felis porta, eleifend mauris eu, venenatis dolor. Curabitur sit amet nisi egestas, varius ex at, fringilla lacus. 
                Nunc sit amet accumsan diam. Aenean tincidunt dapibus velit, iaculis posuere ipsum tempus id. 
                Aliquam sagittis quam tempor sem efficitur, quis accumsan enim eleifend. Nullam posuere nisl enim, et gravida massa condimentum egestas. 
                Sed tincidunt, odio vitae vestibulum dapibus, nisl ligula efficitur odio, sit amet rhoncus ipsum nisi sit amet justo.</AtvDescription>
            </ScrollView>
            
          </DivAtvDescription>
        </DivAtvInfo>
    </Container>
  )
}