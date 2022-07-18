import React from 'react';
import { Button } from 'react-native';
import styled, {css} from 'styled-components/native';
import { IconButton} from 'react-native-paper'


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
  top: 170px;
  border-radius: 10px;

  background-color: ${props => props.bgColor};
`;

const WellcomeButtonText = styled.Text`

  font-size: 18px;
  width: 100px;
  color: white;
  /* padding-bottom: 5px; */



`;

export const PressableLoginButton = ({ onPress, bgColor, title }) => (
    <LoginButton onPress={onPress} bgColor={bgColor}>
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
    <IconButton icon={"forward"} />
    {/* <Button icon={"arrow_forward"} /> */}
  </WellcomeButton>
);