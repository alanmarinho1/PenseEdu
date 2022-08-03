import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, DivFlatListAtv, TitleComponents, DivNews } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../../utils/firestoreDateFormate';
import { Loading } from '../../components/Loading';


export default function Home({navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [allActivities, setAllActivities] = useState();
  const [interestActivities, setInterestActivities] = useState();

  function LoadAllActivities(){
    firestore()
    .collection("activities")
    .orderBy("created_at", "desc")
    .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
            const { author, description, discipline, duration, hability, created_at, target, title } = doc.data();

            return {
                id: doc.id,
                author,
                description,
                discipline,
                duration,
                hability,
                target,
                title,
                when: dateFormat(created_at)
            }
        });
        setAllActivities(data)
      })
  }

  function LoadInterestActivities(){
    firestore()
    .collection("activities")
    .where("discipline", "in", ["Matemática", "Ciências"])
    .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
            const { author, description, discipline, duration, hability, created_at, target, title } = doc.data();

            return {
                id: doc.id,
                author,
                description,
                discipline,
                duration,
                hability,
                target,
                title,
                when: dateFormat(created_at)
            }
        });
        setInterestActivities(data)
      })
  }


  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user)
      LoadAllActivities();
      LoadInterestActivities();
      if (initializing) setInitializing(false)
    });

    return unsubscribe;
  }, []);

  if (initializing){
    return <Loading/>
  } else {
    return (
      <ScrollView>
        <Container>
<<<<<<< HEAD
          {/* {console.log("Passando atividades em Home", allActivities)} */}
          <DivFlatListAtv>
            <TitleComponents>Ultimas Atividades:</TitleComponents>
            <ListH navigation={navigation} data={allActivities} type={"Activy"}/>
            <TitleComponents>Atividades Sugeridas:</TitleComponents>
            <ListH navigation={navigation} data={interestActivities} type={"Activy"}/>
          </DivFlatListAtv>
          <DivNews>
            <TitleComponents>O que há de novo?</TitleComponents>
          </DivNews>
          
        </Container>
=======
        {/* {console.log("Passando atividades em Home", allActivities)} */}
        <DivFlatListAtv>
          <TitleComponents>Ultimas Atividades:</TitleComponents>
          <ListH navigation={navigation} data={allActivities} type={"Activy"}/>
          <TitleComponents>Atividades Sugeridas:</TitleComponents>
          <ListH navigation={navigation} data={interestActivities} type={"Activy"}/>
        </DivFlatListAtv>
        <DivNews>
          <TitleComponents>O que há de novo?</TitleComponents>
        </DivNews>
        <DivBNCC>
          <TitleComponents>Sobre BNCC:</TitleComponents>
        </DivBNCC>
      </Container>
  
>>>>>>> master
      </ScrollView>
      
    )
  }

  
}