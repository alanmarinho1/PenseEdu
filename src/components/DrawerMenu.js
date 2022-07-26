
import React, {useEffect, useState } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import styled from 'styled-components/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Home from '../screens/Principal';
import Disciplinas from '../screens/Disciplinas';
import Disciplina from '../screens/DetalhesDisciplina';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerItem from './DrawerItems';
import { useRoute } from '@react-navigation/native';
import Atividade from '../screens/Atividade';
import Glossario from '../screens/Glossario';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../utils/firestoreDateFormate';
import { Loading } from './Loading';
import Perfil from '../screens/Perfil';


const Drawer = createDrawerNavigator();

function handleLogout(navigation) {
    auth()
    .signOut()
    .then(() => {
        alert("Usuario desconectado")
        navigation.navigate("Login")
    })
    .catch(error => {
        console.log(error);
        return Alert.alert('Sair', 'Não foi possivel sair do app.')
    });
}

const getActiveRouteState = function (routes, index, name) {
    return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
  };

const CustomDrawer = (props) => {

    const userInfo = props.navigation.getId()[0];

    const userPhoto = () => {
        if(userInfo.photo){
            return userInfo.photo;
        } else {
            return 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        }
    }

    return (
      <DivDrawer>
        <DivUserDrawer>
            <DivUserInfoDrawer>
                <Image
                source={{uri: userPhoto()}}
                style={{width: 100, height: 100, borderRadius: 50, marginTop: 30, marginBottom: 5}}
                />
                <NomeDrawer>{userInfo.name}</NomeDrawer>
                <EmailDrawer>{userInfo.email}</EmailDrawer>
            </DivUserInfoDrawer>
        </DivUserDrawer>
        <DivItems>
            <DrawerItem
            icon={"home"}
            label={"Home"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Principal')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Principal")
                }
            }}
            />
            <DrawerItem
            icon={"account"}
            label={"Perfil"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Profile')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Profile")
                }
            }}
            />
            <DrawerItem
            icon={"animation-outline"}
            label={"Disciplinas"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Disciplinas')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"compass-rose"}
            label={"Glossário"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Glossario')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Glossario")
                }
            }}/>
            <DrawerItem
            icon={"library"}
            label={"Pensamento Computacional"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Disciplinas')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"book-outline"}
            label={"BNCC"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Disciplinas')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"information-outline"}
            label={"Sobre"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Disciplinas')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"help-circle-outline"}
            label={"Ajuda"}
            func={() => {
                if(getActiveRouteState(props.state.routes, props.state.index, 'Disciplinas')){
                    props.navigation.closeDrawer()
                }else{
                    props.navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"exit-run"}
            label={"Sair"}
            func={() => {handleLogout(props.navigation)}}/>
        </DivItems>
        <DivDebBy>
            <DevBy>Desenvolvido por</DevBy>
            <Text>Alan Marinho</Text>
        </DivDebBy>
      </DivDrawer>
    )
}



export function DrawerComponent({navigation}){

    const [userId, setUserId] = useState(navigation.getId())
    const [userData, setUserData] = useState([])
    const [initializing, setInitializing] = useState(true)

    useEffect(() => {
        
        const unsubscriber = auth().onAuthStateChanged(user => {
            if(user){
                setUserId(user.uid)
            }
          
        });
        const subscriber = firestore()
        .collection('users')
        .where('user_id', '==', userId)
        .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => {
                const { name, email, user_id, graduation, photo, created_at, contact } = doc.data();

                return {
                    id: doc.id,
                    name,
                    email,
                    user_id,
                    graduation,
                    photo,
                    contact,
                    when: dateFormat(created_at)
                }
            });

            setUserData(data)
            if (initializing) setInitializing(false)
        })
        
        return unsubscriber;
      }, []);

    if(initializing){
        return <Loading/>
    } else {
        return(
            <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
            headerStyle:{
                backgroundColor:'#00875F',
            },
            headerTitle:'CompEdu',
            headerTintColor: 'white',
            headerShown: true,
            drawerType:'slide',
            }}
            
            id={userData}
            drawerContent={(props) => <CustomDrawer {...props}/>}
            backBehavior={'history'}>
            
            <Drawer.Screen name="Principal" component={Home} options={{drawerLabel: "Home"}}/>
            <Drawer.Screen name="Disciplinas" component={Disciplinas} options={{drawerLabel: "Disciplinas"}}/>
            <Drawer.Screen name="Profile" component={Perfil} options={{drawerLabel: "Glossario"}}/>
            <Drawer.Screen name="DetalhesDisciplina" component={Disciplina} options={({ navigation }) => ({
              headerLeft: () => <IconButton icon={'keyboard-backspace'} size={27} color={'white'} onPress={() => navigation.jumpTo('Disciplinas')}/>
            })}/>
           
            <Drawer.Screen name="DetalhesAtividade" component={Atividade} options={({ navigation }) => ({
              headerLeft: () => <IconButton icon={'keyboard-backspace'} size={27} color={'white'} onPress={() => navigation.goBack()}/>
            })}/>
            <Drawer.Screen name="Glossario" component={Glossario} options={{drawerLabel: "Glossario"}}/>
            </Drawer.Navigator>
        )
    }
    
}

const DivDrawer = styled.View`

  flex: 1;
    
`
const DivUserDrawer = styled.View`

    background: #00875F;
`
const DivUserInfoDrawer = styled.View`

    margin-left: 15px;
    bottom: 20px;
`
const DivItems = styled.View`

`
const NomeDrawer = styled.Text`

    width: 150px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 17px;
    color: white;
`
const EmailDrawer = styled.Text`

    width: 220px;
    font-size: 16px;
    color: white;
`
const DivDebBy = styled.View`

    align-items: center;
    
    top: 200px;
    
`
const DevBy = styled.Text`

    font-size: 10px;
    
`
