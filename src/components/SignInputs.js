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
    border: 1px ;
    font-size: 15px;
    border-color: gray;
`

export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText, width, active, borderBottom, keyboardType, autoComplete}) => (
    <InputLogin placeholder={placeholder} 
    secureTextEntry={secureTextEntry} 
    value={value} 
    onChangeText={onChangeText} 
    editable={active}
    keyboardType={keyboardType}
    autoComplete={autoComplete}
    style={width ? {width: width} : {width: InputLogin.width},
    borderBottom ? {borderBottomColor: 'gray', borderBottomWidth: 1, borderWidth: 0, backgroundColor: 'transparent'} : 
    {borderWidth: 1, borderColor: 'gray', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
    />
    
);

