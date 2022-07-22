import styled from "styled-components/native";
import React from "react";

export const InputLogin = styled.TextInput`

    /* border: 1px red solid; */
    height: 35px;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px gray;
`

export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText, width, active}) => (
    <InputLogin placeholder={placeholder} 
    secureTextEntry={secureTextEntry} 
    value={value} 
    onChangeText={onChangeText} 
    editable={active}
    style={width ? {width: width} : {width: InputLogin.width}}
    // style={{height: 35 | height, width: 100}}
    />
);

