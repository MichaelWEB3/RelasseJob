import React, { useState, useContext } from 'react'
import * as S from './styles'
import useDados from '../../dates/datehook/userHook'
import { useNavigation } from '@react-navigation/native';

export default ({ ativo }) => {
    const navigate = useNavigation()


    return (
        <S.Container>
            <S.Title>FINDJOOBS</S.Title>

        </S.Container>
    )
}