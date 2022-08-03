import React from 'react';
import { Text } from 'react-native';
import styled, {css} from 'styled-components/native';
import { IconButton } from 'react-native-paper'


const LoginButton = styled.TouchableOpacity`

  align-self: center;
  width: 300px;
  height: 45px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;

const LoginButtonText = styled.Text`

  font-size: 16px;
  color: white;
  text-align: center;
  margin-top: 10px;

`;

const RegisterButton = styled.TouchableOpacity`

  align-self: center;
  margin-top: 15px;
  width: 300px;
  height: 45px;
  border-radius: 10px;
  border: 1px #3CB371;
  background-color: ${props => props.bgColor};
`;

const RegisterButtonText = styled.Text`

  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: #3CB371;
  
`;

const WellcomeButton = styled.TouchableOpacity`

  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* align-content: space-between; */
  width: 180px;
  height: 45px;
  top: 35%;
  border-radius: 10px;

  background-color: ${props => props.bgColor};
`;

const WellcomeButtonText = styled.Text`

  font-size: 18px;
  width: 100px;
  color: white;
  /* padding-bottom: 5px; */
`;

const FontsButton = styled.TouchableOpacity`

  border: 1px #3CB371;
  flex-direction: row;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  width: 90%;
  padding: 0px 5px 0px 5px;
`
const TextFontsButton = styled.Text`

  padding: 2%;
  font-weight: bold;
  font-size: 16px;
  text-align: justify;
`

const FontBNCCButton = styled.TouchableOpacity`
  /* background-color: white; */
  padding: 2%;
  /* width: 90%; */
`

const TextFontBNCCButton = styled.Text`

  font-size: 16px;
  /* text-align: justify; */
  color: blue;
  text-decoration: underline;
  
`

const SendMessageButton = styled.TouchableOpacity`

  align-self: flex-end;
  margin: 0px 10px 10px 0px;
  width: 100px;
  height: 45px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`
const TextSendMessageButton = styled.Text`

  font-size: 16px;
  color: white;
  text-align: center;
  margin-top: 10px;

`

export const PressableLoginButton = ({ onPress, bgColor, title }) => (
    <LoginButton onPress={onPress} bgColor={bgColor} >
      <LoginButtonText>{title}</LoginButtonText>
    </LoginButton>
  );

export const PressableRegisterButton = ({ onPress, bgColor, title }) => (
  <RegisterButton onPress={onPress} bgColor={bgColor}>
    <RegisterButtonText>{title}</RegisterButtonText>
  </RegisterButton>
);

export const PressableWellcomeButton = ({ onPress, bgColor, title }) => (
  <WellcomeButton onPress={onPress} bgColor={bgColor}> 
    <WellcomeButtonText>{title}</WellcomeButtonText>
    <IconButton icon={"arrow-right"} color={'white'} size={25}/>
    {/* <Button icon={"arrow_forward"} /> */}
  </WellcomeButton>
);

export const PressableFontsButton = ({ onPress, bgColor, title }) => (
  <FontsButton onPress={onPress} bgColor={bgColor}>
    <TextFontsButton>{title}</TextFontsButton>
  </FontsButton>
);

export const PressableFontsBNCCButton = ({ onPress, bgColor, title, text }) => (
  <FontBNCCButton onPress={onPress} bgColor={bgColor}>
    <Text style={{fontWeight: 'bold'}}>{title}</Text><TextFontBNCCButton>{text}</TextFontBNCCButton>
  </FontBNCCButton>
);

export const PressableSendMessageButton = ({ onPress, bgColor, title }) => (
  <SendMessageButton onPress={onPress} bgColor={bgColor} >
    <TextSendMessageButton>{title}</TextSendMessageButton>
  </SendMessageButton>
);