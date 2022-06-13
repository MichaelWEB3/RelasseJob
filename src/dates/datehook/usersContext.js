import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserContext = createContext({})

export function UserProvider(props) {
    const [stats, setstat] = useState(false)
    const [user, setUser] = useState(null)
    const [token, setToke] = useState(null)
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [usrsDb, setusrsDb] = useState([]);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount

    }, [token])

    useEffect(() => {
        async function getUSersDb() {
            let list = []
            await firestore()
                .collection('users')
                .get()
                .then(resp => {
                    resp.forEach(doc => {
                        list.push({ id: doc.id, ...doc.data() })
                    });
                    setusrsDb(list)
                });
        }

        getUSersDb()

    }, [])


    function onAuthStateChanged(token) {
        if (!user) {
            setToke(token?.uid);
            const subscriber = firestore()
                .collection('users')
                .doc(token?.uid)
                .onSnapshot(documentSnapshot => {
                    setUser(documentSnapshot.data())
                });
        }
        if (initializing) setInitializing(false);
    }
    async function singout() {
        auth()
            .signOut()
            .then(() => setToke(null));
    }

    async function signInWith(email, password) {
        if (email && password) {
            const aut = auth().signInWithEmailAndPassword(email, password).then(async (resp) => {
                const uid = resp?.user?.uid
                if (uid) {
                    setToke(resp?.user?.uid)
                }
                const subscriber = firestore()
                    .collection('users')
                    .doc(uid)
                    .onSnapshot(documentSnapshot => {
                        setUser(documentSnapshot.data())
                    }).then(() => {
                        alert("logado com sucesso")
                    }).catch((e) => {
                        alert('erro ao logar')
                    })
            }).catch((e) => {
                console.log(e)
            })
        }

    }

    async function singUpCaidate(all) {
        if (all.name, all.email, all.password, all.cell, all.cpf, all.sexo, all.data, all.skill, all.contract, all.modadelidade, all.empresa, all.termos) {
            let url = null
            auth().createUserWithEmailAndPassword(all.email, all.password).then(async (resp) => {
                const uid = resp.user.uid
                if (all.img && uid) {
                    const reference = storage().ref(`img/${uid}`)
                    let task = await reference.putFile(all.img).then(async (resp) => {
                        console.log('Image uploaded to the bucket!' + resp);
                        const urle = await reference.getDownloadURL();
                        url = urle           // 3
                    }).catch((e) => console.log('uploading image error => ', e));
                }
                if (uid) firestore()
                    .collection('users')
                    .doc(uid)
                    .set({
                        nome: all?.name,
                        email: all?.email,
                        cpf: all?.cpf,
                        senha: all?.password,
                        celular: all?.cell,
                        data: all.data,
                        termos: all.termos,
                        sexo: all.sexo,
                        skill: all.skill,
                        modadelidade: all.modalidade,
                        contrato: all.contract,
                        empresa: all.empresa,
                        descricao: all.descricao,
                        img: url || '',
                        insta: all.instagra,
                        git: all.gitHub,
                        email2: all.email2,
                        linkeDin: all.linkeDin,
                        fav: []

                    })
                    .then(async (resp) => {
                        setstat(true)
                        alert('cadastrado com sucesso')

                    }).catch((e) => {
                        setstat(false)
                        console.log(e)
                    })
            }).catch((errorCode) => {
                alert("erro ao cadastrar ")
                setstat(false)
            })
        }
    }
    async function singCompany(all) {
        if (all.name, all.email, all.password, all.cell, all.cnpj, all.skill, all.contract, all.modadelidade, all.empresa, all.termos, all.descricao) {
            let url = null
            auth().createUserWithEmailAndPassword(all.email, all.password).then(async (resp) => {
                const uid = resp.user.uid
                if (all.img && uid) {
                    const reference = storage().ref(`img/${uid}`)
                    let task = await reference.putFile(all.img).then(async (resp) => {
                        console.log('Image uploaded to the bucket!' + resp);
                        const urle = await reference.getDownloadURL();
                        url = urle           // 3
                    }).catch((e) => console.log('uploading image error => ', e));
                }
                if (uid) firestore()
                    .collection('users')
                    .doc(uid)
                    .set({
                        nome: all?.name,
                        email: all?.email,
                        cnpj: all?.cnpj,
                        senha: all?.password,
                        celular: all?.cell,
                        termos: all.termos,
                        skill: all.skill,
                        modadelidade: all.modalidade,
                        contrato: all.contract,
                        empresa: all.empresa,
                        descricao: all.descricao,
                        img: url || '',
                        insta: all.instagra,
                        git: all.gitHub,
                        email2: all.email2,
                        linkeDin: all.linkeDin,
                        fav: []
                    })
                    .then((resp) => {
                        setstat(true)
                        alert('cadastrado com sucesso')

                    }).catch((e) => {
                        setstat(false)
                        console.log(e)
                    })
            }).catch((errorCode) => {
                alert("erro ao cadastrar ")
                setstat(false)
            })
        }
    }

    async function addfave(item) {
        console.log(item)
        if (user?.fav.length != 0) {
            let i = 0
            for (i; i <= user?.fav.length; i++) {
                if (user?.fav[i] == item.email) return false
            }
            firestore().collection('users').doc(token).update({
                fav: [...user?.fav, item],
            }).then(() => {
                alert('favoritado com sucesso')
            }).catch((e) => {
                alert('ja favoritado')
            })

        } else {
            firestore().collection('users').doc(token).update({
                fav: [item],
            }).then(() => {
                alert('favoritado com sucesso')
            }).catch((e) => {
                alert('ja favoritado')
            })
        }

    }
    return (
        <UserContext.Provider value={{
            singUpCaidate,
            stats,
            singCompany,
            signInWith,
            token,
            user,
            singout,
            usrsDb,
            addfave

        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext