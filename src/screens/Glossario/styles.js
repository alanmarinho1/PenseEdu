import styled from 'styled-components/native';
import { Text } from 'react-native';

export const Container = styled.View`

    flex: 1;
    align-items: center;
    background-color: rgba(224, 255, 255, 0.6);
   
`
export const DivTitleScreen = styled.View`

    
`
export const DivGlossary = styled.View`

    flex: 1;
    background-color: white;
    border: 1px #3CB371;
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    padding: 10px;
    width: 94%;
    
`

const DivGlossaryItem = styled.View`

    border: 1px #3CB371;
    background-color: rgba(224, 255, 255, 0.6);
    border-radius: 10px;
    margin: 0px 0px 10px 0px;
    padding: 5px;
    width: 100%;
    
`

export const TitleScreen = styled.Text`

  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: #00875F; 

`
const GlossaryTitle = styled.Text`

    font-weight: bold;
    color: #00875F; 
`

export const GlossaryItem = ({title, description}) => (
    <DivGlossaryItem>
        <GlossaryTitle>{title}</GlossaryTitle>
        <Text>{description}</Text>
    </DivGlossaryItem>
);