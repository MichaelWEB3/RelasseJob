import React, { useEffect, useState } from 'react'
import * as S from './styles'
import InputLogin from '../../components/inputLogin'
import IcomEamil from '../../assets/mail.svg'
import IConPassword from '../../assets/lock.svg'
import { useNavigation } from '@react-navigation/native';
import useDados from '../../dates/datehook/userHook'

export default function () {
    const navigation = useNavigation()
    const date = useDados()
    const [user, setUSer] = useState('')
    const [passworld, setpassworld] = useState('')

    async function handlerLogin() {
        await date.signInWith(user, passworld)
    }
    useEffect(() => {
        if (date.token) {
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            })
        }
    }, [date.token])
    return (
        <S.Container>
            <S.AreaLogin>
                <S.Logo source={require('../../assets/logo.png')}></S.Logo>
                <InputLogin pleaceholder={'E-mail de usuario'} value={user} onChangeText={text => setUSer(text)} IconSvg={IcomEamil} />
                <InputLogin pleaceholder={'senha'} value={passworld} onChangeText={text => setpassworld(text)} password={true} IconSvg={IConPassword} />
                <S.LoginButton onPress={() => handlerLogin()}>
                    <S.LoginButtonText>Logar</S.LoginButtonText>
                </S.LoginButton>
                <S.SpanCadastroButton>
                    <S.SpanCadastro onPress={() => navigation.navigate('Preregister')}>
                        Não tem conta ? <S.SpanCadastro style={{ fontWeight: 'bold' }}>Crie sua conta</S.SpanCadastro>
                    </S.SpanCadastro>
                </S.SpanCadastroButton>
            </S.AreaLogin>
        </S.Container>
    )
}