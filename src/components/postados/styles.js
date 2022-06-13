import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
      flex: 1;
      width: 100%;
      height: auto;
`
export const ContainerScroll = styled.ScrollView`
       flex: 1;
       width: 100%;
`

export const ContainerItem = styled.View`
        width: 90%;
        height: 50px;
        background-color:  #898585;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
        border-radius: 5px;


`
export const RespITem = styled.View`
        width: 90%;
        height: 50px;
        background-color:  transparent;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 10px;
        border-radius: 5px;


`
export const ContainerText = styled.Text`
        width: auto;
        color: #FFF;
        font-weight: bold;
        font-size: 18px;


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
   width: 100%;
   height: 50%;

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
export const BottomSlid = styled.TouchableOpacity`
   width: 100%;
   height: 40px;
   justify-content: center;
   align-items: center;

`


export const AreaText = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 8px;

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
    flex-direction: row;
    align-items: center;

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