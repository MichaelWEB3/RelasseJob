import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    height: auto;
    background-color: #1C1B1B;
    color: white  ;
`
export const Logo = styled.Image`
    width: 350px;
    height: 350px;
`
export const VoltarArea = styled.View`
  margin-top: 50px; 
  padding: 5px;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
`

export const Buttonvolta = styled.TouchableOpacity`
   
`

export const PreCadasTroArea = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
`
export const AreaButton = styled.View`
  width: 80%;
  height: auto;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.ActivityIndicator`
    width: 50px;
    margin-bottom: 80px;
`


export const Button = styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    background-color: #595656;
    margin: 5px;
    padding: 15px;
    justify-content:space-around;
    align-items: center;
    border-radius: 20px;
    flex-direction: row;
`

export const ButtonText = styled.Text`
    font-size: 15px;
    color: #FFF;
`
