import React from 'react'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import Left from '../../assets/arrow-left.svg'
import Rigth from '../../assets/arrow-right.svg'
export default () => {
    const navigation = useNavigation()
    return (
        <S.Container>
            <S.VoltarArea>
                <S.Buttonvolta onPress={() => navigation.goBack()}>
                    <Left style={{ width: 50, height: 50, color: '#FFF', margin: 5 }} />
                </S.Buttonvolta>
            </S.VoltarArea>
            <S.PreCadasTroArea>
                <S.Logo source={require('../../assets/logo.png')}></S.Logo>
                <S.Button onPress={() => navigation.navigate('Registercandidate')}>
                    <S.ButtonText>
                        Cadidato
                    </S.ButtonText>
                    <Rigth style={{ width: 50, height: 50, color: '#FFF' }} />
                </S.Button>
                <S.Button onPress={() => navigation.navigate('Registercompany')}>
                    <S.ButtonText>
                        Empresa
                    </S.ButtonText>
                    <Rigth style={{ width: 50, height: 50, color: '#FFF' }} />
                </S.Button>
            </S.PreCadasTroArea>
        </S.Container >
    )
}