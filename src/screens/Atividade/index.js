import { ScrollView } from 'react-native'
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


export default function Atividade({route}) {

  const title = route.params.title
  const author = route.params.author
  const target = route.params.target
  const duration = route.params.duration
  const hability = route.params.hability
  const discipline = route.params.discipline
  const description = route.params.description
  
  return (
    <Container>
        <PCImage source={require('../../assets/classe.png')}/>
        <DivAtvInfo>
          <DivAtvTitle>
            <AtvTitle>{title}</AtvTitle>
          </DivAtvTitle>
          <DivAtvDetailsParent>
            <InfoComponent 
              title={'Público alvo'}
              detail={target + '° ano'}
            />
            <InfoComponent 
              title={'Duração'}
              detail={duration +' min'}
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
              detail={'Algoritmos'}
            />
          </DivAtvDetailsParent>
          <DivAtvDescription>
            <ScrollView>
              <AtvDescription>{description}</AtvDescription>
            </ScrollView>
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