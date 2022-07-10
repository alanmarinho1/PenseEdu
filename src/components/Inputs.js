import styled from "styled-components/native";
import React from "react";

export const InputLogin = styled.TextInput`

    /* border: 1px red solid; */
    height: 30px;
    width: 200px;
    /* margin: 10px; */
`

export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText}) => (
    <InputLogin placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}></InputLogin>
  
);

