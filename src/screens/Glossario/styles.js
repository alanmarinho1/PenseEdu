import styled from 'styled-components/native';
import { Text } from 'react-native';

export const Container = styled.View`

    flex: 1;
    align-items: center;
   
`
export const DivTitleScreen = styled.View`

    
`
export const DivGlossary = styled.View`

    border: 1px grey;
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    padding: 10px;
    width: 360px;
    height: 1110px;
`

const DivGlossaryItem = styled.View`

    border: 1px grey;
    border-radius: 10px;
    margin: 0px 0px 10px 0px;
    padding: 5px;
    width: 340px;
    
`

export const TitleScreen = styled.Text`

  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;

`
const GlossaryTitle = styled.Text`

    font-weight: bold;
`

export const GlossaryItem = ({title, description}) => (
    <DivGlossaryItem>
        <GlossaryTitle>{title}</GlossaryTitle>
        <Text>{description}</Text>
    </DivGlossaryItem>
);