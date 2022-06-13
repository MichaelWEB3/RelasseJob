import React, { useState, useContext, useEffect } from 'react'
import * as S from './styles'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import useDados from '../../dates/datehook/userHook'

export default function () {
    const navigation = useNavigation()
    const date = useDados()



    useEffect(() => {
        if (date.token) {
            console.log(date.token)
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            })
        } else {
            navigation.reset({
                routes: [{ name: 'Login' }]
            })
        }
    }, [])
    return (
        <S.Container>
            <S.Logo source={require('../../assets/logo.png')}></S.Logo>
            <S.Loading size="large" color="#FFF" />
        </S.Container>
    )
}