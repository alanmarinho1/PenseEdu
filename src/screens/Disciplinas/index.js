import { View, Text, ScrollView } from 'react-native'
import React ,{useState, useEffect} from 'react'
import { Container, DivFlatListDisc, TitleFlatListDisc, DivAllDisc, TitleScreen } from './styles'
import ListV from '../../components/FlatLists/FlatListsScrollV'
import ListGrid from '../../components/FlatLists/FlatListsScrollGrid'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
import { Loading } from '../../components/Loading';

export default function Disciplinas({navigation}) {

  const [myDisciplines, setMyDisciplines] = useState();
  const [allDisciplines, setAllDisciplines] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function LoadMyDisciplines(){
    firestore()
    .collection("disciplines")
    .where("name", "in", navigation.getId()[0].disciplines)
    .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
            const { icon, name, photo, rel } = doc.data();

            return {
                id: doc.id,
                icon,
                name,
                photo,
                rel
            }
        });
        
        setMyDisciplines(data)
        // if (initializing) setInitializing(false)
      })
  }
  
  function LoadAllDisciplines(){
    firestore()
    .collection("disciplines")
    .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
            const { icon, name, photo, rel } = doc.data();

            return {
                id: doc.id,
                icon,
                name,
                photo,
                rel
            }
        });
        setAllDisciplines(data)
        // if (initializing) setInitializing(false)
      })
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user)
      LoadMyDisciplines()
      LoadAllDisciplines()
      if (initializing) setInitializing(false)
    });

    return unsubscribe;
  }, []);

  if (initializing){
    return <Loading/>
  } else {
  return (
    <Container>
      
      <TitleScreen>Disciplinas</TitleScreen>
      <DivFlatListDisc>
        <TitleFlatListDisc>Suas Disciplinas:</TitleFlatListDisc>
        <ListV navigation={navigation} data={myDisciplines} type={"Discipline"}/>
      </DivFlatListDisc>
      <DivAllDisc>
        <TitleFlatListDisc>Todas as disciplinas:</TitleFlatListDisc>
        <ListGrid navigation={navigation} data={allDisciplines}/>
      </DivAllDisc>
    </Container>
  )
  }
} 