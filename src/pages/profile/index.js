import React, { useState, useContext, useEffect } from 'react'
import * as S from './styles'
import { View, Text, Image, FlatList, Animated, StyleSheet } from "react-native"
import Header from '../../components/header'
import User from '../../assets/user.svg'
import Logout from '../../assets/log-out.svg'
import InputPost from '../../components/inputPost'
import useDados from '../../dates/datehook/userHook'
import { useNavigation } from '@react-navigation/native';
import Modalidade from '../../components/modalidade';
import Skill from '../../components/skill';
import Contract from '../../components/contratacao';
export default () => {
    const date = useDados()
    const navigation = useNavigation()
    const [name, setname] = useState(date?.user?.nome || '');
    const [email, setemail] = useState(date?.user?.email || '');
    const [cell, setcell] = useState(date?.user?.celular || '');
    const [descricao, setdescricao] = useState(date?.user?.descricao || '');
    const [cpf, setcpf] = useState(date?.user?.cpf || '');
    const [sexo, setsexo] = useState(date?.user?.sexo || '');
    const [data, setdata] = useState(date?.user?.data || '');
    const [password, setpassword] = useState(date?.user?.senha || '');
    const [contract, setContract] = useState(date?.user?.contrato || '');
    const [skill, setSkill] = useState(date?.user?.skill || '');
    const [modalidade, setModalidade] = useState(date?.user?.modadelidade || '');
    const [email2, setemail2] = useState(date?.user?.email2 || '');
    const [insta, setinsta] = useState(date?.user?.insta || '');
    const [git, setgit] = useState(date?.user?.git || '');
    const [linkeDin, setlinkeDin] = useState(date?.user?.insta || '');
    const [cnpj, setcnpj] = useState(date?.user?.cnpj || '');
    async function logout() {
        date.singout()
    }
    useEffect(() => {
        if (!date.token) {
            navigation.reset({
                routes: [{ name: 'Preload' }]
            })
        }
    }, [date?.token])
    return (
        <S.Container>
            <Header />
            <S.ContainerScrollView>
                <View style={styles.ContainerSiid} >
                    <S.AliITem>
                        <S.Title>Perfil</S.Title>
                        <S.ButtonSairn onPress={() => logout()}>
                            <Logout style={{ width: 24, height: 24, color: '#FFF', margin: 5 }} />
                        </S.ButtonSairn>
                    </S.AliITem>

                    <S.CampForm>
                        <S.PhotoPerfil>
                            {!date?.user?.img && <User style={{ width: 24, height: 24, color: '#FFF', margin: 5 }} />}
                            {date?.user?.img && <S.IconImg source={{ uri: `${date?.user?.img}` }} />}

                        </S.PhotoPerfil>
                        <InputPost pleaceholder="Nome" value={name} onChangeText={text => setname(text)} />
                        <InputPost pleaceholder="Email" value={email} onChangeText={text => setemail(text)} />
                        <InputPost pleaceholder="senha" value={password} onChangeText={text => setpassword(text)} />
                        <InputPost pleaceholder="Telefone" value={cell} onChangeText={text => setcell(text)} />
                        {!date?.user?.empresa && <InputPost pleaceholder="CPF " value={cpf} onChangeText={text => setcpf(text)} />}
                        {!date?.user?.empresa && <InputPost pleaceholder="Data" value={data} onChangeText={text => setdata(text)} />}
                        {date?.user?.empresa && <InputPost pleaceholder="CNPJ" value={cnpj} onChangeText={text => setcnpj(text)} />}
                        <InputPost pleaceholder={'Descrião'} value={descricao} onChangeText={text => setdescricao(text)} />
                        <InputPost pleaceholder="Email contato" value={email2} onChangeText={text => setemail2(text)} />
                        <InputPost pleaceholder="Instagram" value={insta} onChangeText={text => setinsta(text)} />
                        <InputPost pleaceholder="GitHub" value={git} onChangeText={text => setgit(text)} />
                        <InputPost pleaceholder="LinkeDin" value={linkeDin} onChangeText={text => setlinkeDin(text)} />
                        <Modalidade setModalidadee={setModalidade} value={modalidade} />
                        <Skill setSkilll={setSkill} value={skill} />
                        <Contract setContract={setContract} value={contract} />
                        <S.ButtonAtualizar>
                            <S.ButtonAtualizarText>Atualizar</S.ButtonAtualizarText>
                        </S.ButtonAtualizar>
                    </S.CampForm>
                </View>
            </S.ContainerScrollView>
        </S.Container>
    )
}

const styles = StyleSheet.create({
    ContainerSiid: {
        shadowColor: "#000",
        shadowOffset: {
            width: 370,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.84,
        elevation: 15,
        width: 370,
        margin: 20,
        height: 'auto',
        justifyCcontent: 'center',
        alignItems: 'center',
        backgroundColor: '#363434',
        padding: 10


    }
})