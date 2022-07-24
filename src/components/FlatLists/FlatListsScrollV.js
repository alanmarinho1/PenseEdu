import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

export default function ListV(props) {

  function returnComponent(){

    if (props.type == "Activy"){

      var renderItem = ({ item }) => {

          return <ItemAtv id={item.id} title={item.title} author={item.author} created={item.when} navigation={props.navigation}/>

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
    horizontal={false}/> 
  )
}

const ItemDisc = (props) => (

  <DivItem onPress={() => props.navigation.navigate("DetalhesDisciplina", {name:props.title})}>
    <DivIcon>
    <Icon
    source={props.icon}/>
    </DivIcon>
    <DivTitle>
      <Title>{props.title}</Title>
    </DivTitle>
    
  </DivItem>
);

const ItemAtv = (props) => (

  <DivItem onPress={() => props.navigation.navigate("DetalhesAtividade", {name:props.title})}>
    <Title>{props.title}</Title>
    <Text>{props.author}</Text>
  </DivItem>
);



const DivItem = styled.TouchableOpacity`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(224, 255, 255, 0.6);
  width: 250px;
  height: 80px;
  margin: 0px 0px 10px 10px;
  padding: 5px;
  flex-direction: row;
  

`

const DivTitle = styled.View`

  align-items: center;
  justify-content: center;
  width: 130px;
  height: 70px;
  margin-left: 30px;

`
const DivIcon = styled.View`

  margin-left: 10px;
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
    title: 'Forth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Fifth Item',
  },
];