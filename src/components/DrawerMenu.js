
import React from 'react'
import { View, Text } from 'react-native'
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


const Drawer = createDrawerNavigator();

export function DrawerComponent(){
    return(
        <Drawer.Navigator
        useLegacyImplementation  
        initialRouteName="Principal" 
        screenOptions={{
        headerStyle:{
            backgroundColor:'#00875F',
        },
        headerTitle:'CompEdu',
        headerTintColor: 'white',
        headerShown: true,
        }}
        drawerContent={(props) => <CustomDrawer {...props}/>}
        backBehavior={'history'}>
        <Drawer.Screen name="Principal" component={Home} options={{drawerLabel: "Home"}}/>
        <Drawer.Screen name="Disciplinas" component={Disciplinas} options={{drawerLabel: "Disciplinas"}}/>
        <Drawer.Screen name="DetalhesDisciplina" component={Disciplina} options={({ navigation }) => ({
          headerLeft: () => <IconButton icon={'keyboard-backspace'} size={30} color={'white'} onPress={() => navigation.jumpTo('Disciplinas')}/>
        })}/>
        <Drawer.Screen name="DetalhesAtividade" component={Atividade} options={({ navigation }) => ({
          headerLeft: () => <IconButton icon={'keyboard-backspace'} size={30} color={'white'} onPress={() => navigation.goBack()}/>
        })}/>
        </Drawer.Navigator>
    )
}


const CustomDrawer = ({ navigation, state }) => {
    const route = useRoute();
    return (
      <DivDrawer>
        <DivUserDrawer>
            <IconButton 
            icon={'account-circle'} 
            style={{right: 20}}
            size={100}
            color={'white'}/>
            <DivUserInfoDrawer>
                <NomeDrawer>Nome de alguem</NomeDrawer>
                <EmailDrawer>emaildealguem@gmail.com</EmailDrawer>
            </DivUserInfoDrawer>
        </DivUserDrawer>
        <DivItems>
            <DrawerItem
            icon={"home"}
            label={"Home"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Principal')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Principal")
                }
            }}/>
            <DrawerItem
            icon={"animation-outline"}
            label={"Disciplinas"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"compass-rose"}
            label={"Glossário"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplina')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("DetalhesDisciplina")
                }
            }}/>
            <DrawerItem
            icon={"library"}
            label={"Pensamento Computacional"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"book-outline"}
            label={"BNCC"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"information-outline"}
            label={"Sobre"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"help-circle-outline"}
            label={"Ajuda"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
            <DrawerItem
            icon={"exit-run"}
            label={"Sair"}
            func={() => {
                if(getActiveRouteState(state.routes, state.index, 'Disciplinas')){
                    navigation.closeDrawer()
                }else{
                    navigation.navigate("Disciplinas")
                }
            }}/>
        </DivItems>
        <DivDebBy>
            <DevBy> Desenvolvido por</DevBy>
            <Text>Alan Marinho</Text>
        </DivDebBy>
        
      </DivDrawer>
    )
}

const getActiveRouteState = function (routes, index, name) {
    return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
  };
  
const DivDrawer = styled.View`

    
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
    top: 210px;
    
`
const DevBy = styled.Text`

    font-size: 10px;
    

`
