import React from "react";
import {FlatList} from "react-native";
import styled from "styled-components";

export default function ListGrid(props) {

    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.name} icon={item.icon} navigation={props.navigation} />
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
  <DivItem onPress={() => props.navigation.navigate("Disciplina", {id:id})}>
    
    <DivTitle>
      <Title>{props.title}</Title>
    </DivTitle>
    <DivIcon>
      <Icon
      source={props.icon}/>
    </DivIcon>
</DivItem>
  );

const DivItem = styled.View`

    border: 1px #3CB371;
    border-radius: 10px;
    background-color: rgba(224, 255, 255, 0.6);
    width: 150px;
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


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Forthy Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Fifthy Item',
  },
];
