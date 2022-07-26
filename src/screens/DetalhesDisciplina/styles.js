import styled from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  align-items: center;
  background-color: rgba(224, 255, 255, 0.6);
`;

export const DivFlatListAtv = styled.View`

  margin-top: 10px;
  padding: 10px;
  width: 360px;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
`

export const DivPhoto = styled.View`

  width: 360px;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;

`

export const DivAllAtv = styled.View`

  margin-top: 20px;
  width: 360px;
  height: 400px;
  padding: 10px;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
`

export const DivRelPC = styled.View`

  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  width: 360px;
`
export const DivDescriptionRelPC = styled.View`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(224, 255, 255, 0.6);
`
export const DescriptionRelPC = styled.Text`

  padding: 2%;
  text-align: justify;
  
`
export const TitleScreen = styled.Text`

  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: #00875F;
`

export const Title = styled.Text`

    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #00875F;
`
const PhotoComponent = styled.ImageBackground`

  width: 99%;
  height: 100px;
  

`

export const Photo = ({source}) => (

  <PhotoComponent source={{uri: source}} resizeMode={'cover'}/>
    
);