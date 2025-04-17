import React, { createContext, useState } from "react";
import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import logoLogin from '../../../assets/logo.png';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Temas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { useGetData } from '../../services/hooks'
import { useUserStorage } from "../../services/storage/dataStorage";
import { LoadComponent } from "../../components/LoadComponent";
import { SalvarUsuario } from "../../services/storage/storage";
import { dbService } from "../../data/dbService";

export const Login = () => {
    const Context = createContext();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaSegura, setSenhaSegura] = useState(true);
    const [load, setLoad] = useState(false);
    const [icon, setIcon] = useState(false);
    const navigation = useNavigation();
    const { handleLogin } = useGetData();
    const { setUserId } = useUserStorage();
    const { LoginTela } = dbService();


    const toastConfig = {
        success: (props) => (
            <BaseToast
                {...props}
                style={{ borderLeftColor: 'green' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 18,
                    color: Temas.colors.black,
                    fontWeight: 'bold'
                }}
            />
        ),

        error: (props) => (
            <ErrorToast
                {...props}
                style={{ borderLeftColor: 'red' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 18,
                    color: Temas.colors.black,
                    fontWeight: 'bold'
                }}
                text2Style={{
                    fontSize: 15,
                    color: Temas.colors.black,
                }}
            />
        )
    }

    const Logar = async () => {

        if (!email || !senha) {
            return Alert.alert('Atenção', 'Informe os campos obrigatorios!');
        }

        setLoad(true)

        try {
            const logado = await LoginTela(email, senha)

            if (!logado) {
                Toast.show({
                    text1: "Erro!",
                    text2: "Email ou Senha incorretos!",
                    type: 'error',
                });
            }
            else {
                if (logado.senha === senha) {
                    //await SalvarUsuario(JSON.stringify(logado))
                    navigation.navigate('Home', {
                        screen: 'Inicio',
                        params: { user: logado }
                    })
                } else {
                    Toast.show({
                        text1: "Erro!",
                        text2: "Senha incorreta!",
                        type: 'error',
                    })
                }
            }
            setLoad(false)

        } catch (error) {
            console.error(error)
            setLoad(false)
        }
    }

    const trocaIcon = () => {
        setIcon(!icon);
        setSenhaSegura(!senhaSegura);
    }

    const goRegister = () => {
        navigation.navigate('Registro');
    }

    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
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
                        <TouchableOpacity style={styles.button} onPress={Logar}>
                            {load ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.textBtn}>Entrar</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.textBottom}>Não tem conta?</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={goRegister}>
                            <Text style={styles.criarConta}>Crie Agora!</Text>
                        </TouchableOpacity>
                    </View>
                    <Toast config={toastConfig} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}