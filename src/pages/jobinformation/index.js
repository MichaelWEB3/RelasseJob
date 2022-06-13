import React, { useState, useContext, useEffect } from 'react'
import * as S from './styles'
import { Text } from 'react-native'
import Header from '../../components/header'
import Postados from '../../components/postados'

export default () => {
    const [type, setType] = useState(null)
    useEffect(() => {
        setType('Postar')
    }, [])
    return (
        <S.Container>
            <Header />
            <S.HeaderIdicator>
                <S.ButtonHeaderIdicator onPress={() => setType("Postar")} style={{ borderColor: `${type == 'Postar' ? '#FFF' : '#4D4C4C'}` }}>
                    <S.TextHeaderIdicator style={{ color: `${type == 'Postar' ? '#FFF' : '#4D4C4C'}` }}>Favoritos</S.TextHeaderIdicator>
                </S.ButtonHeaderIdicator >
            </S.HeaderIdicator>
            {type == 'Postar' &&
                <Postados />
            }
        
        </S.Container>
    )
}