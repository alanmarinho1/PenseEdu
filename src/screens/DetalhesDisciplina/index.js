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
            const { author, description, discipline, hability, objective, created_at, title, resources, scenario, type, pilar, attachment  } = doc.data();

            return {
                id: doc.id,
                author,
                description,
                discipline,
                hability,
                objective,
                title,
                resources,
                scenario,
                type,
                pilar,
                attachment,
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
            const { author, description, discipline, hability, objective, created_at, title, resources, scenario, type, pilar, attachment } = doc.data();
            
            return {
                id: doc.id,
                author,
                description,
                discipline,
                hability,
                objective,
                title,
                resources,
                scenario,
                type,
                pilar,
                attachment,
                when: dateFormat(created_at)
            }
        });
        
        setMyActivities(data)
      })
  }

  function MyActivities() {
    if(typeof myActivities == "undefined" || myActivities.length == 0){
      return(
        <View style={{height: 90, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, textAlign: 'center', width: 350, color: 'rgba(0, 0, 0, 0.5)'}}>
            Você ainda não tem atividades criadas nesta disciplina (Em breve esta funcionalidade estará disponível)
          </Text>
        </View>
      )
    } else {
      return(
        <ListH navigation={navigation} data={myActivities} type={"Activy"}/> 
      )
    }
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      LoadActivities()
      LoadMyActivities()
      if (initializing) setInitializing(false)
    });

    return unsubscribe;
  }, [discipline]);
  if (initializing){
    return <Loading/>
  } else {
  return (
    <Container>
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
        <MyActivities/>
      </DivFlatListAtv>
      <DivAllAtv>
        <Title>Todas as atividades:</Title>
        <ListV navigation={navigation} data={allActivities} type={"Activy"}/>
      </DivAllAtv>
    </Container>
  )
  }
}