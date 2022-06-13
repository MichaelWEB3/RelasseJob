import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C1B1B;
    padding-top: 40px;

`

export const Container2 = styled.View`
    flex: 1;
    align-items: center;
`


export const ContainerSiid = styled.View`
    width: 100%;
    height: 75%;
    justify-content:center;
    align-items: center;
    background-color: #363434;
    border-bottom: 4px solid #FFF;
     position: relative;
    top: 50px;

`
export const Slidimg = styled.Image`
   width: 150px;
   height: 150px;
   border-radius: 100px;

`
export const HeaderSlid = styled.View`
  width: 100%;
  height: 65px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`
export const HeaderText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #FFF;

`


export const AreaText = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 8px;
    margin: 5px;

`

export const TextBold = styled.Text`
   font-size: 15px;
   font-weight: bold;
   color: #FFF;

`

export const RespText = styled.Text`
     font-size: 15px;
     color: #FFF;
`
export const Areabootombuton = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`
export const AreaCoracao = styled.View`
    width: 20%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 15px;

`
export const AreaRedes = styled.View`
    width: 80%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    padding: 15px;

`

export const AreaRedesIcon = styled.TouchableOpacity`
width: auto;
height: auto;

`