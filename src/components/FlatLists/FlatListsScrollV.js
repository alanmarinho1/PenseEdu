import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components";
import * as WebBrowser from 'expo-web-browser';
import { dateFormat } from "../../utils/firestoreDateFormate";

export default function ListV(props) {

  function returnComponent(){

    if (props.type == "Activy"){

      var renderItem = ({ item }) => {

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
          navigation={props.navigation}/> 

      }

    } else if (props.type == "Discipline"){
      var renderItem = ({ item }) => (

        <ItemDisc id={item.id} title={item.name} photo={item.photo} rel={item.rel} icon={item.icon} navigation={props.navigation} />

        )
    } else if (props.type == "News"){
      var renderItem = ({ item }) => (
        
        <ItemNews title={item.title} created_at={item.publishedAt} image={item.urlToImage} url={item.url}></ItemNews>
        
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

  <DivItem onPress={() => props.navigation.navigate("DetalhesDisciplina", {name:props.title, rel: props.rel, photo:props.photo})}>
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

  <DivItemAtv onPress={() => props.navigation.navigate("DetalhesAtividade", {title:props.title, 
    author:props.author, 
    description:props.description, 
    discipline:props.disc,
    hability:props.hability,
    objective:props.objective,
    pilar:props.pilar,
    resources:props.resources,
    scenario:props.scenario,
    type:props.type
    })}>

    <Title style={{marginBottom: 5}}>{props.title}</Title>
    <Text>{props.author}</Text>
    <Text>{props.duration} min</Text>
  </DivItemAtv>
);

const ItemNews = (props) => (

  <DivItemNew onPress={() => WebBrowser.openBrowserAsync(props.url)}>
    <View>
      <IconNews source={props.image} />
    </View>
    <DivNewsText>
      <Text style={{fontWeight: 'bold', fontSize:13, color: '#00875F'}}>{props.title}</Text>
      <Text>{props.created_at}</Text>
    </DivNewsText>
  </DivItemNew>
);


const DivItemNew = styled.TouchableOpacity`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(224, 255, 255, 0.6);
  /* width: 80%;
  height: 45%; */
  margin-bottom: 10px;
  padding: 5px; 
  flex-direction: row; 
  justify-content: space-around;
  /* align-items: center;
  justify-content: center */

`
const DivNewsText = styled.View`
  width: 60%;
  justify-content: space-between;
  /* flex-direction: column;  */
  /* justify-content: 'space-between'; */
`
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

const DivItemAtv = styled.TouchableOpacity`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(224, 255, 255, 0.6);
  /* width: 80%;
  height: 45%; */
  margin: 0px 0px 10px 10px;
  padding: 5px; 
  align-items: center;
  justify-content: center

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

const IconNewsComponent = styled.Image`

  width: 100px;
  height: 90px;
`
const IconNews = ({source}) => (

  <IconNewsComponent source={{uri: source}}/>
    
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