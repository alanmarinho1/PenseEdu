import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgba(224, 255, 255, 0.6);
`;

export const DivPhoto = styled.View`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 90%;
  height: 30%;
  margin-top: 5%;
  align-items: center;
  
`
export const DivUserInfo = styled.View`

  border: 1px #3CB371;
  background-color: white;
  border-radius: 10px;
  padding: 3%;
  width: 90%;
  height: 60%;
  margin-top: 5%;
`

export const DivButton = styled.View`

  margin-top: 10%;

`
export const CreatedAt = styled.Text`

  color: rgba(0, 0, 0, 0.5);
  bottom: 35px;

`

const PhotoComponent = styled.Image`

  margin-top: 10px;
  border-radius: 75px;
  width: 150px;
  height: 150px;
`

export const TextForm = styled.Text`

    color: #3CB371;
    font-size: 16px;
    margin-top: 3%;
`;


export const Photo = ({source}) => (

  <PhotoComponent source={{uri: source}}/>
    
);

