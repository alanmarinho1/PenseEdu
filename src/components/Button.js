import React from 'react';
import styled, {css} from 'styled-components/native';

const LoginButton = styled.TouchableOpacity`

  align-self: center;
  justify-self: right;
  /* position: relative;
  bottom: 0px; */
  margin-top: 20px;
  width: 300px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;

const LoginButtonText = styled.Text`
  /* width: 90px;
  height: 25px; */
  /* left: 20px;
  bottom: 5px; */
  font-size: 16px;
  align-self: center;
  color: white;
`;

export const PressableLoginButton = ({ onPress, bgColor, title }) => (
    <LoginButton onPress={onPress} bgColor={bgColor}>
      <LoginButtonText>{title}</LoginButtonText>
    </LoginButton>
  );