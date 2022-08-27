import React from "react";
import {FlatList, Text, View} from "react-native";
import styled from "styled-components";

export default function ListGridH(props) {

  
      const renderItem = ({ item }) => (
         
          <ItemAtv id={item.id} 
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
      )

    return(
        <FlatList 
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        />
    )
}

  const ItemAtv = (props) => (

    <DivItem onPress={() => props.navigation.navigate("DetalhesAtividade", {title:props.title, 
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
      attachment:props.attachment})}>
      
      <DivTitle>
        <Title>{props.title}</Title>
      </DivTitle>
      <View>
        <TextItem>{props.disc}</TextItem>
        <TextItem>{props.author}</TextItem>
        <TextItem>{props.created}</TextItem>
      </View> 
  </DivItem>
    );

const DivItem = styled.TouchableOpacity`

    border: 1px #3CB371;
    border-radius: 10px;
    background-color: rgba(224, 255, 255, 0.6);
    width: 49.3%;
    height: 100px;
    margin: 0px 5px 10px 0px;
    padding: 5px;
    justify-content: space-between;

`
const DivTitle = styled.View`


`
const Title = styled.Text`

  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: #00875F;
`
const TextItem = styled.Text`
  font-size: 12px;
`
