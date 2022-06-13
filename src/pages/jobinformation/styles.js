import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C1B1B;
    padding-top: 40px;

`


export const HeaderIdicator = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 10px;

`

export const ButtonHeaderIdicator = styled.TouchableOpacity`
    border-bottom-width: 1px ;
     border-color:#4D4C4C ;
     justify-content: center;
    align-items: center;
    width: auto;
    padding: 10px;
`


export const TextHeaderIdicator = styled.Text`
    color: #4D4C4C;
    font-weight: bold;
    font-size: 11px;
 
`