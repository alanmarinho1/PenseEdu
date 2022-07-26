import { View, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import { Container, TitleScreen, DivFlatListAtv, Title, DivAllAtv, DivRelPC, DivDescriptionRelPC, DescriptionRelPC, DivPhoto, Photo } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'
import ListV from '../../components/FlatLists/FlatListsScrollV'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { Loading } from '../../components/Loading'
import { dateFormat } from '../../utils/firestoreDateFormate';


export default function Disciplina({navigation, route}) {

  const [allActivities, setAllActivities] = useState();
  const [myActivities, setMyActivities] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(navigation.getId()[0]);
  const discipline = route.params.name
  const rel = route.params.rel
  const photo = route.params.photo

  function LoadActivities(){
    firestore()
    .collection("activities")
    .where("discipline", "==", discipline)
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

  function LoadMyActivities(){
    firestore()
    .collection("activities")
    .where("discipline", "==", discipline)
    .where("author", "==", user.name)
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
        
        setMyActivities(data)
      })
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      LoadActivities()
      LoadMyActivities()
      if (initializing) setInitializing(false)
    });

    // return unsubscribe;
  }, [discipline]);
  if (initializing){
    return <Loading/>
  } else {
  return (
    <Container>
      {/* <TitleScreen>{discipline}</TitleScreen> */}
      <DivPhoto>
        <Photo source={photo}/>
      </DivPhoto>
      <DivRelPC>
        <Title>Relação da disciplina com PC:</Title>
        <DivDescriptionRelPC> 
          <DescriptionRelPC>{rel}</DescriptionRelPC>
        </DivDescriptionRelPC>
      </DivRelPC>
      <DivFlatListAtv>
        <Title>Suas Atividades:</Title>
        <ListH navigation={navigation} data={myActivities} type={"Activy"}/> 
      </DivFlatListAtv>
      <DivAllAtv>
        <Title>Todas as atividades:</Title>
        <ListV navigation={navigation} data={allActivities} type={"Activy"}/>
      </DivAllAtv>
    </Container>
  )
  }
}