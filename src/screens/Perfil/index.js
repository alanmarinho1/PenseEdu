import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, DivPhoto, Photo } from './styles'
import { Loading } from '../../components/Loading';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { IconButton } from "react-native-paper";

export default function Perfil({route, navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [userId, setUserId] = useState(navigation.getId()[0]);



  return (
    <Container>
      <DivPhoto>
        {console.log(userId)}
        <Photo
        source={userId.photo}>
          
        </Photo>
        <IconButton
            icon={"image-edit"}
            backgroundColor="#3CB371"
            color='white'
            style={{backgroundColor: "#00875F", bottom: 30, left: 30}}
            size={30}
            onPress={() => alert("Alterar foto")}
            />
      </DivPhoto>
    </Container>
  )
  
}