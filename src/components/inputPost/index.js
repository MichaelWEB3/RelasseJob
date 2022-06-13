import React from 'react'
import * as S from './styles'

export default ({ password, value, onChangeText, IconSvg, pleaceholder }) => {
    return (
        <S.Container>
            {IconSvg && <IconSvg style={{ width: 24, height: 24 ,color:'#FFF',margin:5}}/>}
            <S.Input
                placeholder={pleaceholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                placeholderTextColor="#FFF"
            />
        </S.Container>
    )
}