import React, {useEffect, useState} from "react";
import { ScrollView, FlatList, View, Text, Image } from "react-native";
import styled from "styled-components";
import firestore from '@react-native-firebase/firestore'
import { Loading } from "../Loading";

export default function ListH(props) {
  
  function  returnComponent(){
    
    if (props.type == "Activy"){

    
        var renderItem = ({ item }) => {

          if (item.author == null){
            return <Loading/>
          } else {  
            return <ItemAtv id={item.id} 
            title={item.title} 
            author={item.author} 
            disc={item.discipline} 
            description={item.description} 
            created={item.when} 
            hability={item.hability}
            objective={item.objective}
            pilar={item.pilar}
            resources={item.resources}
            scenario={item.scenario}
            type={item.type}
            attachment={item.attachment}
            navigation={props.navigation}/> 
          }
        }
    } else if (props.type == "Discipline"){
      var renderItem = ({ item }) => (
        <ItemDisc id={item.id} title={item.name} icon={item.icon} navigation={props.navigation} />
        )
    }
    
    return (renderItem);
  }

  return(
  
    <FlatList 
      data={props.data}
      renderItem={returnComponent()}
      keyExtractor={item => item.id}
      horizontal={true}/> 
  )
}

const ItemDisc = (props) => (

  
  <DivItem onPress={() => props.navigation.navigate("Disciplina", {id:id})}>
    
    <DivTitleDisc>
      <Title>{props.name}</Title>
    </DivTitleDisc>
    <DivDiscIcon>
    <Image
    source={props.icon}
    />
    </DivDiscIcon>
  </DivItem>
);

const ItemAtv = (props) => (

    <DivItem onPress={() => props.navigation.navigate("DetalhesAtividade",  {title:props.title, 
    author:props.author, 
    description:props.description, 
    discipline:props.disc,
    hability:props.hability,
    objective:props.objective,
    pilar:props.pilar,
    resources:props.resources,
    scenario:props.scenario,
    type:props.type,
    created:props.created,
    attachment:props.attachment
    })}>
      <DivTitleAtv>
        <Title>{props.title}</Title>
      </DivTitleAtv>
      <DivInfoAtv>
      <Text>{props.type}</Text>
      <Text>{props.pilar}</Text>
      <Text>{props.created}</Text>
      </DivInfoAtv>
    </DivItem>
  );

const DivItem = styled.TouchableOpacity`

    border: 1px #3CB371;
    background-color: rgba(224, 255, 255, 0.6);
    width: 200px;
    height: 100px;
    margin-right: 10px;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px;

`
const DivTitleAtv = styled.View`

  align-items: center;

`
const DivTitleDisc = styled.View`

  align-items: center;

`
const DivInfoAtv = styled.View`
  
`

const DivDiscIcon = styled.View`
  border: 1px red solid;
`

const Title = styled.Text`
  font-weight: bold;
  color: #00875F;
`
const InfoAtv = styled.Text`
  color: #00875F;
`