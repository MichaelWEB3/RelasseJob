import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: #1C1B1B;
    color: white  ;
`

export const ContainerScroll = styled.ScrollView`
flex: 1;
`
export const AreaLogin = styled.View`
flex: 1;
  width: 350px;
  height: 800px;
  justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    width: 250px;
    height: 250px;
`


export const Loading = styled.ActivityIndicator`
 width: 50px;
 margin-bottom: 80px;
`


export const LoginButton = styled.TouchableOpacity`
 background-color:  #898585;
 width: 140px;
 height: 57px;
 border-radius: 40px;
 margin-bottom: 80px;
 margin-top: 25px;
 justify-content: center;
 align-items: center;
`

export const LoginButtonText = styled.Text`
color: #FFF;
`
export const SpanCadastroButton = styled.TouchableOpacity`

`
export const SpanCadastro = styled.Text`
    color: #FFF;
    font-size: 15px;
`
