import React from "react";
import { ScrollView, FlatList, View, Text } from "react-native";
import styled from "styled-components";

export default function ListV({navigation}) {

    const renderItem = ({ item }) => (
        <Item title={item.title} navigation={navigation}/>
      );
      
    return(
        <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
        />
    )
}

const Item = ({ title, navigation }) => (
    <DivItem onPress={() => navigation.navigate("DetalhesAtividade")}>
      <Text>{title}</Text>
    </DivItem>
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

const DivItem = styled.TouchableOpacity`

    border: 1px grey;
    border-radius: 10px;
    width: 200px;
    height: 80px;
    margin: 0px 0px 10px 10px;
    padding: 5px;

`