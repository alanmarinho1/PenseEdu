import styled from 'styled-components/native';

export const Container = styled.ScrollView`

  flex: 1;
  /* align-items: center; */
  background-color: rgba(224, 255, 255, 0.6);
`;

export const PCImage = styled.ImageBackground`

    width: 380px;
    height: 240px;
    
    /* margin: 10px 0px 0px 10px; */
`

export const DivAtvInfo = styled.View`

    border: 1px #3CB371;
    border-radius: 10px;
    align-items: center;
    /* justify-items: center; */
    width: 98%;
    /* height: 64%; */
    margin-left: 1%;
    background-color: rgb(255, 255, 255);
    /* margin-bottom: 1%; */

`

export const DivAtvTitle = styled.View`

    /* align-items: center; */
    /* justify-content: center; */
    width: 350px;
    /* height: 110px; */
`

export const DivAtvDetailsParent = styled.View`

    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 80px;
    margin-bottom: 1%;
`

export const DivAtvDetailsChildren = styled.View`

    border: 1px #3CB371;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: rgba(224, 255, 255, 0.6);
    width: 110px;
    height: 70px;

`

export const DivAtvDescription = styled.View`

    background-color: rgba(224, 255, 255, 0.6);
    border: 1px #3CB371;
    border-radius: 10px;
    width: 97%;
    /* height: 35%; */
    margin-top: 2%;
    margin-bottom: 3%;
    /* margin-left: 2%;
    margin-right: 2%; */
`

export const AtvDetailsTitle = styled.Text`

    font-weight: bold;
    text-align: center;
    font-size: 15px;
    color: #00875F;
`
export const AtvDetails = styled.Text`

    font-size: 14px;
`

export const AtvTitle = styled.Text`

    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #00875F;
`

export const AtvDescription = styled.Text`

    font-size: 16px;
    text-align: justify;
    padding: 2%;
`
export const AtvSubTitle = styled.Text`

    font-size: 20px;
    font-weight: bold;
    color: #00875F;
`