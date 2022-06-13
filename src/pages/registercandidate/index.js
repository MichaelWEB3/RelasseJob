import React, { useState, useContext } from 'react'
import * as S from './styles'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Left from '../../assets/arrow-left.svg'
import InputLogin from '../../components/inputLogin';
import useDados from '../../dates/datehook/userHook'
import Modalidade from '../../components/modalidade';
import Skill from '../../components/skill';
import Contract from '../../components/contratacao';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default () => {
    const navigation = useNavigation()
    const date = useDados()
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [email2, setemail2] = useState('');
    const [instagra, setinstagra] = useState('');
    const [linkeDin, setLinkeDin] = useState('');
    const [gitHub, setgitHub] = useState('');
    const [cell, setcell] = useState('');
    const [descricao, setdescricao] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setsexo] = useState('');
    const [data, setdata] = useState('');
    const [password, setpassword] = useState('');
    const [contract, setContract] = useState('');
    const [skill, setSkill] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [termos, settermos] = useState(false);
    const [img, setimg] = useState(null);
    async function handleCad() {
        const resp = await date.singUpCaidate({
            name,
            email,
            cell,
            cpf,
            sexo,
            data,
            password,
            skill,
            contract,
            modalidade,
            empresa: false,
            termos,
            descricao,
            img,
            email2,
            instagra,
            gitHub,
            linkeDin
        }).then(() => {
            navigation.navigate("Login")
        })
    }
    async function handlerImg() {
        const options = {
            mediaType: 'photo',
        }
        const result = await launchImageLibrary(options);
        setimg(result.assets[0].uri)

    }
    return (
        <S.Container>
            <S.VoltarArea>
                <S.Buttonvolta onPress={() => navigation.goBack()}>
                    <Left style={{ width: 50, height: 50, color: '#FFF', margin: 5 }} />
                </S.Buttonvolta>
            </S.VoltarArea>
            <S.CandidateArea>
                <S.CandidateAreaText>
                    <S.TextTitle>Cadastro de candidato</S.TextTitle>
                </S.CandidateAreaText>
                <InputLogin pleaceholder={'Nome e Sobre nome'} onChangeText={text => setname(text)} value={name} />
                <InputLogin pleaceholder={'Email'} value={email} onChangeText={text => setemail(text)} />
                <InputLogin pleaceholder={'Senha'} value={password} onChangeText={text => setpassword(text)} />
                <InputLogin pleaceholder={'Celular'} value={cell} onChangeText={text => setcell(text)} />
                <InputLogin pleaceholder={'CPF'} value={cpf} onChangeText={text => setcpf(text)} />
                <InputLogin pleaceholder={'Sexo'} value={sexo} onChangeText={text => setsexo(text)} />
                <InputLogin pleaceholder={'Data'} value={data} onChangeText={text => setdata(text)} />
                <InputLogin pleaceholder={'Sobre'} value={descricao} onChangeText={text => setdescricao(text)} />
                <InputLogin pleaceholder={'Email para contato '} value={email2} onChangeText={text => setemail2(text)} />
                <InputLogin pleaceholder={'Link do perfil Instagram'} value={instagra} onChangeText={text => setinstagra(text)} />
                <InputLogin pleaceholder={'Link do perfil LinkeDin'} value={linkeDin} onChangeText={text => setLinkeDin(text)} />
                <InputLogin pleaceholder={'Link do perfil GitHub'} value={gitHub} onChangeText={text => setgitHub(text)} />
                <Modalidade setModalidadee={setModalidade} value={modalidade} />
                <Skill setSkilll={setSkill} value={skill} />
                <Contract setContract={setContract} value={contract} />
                <S.ItemCenter>
                    <S.Button onPress={() => handlerImg()} >
                        <S.TitleButton style={{ margin: 0 }}> {img ? 'Upload realizado' : 'Upload de foto'}  </S.TitleButton>
                    </S.Button>
                </S.ItemCenter>
                <S.AreaCheck>
                    <CheckBox value={termos}
                        onValueChange={settermos}
                        tintColors="red"
                        onCheckColor="red"
                        style={{ width: 50, height: 50, color: 'red' }} />
                    <S.AreaCheckText>Aceite os termos de uso para prosseguir</S.AreaCheckText>
                </S.AreaCheck>
                <S.CadastraButtonArea>
                    {termos &&
                        <S.CadastraButton onPress={() => handleCad()}>
                            <S.CadastraButtonText>Cadastrar</S.CadastraButtonText>
                        </S.CadastraButton>
                    }
                </S.CadastraButtonArea>
            </S.CandidateArea>
        </S.Container>
    )
}