import React, {useEffect, useState} from "react";
import { ScrollView, FlatList, View, Text, Image } from "react-native";
import styled from "styled-components";
import firestore from '@react-native-firebase/firestore'
import { Loading } from "../Loading";

export default function ListH(props) {

  // const [initializing, setInitializing] = useState(true)
  // const [author, setAuthor] = useState()

  // function LoadAuthor(author){
  //   firestore()
  //   .collection("user")
  //   .where("user_id", "==", author)
  //   .onSnapshot(snapshot => {
  //       const data = snapshot.docs.map(doc => {
  //           const {name} = doc.data();
  //           return {
  //               id: doc.id,
  //               name
  //           }
  //       });
  //       setAuthor(data)
  //       if (initializing) setInitializing(false)
  //     })
      
  // }

    function returnComponent(){

      if (props.type == "Activy"){

        var renderItem = ({ item }) => {
          // LoadAuthor(item.author)
          // if(initializing) return <Loading />
            
            return <ItemAtv id={item.id} title={item.title} author={item.author} disc={item.discipline} created={item.when} navigation={props.navigation}/>
          
        }
        
        // var renderItem = ({ item }) => (

        //   <ItemAtv title={item.title} author={author} navigation={props.navigation}/>

        //   )
      } else if (props.type == "Discipline"){
        var renderItem = ({ item }) => (
          <ItemDisc id={item.id} title={item.name} icon={item.icon} navigation={props.navigation} />
          )
      }

      return (renderItem);
    }

    // useEffect(() => {
      // console.log("useEffect", props.data[0].author)
      // const unsubscribe = LoadAuthor(props.data.author)
  
      // return unsubscribe;
    // }, []);
      
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
    
    <DivItem onPress={() => props.navigation.navigate("DetalhesAtividade",  {id:props.id})}>
      {/* {console.log(props)} */}
      <DivTitleAtv>
        <Title>{props.title}</Title>
      </DivTitleAtv>
      <DivInfoAtv>
      <Text>{props.author}</Text>
      <Text>{props.disc}</Text>
      <Text>{props.created}</Text>
      </DivInfoAtv>

      
    </DivItem>
  );

const DivItem = styled.TouchableOpacity`

    border: 1px #3CB371;
    background-color: rgba(224, 255, 255, 0.6);
    width: 200px;
    height: 100px;
    margin-left: 10px;
    justify-content: space-between;
    /* background-color: rgba(224, 255, 255, 0.5); */
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