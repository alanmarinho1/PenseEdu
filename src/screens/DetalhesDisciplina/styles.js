import styled from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  align-items: center;
  background-color: rgba(224, 255, 255, 0.6);
`;

export const DivFlatListAtv = styled.View`

<<<<<<< HEAD
  margin-top: 2%;
  padding: 10px;
  width: 92%;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
`

export const DivPhoto = styled.View`

  width: 92%;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;

=======
    margin-top: 10px;
    padding: 10px;
    width: 360px;
    background-color: white;
    border: 1px #3CB371;
    border-radius: 10px;
>>>>>>> master
`

export const DivAllAtv = styled.View`

  margin-top: 2%;
  width: 92%;
  height: 25%;
  padding: 10px;
  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
`

export const DivRelPC = styled.View`

  background-color: white;
  border: 1px #3CB371;
  border-radius: 10px;
  margin-top: 2%;
  padding: 10px;
<<<<<<< HEAD
  width: 92%;
=======
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
>>>>>>> master
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
<<<<<<< HEAD
`
const PhotoComponent = styled.ImageBackground`

  width: 99%;
  height: 90px;
  

=======
>>>>>>> master
`

export const Photo = ({source}) => (

  <PhotoComponent source={{uri: source}} resizeMode={'cover'}/>
    
);