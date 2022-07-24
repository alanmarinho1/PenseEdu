import { View, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import { Container, TitleScreen, DivFlatListAtv, Title, DivAllAtv, DivRelPC, DivDescriptionRelPC, DescriptionRelPC } from './styles'
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
  
  // const [userId, setUserId] = useState(navigation.getId()[0]);

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

    return unsubscribe;
  }, []);
  if (initializing){
    return <Loading/>
  } else {
  return (
    <Container>
      {console.log("Conteudo props: ", user.name)}
      <TitleScreen>{discipline}</TitleScreen>
      <DivRelPC>
        <Title>Relação da disciplina com PC:</Title>
        <DivDescriptionRelPC>
          <DescriptionRelPC>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis faucibus libero. In tempor elit sed tempor interdum. Aliquam id varius ligula. Nunc auctor fermentum dui. Praesent convallis nisi vel maximus fringilla. Fusce metus justo, bibendum sed nisi dapibus, pretium pharetra eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</DescriptionRelPC>
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