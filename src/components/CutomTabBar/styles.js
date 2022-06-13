import React from "react";
import styled from "styled-components";

export const TabArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #2B2A2A;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const TabItem = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
`

export const TabItemCenter = styled.TouchableOpacity`
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    margin-top: -55px;
    background-color: #444343;
    border-radius: 50px;
    border: 4px solid  #444343;
`
