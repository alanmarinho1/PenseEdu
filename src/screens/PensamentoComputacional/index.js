import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Container, DivPC, PCImage, PCImage2, TextPC, Title, DivFonts } from './styles'
import * as WebBrowser from 'expo-web-browser';
import { IconButton, MD3Colors } from 'react-native-paper';
import { PressableFontsButton } from '../../components/Button';


export default function PC() {

  const openVideo = () => {
    WebBrowser.openBrowserAsync('https://youtu.be/yJlArskpu30');
  };
  const openSite = () => {
    WebBrowser.openBrowserAsync('https://educadordofuturo.com.br/tecnologia-na-educacao/o-que-e-pensamento-computacional/');
  };
  const openPDF = () => {
    WebBrowser.openBrowserAsync('https://seer.ufrgs.br/index.php/renote/article/view/118533/64560');
  };

  return (
    <ScrollView>
      <Container>
        <View>
          <PCImage source={require('../../assets/PC2.png')} />
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
            O termo <Text style={{fontWeight: 'bold'}}>Pensamento Computacional</Text> (PC) foi inicialmente citado por Papert nos anos 60 e 
            difundido pela pesquisadora Jeannete Wing a partir de 2006.
          </TextPC>
          <TextPC>
            Na literatura, não há uma definição geral sobre o que é PC, porém algumas definições são tidas como verdade, pois elas se convergem e fazem bastante sentido. 
            Entre elas temos que o pensamento computacional <Text style={{fontWeight: 'bold'}}>são processos de pensamento envolvidos na formulação de um problema e 
            que expressam soluções eficazmente, de tal forma que podem ser executados por uma pessoa ou uma máquina </Text>(Wing, 2014).
          </TextPC>
          <TextPC>
            Segundo a SBC, o PC se trata da <Text style={{fontWeight: 'bold'}}>habilidade de compreender, definir, modelar, comparar, solucionar, automatizar e 
            analisar problemas (e soluções) de forma metódica e sistemática</Text> (2019).
          </TextPC>
          <TextPC>
            O Pensamento Computacional está intrisecamente conectado à <Text style={{fontWeight: 'bold'}}>Ciência da Computação</Text>, mas não limitado a ela. 
            O termo pode associar ao pensar de um computador, mas na verdade é desenvolver um conjunto de ferramentas mentais que permitam 
            <Text style={{fontWeight: 'bold'}}>resolver problemas</Text> humanos complexos <Text style={{fontWeight: 'bold'}}> usando fundamentos da computação.</Text>
          </TextPC>
        </DivPC>
        <Title>Características do PC</Title>
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>► Organizar e analisar dados de maneira lógica </Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>► Representar dados através de abstrações como modelos e simulações</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>► Automatizar soluções através do pensamento algorítmico (sequência de passos)</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>► Identificar, analisar e implementar soluções possíveis com o objetivo de atingir a combinação mais eficiente 
          e eficaz de passos e recursos</Text>
          </TextPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>► Generalizar e transferir esse processo de resolução de problemas para uma variedade de problemas</Text>
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
        <DivPC>
          <TextPC>
          <Text style={{fontWeight: 'bold'}}>Algoritmos: </Text> É uma sequência finita de etapas ou passos, cada qual executável em um tempo finito, por uma agente computacional, natural (humano) ou sintético (computador).
          É um plano, uma estratégia ou um conjunto de instruções ordenadas para uma solução de um problema ou execução de uma tarefa. com todos os pilares anteriores, é possível identificar e criar regras para a resolução de problemas complexos.
          </TextPC>
          <TextPC>Ex: Uma receita de bolo onde há uma sequencia de passos ordenados para ser seguido, até atingir o objetivo final.</TextPC>
        </DivPC>
        <Title>A interdisciplinaridade do Pensamento Computacional</Title>
        <DivPC style={{marginBottom: 10}}>
          <TextPC>
          Os pilares do pensamento computacional podem ser aplicados na resolução de problemas em um número variado de contextos, 
          o que pode contribuir para a realização de estudos <Text style={{fontWeight: 'bold'}}>interdisciplinares</Text>. 
          </TextPC>
          <TextPC>
          O Pilar <Text style={{fontWeight: 'bold'}}>Abstração</Text> contribui para que, ao modelamos um objeto de estudo de várias disciplinas, sejam consideradas as diferentes formas de percebê-lo, identificando 
          inclusive os aspectos que interessam a mais de uma área, evitando assim o tratamento isolado de um mesmo objeto. Esse Pilar apoia ainda a identificação de abstrações de
          dados que podem ser usadas para modelar objetos de diferentes disciplinas, como um grafo, que pode ser usado para modelar uma rede de vias de ligação entre diferentes
          pontos de uma cidade, uma rede de interações entre os participantes de um grupo social e até uma rede de dependências entre diferentes etapas de um cronograma.
          </TextPC>
          <TextPC>
          O Pilar <Text style={{fontWeight: 'bold'}}>Decomposição</Text> auxilia na identificação de diferentes subconjuntos de
          funcionalidades de um objeto, permitindo a exploração enquanto um objeto independente, ao mesmo tempo que considera as suas interfaces.
          </TextPC>
          <TextPC>
          O Pilar <Text style={{fontWeight: 'bold'}}>Reconhecimento de Padrões</Text> apoia a modelagem de objetos decompostos na busca pela identificação de estruturas conhecidas, em diferentes áreas do
          conhecimento que possam facilitar a exploração dos elementos resultantes da decomposição. Além disso, padrões e consequentemente, seus reconhecimentos,
          ocorrem nos mais diversos domínios do conhecimento, o que possibilita um intercâmbio entre diferentes campos de aplicação.
          </TextPC>
          <TextPC>
          O Pilar <Text style={{fontWeight: 'bold'}}>Algoritmos</Text> pode facilitar o intercâmbio entre saberes, ao usar uma linguagem padronizada para falar sobre processos. Além disso, um mesmo algoritmo
          pode ser transposto para diferentes domínios do conhecimento.
          </TextPC>
        </DivPC>
        <Title style={{marginBottom: 5}}>Fontes:</Title>
        <PressableFontsButton 
          title='Youtube: Definições de Pensamento Computacional'
          onPress={() => openVideo()}
        />
        <PressableFontsButton 
          title='Web: O que é pensamento computacional: a metodologia de solução de problemas complexos'
          onPress={() => openSite()}
        />
        <PressableFontsButton 
          title='PDF: Uma abordagem interdisciplinar para o pensamento computacional no ensino fundamental'
          onPress={() => openPDF()}
        />        
      </Container>
    </ScrollView>
    
  )
}