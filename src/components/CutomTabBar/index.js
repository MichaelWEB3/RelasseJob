import React, { useState, useContext } from 'react'
import * as S from './styles'
import IconHome from '../../assets/home.svg'
import IconUser from '../../assets/user.svg'
import Heart from '../../assets/heart.svg'

import useDados from '../../dates/datehook/userHook'

export default function CutomTabBar({ state, navigation }) {

    const date = useDados()

    const goTo = (screemName,) => {
        navigation.navigate(screemName)
    }

    return (
        <S.TabArea>
            <S.TabItem onPress={() => goTo('Jobinformation')}>
                <Heart style={{ width: 50, height: 50, color: `${state.index === 2 ? '#FFF' : '#444343'}`, margin: 5 }} />
            </S.TabItem>
            <S.TabItemCenter onPress={() => goTo('Home')}>
                <IconHome style={{ width: 50, height: 50, color: `${state.index === 0 ? '#FFF' : '#363434'}`, margin: 5 }} />
            </S.TabItemCenter>
            <S.TabItem onPress={() => goTo('Profile')}>
                <IconUser style={{ width: 50, height: 50, color: `${state.index === 1 ? '#FFF' : '#444343'}`, margin: 5 }} />
            </S.TabItem>
        </S.TabArea>
    )
}