import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, DivFlatListAtv, TitleComponents, DivNews } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../../utils/firestoreDateFormate';
import { Loading } from '../../components/Loading';
import { newsapi } from '../../utils/news';
import ListV from '../../components/FlatLists/FlatListsScrollV';


export default function Home({navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [news, setNews] = useState();
  const [allActivities, setAllActivities] = useState();
  const [interestActivities, setInterestActivities] = useState();

  function LoadNews(){
    newsapi.v2.everything({
      q: '"pensamento computacional"OR"educação digital"',
  
  }).then(response => {
    // setNews(response.articles)
    
      const data = response.articles.map( item => {
      const {title, publishedAt, urlToImage, url} = item;

      // var dia = new Date(publishedAt);
      // dia = dia.toLocaleString()
      // // var dataFormat = dia.toLocaleTimeString().format("HH/MM")
      // var dataFormat = Date.parse(dia)
      // var dataFormat = publishedAt.substr(0, 10)
      var date = new Date(publishedAt);
      var dateFormat = (date.toLocaleDateString().substring(3,5) + "/" + date.toLocaleDateString().substring(0,2) + 
      "/" + (date.getFullYear()) + " às " + date.toLocaleTimeString().substring(0,5))
        return {
          title: title, 
          publishedAt: dateFormat, 
          urlToImage: urlToImage, 
          url: url
        }
      });
      setNews(data)
    })
  }

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
      LoadNews();
      if (initializing) setInitializing(false)
    });

    return unsubscribe;
  }, []);

  if (initializing){
    return <Loading/>
  } else {
    return (
      // <ScrollView>
        <Container>
          {/* {console.log("Passando atividades em Home", allActivities)} */}
          <DivFlatListAtv>
            <TitleComponents>Ultimas Atividades:</TitleComponents>
            <ListH navigation={navigation} data={allActivities} type={"Activy"}/>
            <TitleComponents>Atividades Sugeridas:</TitleComponents>
            <ListH navigation={navigation} data={interestActivities} type={"Activy"}/>
          </DivFlatListAtv>
          <DivNews>
            <TitleComponents>Feed - Educação e Tecnologia</TitleComponents>
            {/* {console.log(news)} */}
            <ListV data={news} type={"News"}/>
          </DivNews>
        </Container>
      // </ScrollView>
      
    )
  }

  
}