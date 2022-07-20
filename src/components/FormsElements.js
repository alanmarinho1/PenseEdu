import styled from "styled-components/native";
import React from "react";

export default function FormElements({texto, placeholder, func, value}){
    return(
        <DivInputForm>
            <FormLabel>{texto}</FormLabel>
            <InputTextField
            placeholder={placeholder}
            type="text"
            onChangeText={(text) => func(text)}
            value={value}/>
        </DivInputForm>
    )
}

const FormLabel = styled.Text`

    color: #3CB371;
    font-size: 16px;
`;
const InputForm = styled.TextInput`

    /* border: 1px red solid; */
    height: 30px;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    padding: 5px;
`
const DivInputForm = styled.View`

    margin: 5px;
`

const InputTextField = ({placeholder, secureTextEntry, value, onChangeText}) => (
    <InputForm placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}></InputForm>
  
);
