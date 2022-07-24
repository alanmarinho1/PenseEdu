import styled from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  align-items: center;

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
    width: 360px;
    height: 65%;
    /* margin-bottom: 1%; */

`

export const DivAtvTitle = styled.View`

    align-items: center;
    justify-content: center;
    width: 350px;
    height: 100px;
`

export const DivAtvDetailsParent = styled.View`

    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 80px;
`

export const DivAtvDetailsChildren = styled.View`

    border: 1px #3CB371;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 70px;

`

export const DivAtvDescription = styled.View`

    border: 1px #3CB371;
    border-radius: 10px;
    width: 350px;
    height: 40%;
    margin-top: 3%;
`

export const AtvDetailsTitle = styled.Text`

    font-weight: bold;
    text-align: center;
    font-size: 15px;
`
export const AtvDetails = styled.Text`

    font-size: 14px;
`

export const AtvTitle = styled.Text`

    font-size: 30px;
    font-weight: bold;
    text-align: center;
`

export const AtvDescription = styled.Text`

    font-size: 16px;
    text-align: justify;
    padding: 2%;
`