import styled from 'styled-components/native';
import { Text, ImageBackground } from 'react-native';

export const Container = styled.View`

    background-color: '#E0FFFF';
    flex:1; 
    align-items: 'center';
    justify-content: center;
`

export const WellcomeImage = styled.ImageBackground`
    flex: 1;
    /* width: 390px;
    height: 750px; */
    width: 390px;
    align-items: center;
    justify-content: center;

`;
export const DivWellcome = styled.View`

    height: 400px;
    justify-content: space-between;
    align-items: center;

`

export const DivWellcomeOne = styled.View`

    width: 350px;
    height: 125px;
    border-radius: 10px;
    background-color: white;
    align-items: center;

`
export const DivWellcomeTwo = styled.View`
    
    width: 350px;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    align-items: center;

`
export const TitleComponent = styled.Text`
    
    margin-top: 5px;
    font-size: 20px;
    color: #3CB371;
    font-weight: bold;
    
`
export const TextComponent = styled.Text`

    /* border: 1px red solid; */
    font-size: 16px;
    width: 310px;
    text-align: center;
`