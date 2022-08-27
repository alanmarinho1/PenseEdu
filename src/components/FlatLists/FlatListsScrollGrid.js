import React from "react";
import {FlatList} from "react-native";
import styled from "styled-components";

export default function ListGrid(props) {


    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.name} rel={item.rel} photo={item.photo} icon={item.icon} navigation={props.navigation} />
      );
      
    return(
        <FlatList 
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        />
    )
}

const Item = (props) => (

  <DivItem onPress={() => props.navigation.navigate("DetalhesDisciplina", {name:props.title, rel: props.rel, photo:props.photo})}>
    
    <DivTitle>
      <Title>{props.title}</Title>
    </DivTitle>
    <DivIcon>
      <Icon
      source={props.icon}/>
    </DivIcon>
</DivItem>
  );

const DivItem = styled.TouchableOpacity`

    border: 1px #3CB371;
    border-radius: 10px;
    background-color: rgba(224, 255, 255, 0.6);
    width: 44.3%;
    height: 120px;
    margin: 0px 10px 20px 10px;
    padding: 5px;
    justify-content: space-around;

`
const DivTitle = styled.View`

  align-items: center;
  justify-content: center;

`
const DivIcon = styled.View`

  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #00875F;
`
const IconComponent = styled.Image`

  width: 60px;
  height: 60px;
`
const Icon = ({source}) => (

  <IconComponent source={{uri: source}}/>
    
);

