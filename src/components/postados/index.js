import React, { useState } from 'react'
import * as S from './styles'
import { View, FlatList, StyleSheet, Linking } from "react-native"
import IconWard from '../../assets/award.svg'
import useDados from '../../dates/datehook/userHook'
import Heart from '../../assets/heart.svg'
import Mail from '../../assets/mail.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Github from '../../assets/github.svg'
import Ex from '../../assets/x.svg'
export default () => {
    const [textHeader, setTextHeader] = useState('empregado')
    const [openEMail2, setopenEMail2] = useState(false)

    const date = useDados()
    function openEmail() {
        setopenEMail2(!openEMail2)
    }
    function addFav(item) {
        date.addfave(item)
    }
    return (
        <S.Container>
            <FlatList
                data={date?.user?.fav}
                keyExtractor={(...index) => index.toString()}
                pagingEnabled

                renderItem={({ item, index }) => {
                    console.log(item.linkeDin)

                    return (
                        <View style={styles.ContainerSiid} key={index}  >
                            <S.HeaderSlid>
                                <IconWard style={{ width: 60, height: 60, margin: 5, color: '#FFF' }} />
                                <S.HeaderText>{item.nome}</S.HeaderText>
                            </S.HeaderSlid>
                            <S.Slidimg source={{ uri: `${item?.img}` }}></S.Slidimg>
                            <S.AreaText>
                                <S.TextBold>{textHeader == 'empresa' ? 'Candidato destino' : 'Vaga destino'}: <S.RespText style={{ fontWeight: 'normal' }}>{item.skill}</S.RespText></S.TextBold>
                                <S.TextBold>contrato:  <S.RespText style={{ fontWeight: 'normal' }}>{item.contrato}</S.RespText></S.TextBold>
                            </S.AreaText>
                            <S.AreaText>
                                <S.TextBold>Modalidade: <S.RespText style={{ fontWeight: 'normal' }}>{item.modadelidade}</S.RespText></S.TextBold>
                            </S.AreaText>
                            <S.AreaText>
                                <S.TextBold>{textHeader == 'empresa' ? 'Descrição da vaga:' : 'Descrição:'} <S.RespText style={{ fontWeight: 'normal' }}> {item.descricao}</S.RespText></S.TextBold>
                            </S.AreaText>
                            <S.AreaText>
                                {openEMail2 &&
                                    <S.TextBold> Email <S.RespText style={{ fontWeight: 'normal' }}> {item?.email2}</S.RespText></S.TextBold>
                                }
                            </S.AreaText>
                            <S.Areabootombuton>
                                <S.AreaCoracao>
                                    <S.AreaRedesIcon onPress={() => addFav(item)}>
                                        <Heart style={{ width: 60, height: 60, margin: 5, color: 'red' }} />
                                    </S.AreaRedesIcon>
                                </S.AreaCoracao>
                                <S.AreaRedes>
                                    {item?.email2 && <S.AreaRedesIcon onPress={() => {
                                        openEmail()
                                    }}>
                                        <Mail style={{ width: 60, height: 60, margin: 5, color: '#FFF' }} />
                                    </S.AreaRedesIcon>
                                    }
                                    {item?.linkeDin && <S.AreaRedesIcon onPress={() => {
                                        Linking.openURL(`${item?.linkeDin}`);
                                    }}>
                                        <Linkedin style={{ width: 60, height: 60, margin: 5, color: '#FFF' }} />
                                    </S.AreaRedesIcon>
                                    }
                                    {item?.insta && <S.AreaRedesIcon onPress={() => {
                                        Linking.openURL(`${item?.insta}`);
                                    }}>
                                        <Instagram style={{ width: 60, height: 60, margin: 5, color: '#FFF' }} />
                                    </S.AreaRedesIcon>
                                    }
                                    {item?.git && <S.AreaRedesIcon onPress={() => {
                                        Linking.openURL(`${item?.git}`);
                                    }}>
                                        <Github style={{ width: 60, height: 60, margin: 5, color: '#FFF' }} />
                                    </S.AreaRedesIcon>
                                    }
                                </S.AreaRedes>
                            </S.Areabootombuton>
                        </View>
                    )

                }}
            />
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

        margin: 20,
        height: 500,
        justifyCcontent: 'center',
        alignItems: 'center',
        backgroundColor: '#363434',
        top: 0,
    }
})