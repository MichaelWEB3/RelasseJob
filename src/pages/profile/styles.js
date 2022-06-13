import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C1B1B;
    padding-top: 40px;
    justify-content: center;
    align-items: center;

`
export const ContainerScrollView = styled.ScrollView`
    flex: 1;
    

`
export const AliITem = styled.View`
width: 100%;
justify-content: space-between; 
flex-direction: row;
margin: 2px;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 25px;
`
export const CampForm = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`

export const PhotoPerfil = styled.TouchableOpacity`
    width: 75px;
    height: 75px;
    border-radius:40px;
    background-color: #4D4A4A;
    justify-content: center;
    align-items: center;
    margin-bottom:35px ;
`
export const ButtonAtualizar = styled.TouchableOpacity`
    width: 85px;
    height: 45px;
    background-color:  #898585;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    
`
export const ButtonAtualizarText = styled.Text`
    
    color: #FFF;
    
`
export const ButtonSairn = styled.TouchableOpacity`
    width: auto;
    height: auto;
  
    
`
export const IconImg = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    
`