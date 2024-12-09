import React, { useState } from "react";

import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import logoLogin from '../../../assets/logo.png';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Temas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';
import Toast from "react-native-toast-message";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaSegura, setSenhaSegura] = useState(true);
    const [load, setLoad] = useState(false);
    const [icon, setIcon] = useState(false);
    const navigation = useNavigation();


    async function Logar({ user, senha }) {
        const url = `${process.env.EXPO_PUBLIC_API_URL_NOTE}/v1/Login"`;
        console.log(url)
        try {
            setLoad(true);
            const data = { username: user, password: senha }
            console.log(JSON.stringify(data))
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Toast.show({
                    type: 'error',
                    text1: 'Falha!',
                    text2: `${res.status}`
                });
            }

            const resData = await res.json();
            console.log(resData)

            setTimeout(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Sucesso!',
                    text2: 'Logado com sucesso!',
                });
                setLoad(false);
                navigation.navigate('Home', { usuario: resData })
            }, 2000);
        } catch (e) {

        }
    }

    const trocaIcon = () => {
        setIcon(!icon);
        setSenhaSegura(!senhaSegura);
    }

    const goRegister = () => {
        navigation.navigate('Registro');
    }

    function getLogin() {
        try {
            if (!email || !senha) {
                return Alert.alert('Atenção', 'Informe os campos obrigatorios!');
            }
            setLoad(true);

            setTimeout(() => {
                Alert.alert('Login!', 'Logado com sucesso!');
                setLoad(false);
                navigation.navigate('Home')
            }, 2000);


        } catch (error) {
            console.error(error)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Toast />
                    <View style={styles.top}>
                        <Image
                            source={logoLogin}
                            style={styles.logoImg}
                            resizeMode="contain"
                        />
                        <Text style={styles.Titulo}>Faça Login!</Text>
                    </View>
                    <View style={styles.mid}>
                        <Text style={styles.titleInput}>Endereço de E-Mail</Text>
                        <View style={styles.BoxInput}>
                            <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
                            <MaterialIcons
                                name="email"
                                size={20}
                                color={Temas.colors.gray}
                            />
                        </View>
                        <Text style={styles.titleInput}>Senha</Text>
                        <View style={styles.BoxInput}>
                            <TextInput style={styles.textInput} value={senha} onChangeText={setSenha} secureTextEntry={senhaSegura} />
                            <TouchableOpacity onPress={trocaIcon}>
                                <MaterialCommunityIcons
                                    name={icon ? 'eye-off' : 'eye'}
                                    size={20}
                                    color={Temas.colors.gray}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button} onPress={() => Logar({ user: email, senha: senha })}>
                            {load ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.textBtn}>Entrar</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.textBottom}>Não tem conta?</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={goRegister}>
                            <Text style={styles.criarConta}>Crie Agora!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}