import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, DivFlatListAtv, TitleComponents, DivNews, DivLatestAtv, DivAtv } from './styles'
import ListH from '../../components/FlatLists/FlatListsScrollH'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../../utils/firestoreDateFormate';
import { Loading } from '../../components/Loading';
import { newsapi } from '../../utils/news';
import ListV from '../../components/FlatLists/FlatListsScrollV';
import ListGrid from '../../components/FlatLists/FlatListsScrollGrid';
import ListGridH from '../../components/FlatLists/FlatListsScrollGridH';


export default function Home(props) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [news, setNews] = useState();
  const [latestActivities, setLatestActivities] = useState();
  const [suggestedActivities, setSuggestedActivities] = useState();

  function LoadNews(){
    newsapi.v2.everything({
      q: '"pensamento computacional"OR"educação digital"',
  
  }).then(response => {

      const data = response.articles.map( item => {
      const {title, publishedAt, urlToImage, url} = item;
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

  function LoadLatestActivities(){
    firestore()
    .collection("activities")
    .orderBy("created_at", "desc")
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
        
        setLatestActivities(data)
      })
  }

    function LoadSuggestedActivities(){
     firestore()
    .collection("activities")
    .where("discipline", "in", props.navigation.getId()[0].disciplines)
    .onSnapshot(snapshot => {
      
        const data = snapshot.docs.map(doc =>  {

            const { author, description, discipline, hability, objective, created_at, title, resources, scenario, type, pilar, attachment } =  doc.data();

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
        setSuggestedActivities(data)
      })
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      LoadLatestActivities();
      LoadSuggestedActivities();
      LoadNews();
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing){
    return <Loading/>
  } else {
    return (
        <Container>
          <DivFlatListAtv>
            <DivAtv>
              <TitleComponents>Ultimas Atividades:</TitleComponents>
              <ListGridH navigation={props.navigation} data={latestActivities} />
            </DivAtv>
            <DivAtv>
              <TitleComponents>Atividades Sugeridas:</TitleComponents>
              <ListGridH navigation={props.navigation} data={suggestedActivities} />
            </DivAtv>
          </DivFlatListAtv>
          <DivNews>
            <TitleComponents>Feed - Educação e Tecnologia</TitleComponents>
            <ListV data={news} type={"News"}/>
          </DivNews>
        </Container>
    )
  }
}