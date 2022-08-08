import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { BNCCImage1, BNCCImage2, Container, DivBNCC, TextBNCC, Title } from './styles'
import { PressableFontsBNCCButton } from '../../components/Button'
import * as WebBrowser from 'expo-web-browser';

const openURL = (url) => {
  WebBrowser.openBrowserAsync(url);
}

export default function BNCC() {

  return (
    <ScrollView>
        <Container>
            <BNCCImage1 source={require('../../assets/bncc-logo.png')} resizeMode="stretch"/>
            <DivBNCC>
              <TextBNCC>
              A <Text style={{fontWeight: 'bold'}}>Base Nacional Comum Curricular</Text> (BNCC) é um documento de caráter normativo que define o conjunto orgânico e progressivo de aprendizagens essenciais que todos os alunos devem desenvolver ao longo das etapas e modalidades da Educação Básica.
              </TextBNCC>
              <TextBNCC>Seu principal objetivo é ser a balizadora da qualidade da educação no País por meio do estabelecimento de um patamar de aprendizagem e desenvolvimento a que todos os alunos têm direito!</TextBNCC>
              <PressableFontsBNCCButton 
              title='Fonte:'
              text='http://basenacionalcomum.mec.gov.br/a-base'
              onPress={() => openURL('http://basenacionalcomum.mec.gov.br/a-base')}/>
            </DivBNCC>
            <Title>Habilidades de acordo com a BNCC</Title>
            <DivBNCC>
              <TextBNCC>
              A Base deverá nortear a formulação dos currículos dos sistemas e das redes escolares de todo o Brasil, 
              indicando as competências e habilidades que se espera que todos os estudantes desenvolvam ao longo da escolaridade.
              </TextBNCC>
              <TextBNCC>As <Text style={{fontWeight: 'bold'}}>competências e habilidades</Text> expressam as aprendizagens essenciais que devem ser asseguradas aos alunos nos diferentes 
              contextos escolares. Para tanto, elas são descritas de acordo com uma determinada estrutura</TextBNCC>
              <TextBNCC>
              Nos quadros que apresentam as unidades temáticas, os objetos de conhecimento e as habilidades definidas para cada ano (ou bloco de anos), 
              cada habilidade é identificada por um código alfanumérico cuja composição é a seguinte:
              </TextBNCC>
              <BNCCImage2 source={require('../../assets/estrutura-habilidade.png')} resizeMode="stretch"/>
      
              <TextBNCC>
              Segundo esse critério, o código <Text style={{fontWeight: 'bold'}}>EF67EF01</Text>, por exemplo, refere-se à primeira habilidade proposta em Educação Física no bloco relativo ao 6º e 7º anos, 
              enquanto o código <Text style={{fontWeight: 'bold'}}>EF04MA10</Text> indica a décima habilidade do 4º ano de Matemática.
              </TextBNCC>
              <TextBNCC>
                A tabela de habilidades completa pode ser encontrada <PressableFontsBNCCButton 
              title=''
              text='nesse link'
              onPress={() => openURL('https://docs.google.com/spreadsheets/d/1DlM32cckdZTFNUvs_9rpNmJahHfYj5Z0/edit?usp=sharing&ouid=111280035354355803309&rtpof=true&sd=true')}/>
              </TextBNCC>
            </DivBNCC>
            <Title>Relação da BNCC com Pensamento Computacional</Title>
            <DivBNCC>
              <TextBNCC>
              A BNCC, sabemos, define uma série de competências e habilidades que permitem aos estudantes a autonomia e a apropriação do conhecimento, de modo que eles possam "Utilizar, 
              propor e/ou implementar soluções (processos e produtos) envolvendo diferentes tecnologias, para identificar, analisar, modelar e solucionar problemas complexos em diversas 
              áreas da vida cotidiana, explorando de forma efetiva o raciocínio lógico, o pensamento computacional, o espírito de investigação e a criatividade." (p.475)
              </TextBNCC>
              <TextBNCC>
                Sendo assim, por si só, não define o que é pensamento computacional. Com isso, podemos ter formas distintas de gestão e aplicação do pensamento computacional no currículo. 
                Por outro lado, podemos dizer que ela define de forma indireta, apresentando as “propriedades” que devem conter o pensamento computacional.
              </TextBNCC>
              <PressableFontsBNCCButton 
              title='Fonte:'
              text='https://blog.layers.education/o-que-significa-pensamento-computacional-no-texto-da-bncc'
              onPress={() => openURL('https://blog.layers.education/o-que-significa-pensamento-computacional-no-texto-da-bncc')}/>
            </DivBNCC>
            <DivBNCC style={{marginBottom: 15}}>
              <TextBNCC>
              Alinhado à BNCC, foram publicadas documentos para orientar a formação dos professores contemplando, dentre outros aspectos, o pensamento computacional e as tecnologias digitais:
              </TextBNCC>
              <PressableFontsBNCCButton 
              title='BNC-Formação Inicial: '
              text='http://portal.mec.gov.br/component/content/article?id=77781%E2%80%9D'
              onPress={() => openURL('http://portal.mec.gov.br/component/content/article?id=77781%E2%80%9D')}/>
              <PressableFontsBNCCButton 
              title='BNC-Formação Continuada: '
              text='https://www.in.gov.br/web/dou/-/resolucao-cne/cp-n-1-de-27-de-outubro-de-2020-285609724'
              onPress={() => openURL('https://www.in.gov.br/web/dou/-/resolucao-cne/cp-n-1-de-27-de-outubro-de-2020-285609724')}/>
            </DivBNCC>
        </Container>
    </ScrollView>
  )
}

