import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, DivFlatListAtv, TitleComponents, DivNews, DivBNCC } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'
import auth from '@react-native-firebase/auth';
import { Loading } from '../../components/Loading';


export default function Home(props) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user)
      if (initializing) setInitializing(false)
    });

    return unsubscribe;
  }, []);

  if (initializing){
    return <Loading/>
  } else{
    return (
      <ScrollView>
        <Container>
        <DivFlatListAtv>
          <TitleComponents>Ultimas Atividades:</TitleComponents>
          <ListH{...props}/>
          <TitleComponents>Atividades Sugeridas:</TitleComponents>
          <ListH/>
        </DivFlatListAtv>
        <DivNews>
          <TitleComponents>O que há de novo?</TitleComponents>
        </DivNews>
        <DivBNCC>
          <TitleComponents>BNCC:</TitleComponents>
        </DivBNCC>
      </Container>
  
      </ScrollView>
      
    )
  }

  
}