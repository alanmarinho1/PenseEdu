import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container, DivPC, PCImage, PCImage2, TextPC, Title } from './styles'

export default function PC() {
  return (
    <ScrollView>
      <Container>
        <View>
          <PCImage source={require('../../assets/PC2.png')} />
          {/* <TitleScreen>Pensamento Computacional</TitleScreen> */}
        </View>
        <DivPC>
          <TextPC>
          O desenvolvimento tecnológico trouxe muitas mudanças em nossa sociedade e isso afeta também a educação. 
          Nesse sentido, <Text style={{fontWeight: 'bold'}}>o pensamento computacional é uma realidade </Text> importante e que precisa ser considerada pelas escolas.
          </TextPC>
          <TextPC>
          Levar esse conceito para a sala de aula proporciona muitos benefícios a todos os envolvidos. Assim, é uma novidade que precisa ser considerada. 
          Isso conecta a instituição às tendências do mundo contemporâneo, além de estimular habilidades essenciais nos estudantes do século XXI.
          </TextPC>
        </DivPC>
        <Title>O que é Pensamento Computacional?</Title>
        <DivPC>
          <TextPC>
            O termo Pensamento Computacional (PC) foi inicialmente citado por Papert nos anos 60 e difundido pela pesquisadora Jeannete Wing a partir de 2006.
          </TextPC>
          <TextPC>
            Na literatura, não há uma definição geral sobre o que é PC, porém algumas definições são tidas como verdade, pois elas se convergem e fazem bastante sentido. 
            Entre elas temos que o pensamento computacional <Text style={{fontWeight: 'bold'}}>são processos de pensamento envolvidos na formulação de um problema e que expressam soluções eficazmente, 
            de tal forma que podem ser executados por uma pessoa ou uma máquina </Text>(Wing, 2014).
          </TextPC>
          <TextPC>
            Segundo a SBC, o PC se trata da <Text style={{fontWeight: 'bold'}}>habilidade de compreender, definir, modelar, comparar, solucionar, automatizar e analisar problemas (e soluções) de forma metódica e sistemática</Text> (2019).
          </TextPC>
          <TextPC>
            O Pensamento Computacional está intrisecamente conectado à <Text style={{fontWeight: 'bold'}}>Ciência da Computação</Text>, mas não limitado a ela. O termo pode associar ao pensar de um computador, 
            mas na verdade é desenvolver um conjunto de ferramentas mentais que permitam <Text style={{fontWeight: 'bold'}}>resolver problemas</Text> humanos complexos 
            <Text style={{fontWeight: 'bold'}}> usando fundamentos da computação.</Text>
          </TextPC>
        </DivPC>
        <Title>Características do PC</Title>
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>- Organizar e analisar dados de maneira lógica </Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>- Representar dados através de abstrações como modelos e simulações</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>- Automatizar soluções através do pensamento algorítmico (sequência de passos)</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>- Identificar, analisar e implementar soluções possíveis com o objetivo de atingir a combinação mais eficiente e eficaz de passos e recursos</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>- Generalizar e transferir esse processo de resolução de problemas para uma variedade de problemas</Text>
          </TextPC>
        </DivPC>
        <Title>Os Pilares do Pensamento Computacional</Title>
        <PCImage2 source={require('../../assets/PC.webp')} />
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>Decomposição: </Text> Quando o sistema computacional precisa solucionar um problema complexo, a primeira fase é identificá-lo e, 
          posteriormente, dividi-lo em processos mais simples. Como se tivéssemos uma equação de segundo grau e, para resolvê-la, subdividimos ela em equações de primeiro grau.
          O mesmo pode ser aplicado em outros problemas do cotidiano, com a finalidade de facilitar a resolução. 
          </TextPC>
          <TextPC>Ex: Para elaborar um grande projeto escolar, a decomposição é aplicada quando se organiza e se propõe a fazer uma parte a cada semana.</TextPC>
        </DivPC>
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>Reconhecimento de padrões: </Text> Da mesma forma que repartir um problema complexo em vários simples, 
          a identificação de padrões também funciona como um facilitador. É exatamente esse o segundo pilar do pensamento computacional.
          A ideia é conseguir visualizar pontos comuns tanto no próprio problema, como em outras soluções que já encontramos. 
          </TextPC>
          <TextPC>Ex: Identificar uma música pelo padrão de notas de seu início.</TextPC>
        </DivPC>
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>Abstração: </Text> Dentre as habilidades dos processos computacionais, percebemos que, para solucionar problemas, 
          as máquinas identificam e focam em itens realmente relevantes. Deixando de lado, portanto, informações que não agregam à solução.
          Por isso, o terceiro pilar do pensamento computacional trata da abstração. A ideia de filtrar o conteúdo recebido, 
          de maneira a eliminar o excesso de informação irrelevante. 
          </TextPC>
          <TextPC>Ex: Na coleta seletiva, a representação da lixeira vermelha é usada para objetos de plástico, 
            pois não conseguimos apresentar todos os objetos que podem ser de plástico.</TextPC>
        </DivPC>
        <DivPC style={{marginBottom: 0}}>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>Algoritmos: </Text> É uma sequência finita de etapas ou passos, cada qual executável em um tempo finito, por uma agente computacional, natural (humano) ou sintético (computador).
          É um plano, uma estratégia ou um conjunto de instruções ordenadas para uma solução de um problema ou execução de uma tarefa. com todos os pilares anteriores, é possível identificar e criar regras para a resolução de problemas complexos.
          </TextPC>
          <TextPC>Ex: Uma receita de bolo onde há uma sequencia de passos ordenados para ser seguido, até atingir o objetivo final.</TextPC>
        </DivPC>
        <Title>A interdisciplinaridade do Pensamento Computacional</Title>
      </Container>
    </ScrollView>
    
  )
}