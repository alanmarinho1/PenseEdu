import { View, Text, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, CreatedAt, DivPhoto, DivUserInfo, Photo, TextForm, DivButton } from './styles'
import { IconButton } from "react-native-paper";
import { InputTextField } from '../../components/SignInputs';
import { PressableLoginButton } from '../../components/Button';

export default function Perfil({route, navigation}) {

  const [userId, setUserId] = useState(navigation.getId()[0]);

  return (
    <Container>
      <DivPhoto>
        {console.log(userId)}
        <Photo
        source={userId.photo}>
        </Photo>
        <IconButton
            icon={"image-edit"}
            backgroundColor="#3CB371"
            color='white'
            style={{backgroundColor: "#00875F", bottom: 30, left: 30}}
            size={25}
            onPress={() => alert("Alterar foto")}
            />
        <CreatedAt>Criado em: {userId.when}</CreatedAt>
      </DivPhoto>
      <DivUserInfo>
        <TextForm>Nome:</TextForm>
        <InputTextField
        active={false}
        type="text"
        onChangeText={(text) => setName(text)}
        value={userId.name}
        width={200}
        borderBottom={true}/>
        <TextForm>Graduação:</TextForm>
        <InputTextField
        active={false}
        type="text"
        onChangeText={(text) => setName(text)}
        value={userId.graduation}
        width={200}
        borderBottom={true}/>
        <TextForm>Contato:</TextForm>
        <InputTextField
        active={false}
        type="text"
        onChangeText={(text) => setName(text)}
        value={userId.contact}
        width={200}
        borderBottom={true}/>
        <TextForm>Email:</TextForm>
        <InputTextField
        active={false}
        type="text"
        onChangeText={(text) => setName(text)}
        value={userId.email}
        width={200}
        borderBottom={true}/>
        <DivButton>
          <PressableLoginButton
            title={"Alterar"}
            onPress={() => Alert.alert("Alterar", "Recurso em desenvolvimento...")}
            bgColor='#3CB371'
          />
        </DivButton>
      </DivUserInfo>
    </Container>
  )
}