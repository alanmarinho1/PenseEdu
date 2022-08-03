import styled from 'styled-components/native';


export const Container = styled.ScrollView`
  flex: 1;
  /* align-items: center; */
  background-color: rgba(224, 255, 255, 0.6);
`;

export const DivAbout = styled.View`

  border: 1px #3CB371;
  margin-top: 10px;
  border-radius: 10px;
  width: 91%;
  padding: 0px 5px 0px 5px;
  background-color: white;
`

export const TextAbout = styled.Text`

  padding: 2%;
  font-size: 16px;
  text-align: justify;
`
export const Title = styled.Text`

  width: 87%;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #00875F; 
  
`
export const TitleScreen = styled.Text`

  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: #00875F;
`

export const Message = styled.TextInput`

  border: 1px #3CB371;
  border-radius: 10px;
  
  /* width: 95%; */
  /* height: 140px; */
  padding: 5px;
  margin: 10px;
  
`