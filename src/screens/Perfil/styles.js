import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const DivPhoto = styled.View`

  border: 1px #3CB371;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 90%;
  height: 30%;
  margin-top: 10%;
  align-items: center;
  
`
const PhotoComponent = styled.Image`

  margin-top: 20px;
  border-radius: 75px;
  width: 150px;
  height: 150px;
`
export const Photo = ({source}) => (

  <PhotoComponent source={{uri: source}}/>
    
 
);