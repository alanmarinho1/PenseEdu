import { View, Text, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import { useScrollToTop } from '@react-navigation/native';
import { Container, GlossaryItem, DivTitleScreen, TitleScreen, DivGlossary } from './styles'

export default function Glossario() {

  return (
    <ScrollView>
        <Container>
        <DivTitleScreen>
            <TitleScreen>Glossário</TitleScreen>
        </DivTitleScreen>
        <DivGlossary>
        <GlossaryItem
            title={'Abstração'}
            description={'O processo de retirar ou remover características de algo para se concentrar nos elementos mais importantes e assim ajudar a gerenciar a complexidade.'}/>
        <GlossaryItem
            title={'Algoritmo'}
            description={'A ordem em que um programa irá abordar subproblemas de um problema.'}/>
        <GlossaryItem
            title={'Cifra'}
            description={'Uma forma secreta de escrever; um código.'}/>
        <GlossaryItem
            title={'Computação'}
            description={'O processo de usar tecnologia informática para completar uma tarefa.'}/>
        <GlossaryItem
            title={'Criptografar'}
            description={'Mascarar informações para torná-las ilegíveis sem senhas especiais.'}/>
        <GlossaryItem
            title={'Decomposição'}
            description={'O processo de dividir um grande problema em partes menores.'}/>
        <GlossaryItem
            title={'Delimitador'}
            description={'Um ou mais caracteres que separam os strings de texto.'}/>
        <GlossaryItem
            title={'Descriptografar'}
            description={'Converter texto ou dados codificados ou criptografados em texto que pode ser lido e entendido por uma pessoa ou computador.'}/>
        <GlossaryItem
            title={'Empregar'}
            description={'Para fazer uso de.'}/>
        <GlossaryItem
            title={'Implementar'}
            description={'Pôr em prática um plano ou decisão.'}/>
        <GlossaryItem
            title={'Iteração'}
            description={'Comandos que repetem ou usam loops em outros comandos de programação.'}/>
        <GlossaryItem
            title={'Palavras-chave'}
            description={'Palavras especiais em JavaScript que são usadas para identificar ações a serem executadas.'}/>
        <GlossaryItem
            title={'Progressão Aritmética'}
            description={'Uma sequência de números onde a diferença entre os números é constante.'}/>
        <GlossaryItem
            title={'Segurança Virtual'}
            description={'Medidas tomadas para proteger um computador ou sistema informático contra acesso ou ataque não autorizado.'}/>
        </DivGlossary>
        </Container>
    </ScrollView>
    
  )
}