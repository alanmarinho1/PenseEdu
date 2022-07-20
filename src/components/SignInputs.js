import styled from "styled-components/native";
import React from "react";

export const InputLogin = styled.TextInput`

    /* border: 1px red solid; */
    height: 35px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px gray;
`

export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText, height, width}) => (
    <InputLogin placeholder={placeholder} 
    secureTextEntry={secureTextEntry} 
    value={value} 
    onChangeText={onChangeText} 
    />
);

