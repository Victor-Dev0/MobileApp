import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import logoLogin from '../../../assets/logo.png';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { Temas } from "../../global/themes";
import { useGetData } from '../../services/hooks'


export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [senhaSegura, setSenhaSegura] = useState(true);
    const [load, setLoad] = useState(false);
    const [icon, setIcon] = useState(false);
    const { CadastroUsuario } = useGetData()
    const navigation = useNavigation();

    const trocaIcon = () => {
        setIcon(!icon);
        setSenhaSegura(!senhaSegura);
    }

    const goLogin = () => {
        navigation.navigate('Login');
    }

    const Cadastrar = async () => {
        if (!nome || !email || !senha) {
            return Alert.alert('Atenção', 'Informe os campos obrigatorios!');
        }
        setLoad(true);

        try {
            const cadastrado = await CadastroUsuario(nome, email, senha);

            if (cadastrado) {
                Alert.alert("Cadastro", "Usuario cadastrado com sucesso!")
                setLoad(false)

                navigation.navigate('Login', {
                    screen: 'Login',
                })
            }
        } catch (error) {

        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image
                            source={logoLogin}
                            style={styles.logoImg}
                            resizeMode="contain"
                        />
                        <Text style={styles.Titulo}>Crie sua conta!</Text>
                    </View>
                    <View style={styles.mid}>
                        <Text style={styles.titleInput}>Nome</Text>
                        <View style={styles.BoxInput}>
                            <TextInput style={styles.textInput} value={nome} onChangeText={setNome} />
                            <FontAwesome6
                                name="user"
                                size={20}
                                color={Temas.colors.black}
                            />
                        </View>
                        <Text style={styles.titleInput}>Endereço de E-Mail</Text>
                        <View style={styles.BoxInput}>
                            <TextInput style={styles.textInput} value={email} onChangeText={setEmail} />
                            <MaterialIcons
                                name="email"
                                size={20}
                                color={Temas.colors.black}
                            />
                        </View>
                        <Text style={styles.titleInput}>Senha</Text>
                        <View style={styles.BoxInput}>
                            <TextInput style={styles.textInput} value={senha} onChangeText={setSenha} secureTextEntry={senhaSegura} />
                            <TouchableOpacity onPress={trocaIcon}>
                                <MaterialCommunityIcons
                                    name={icon ? 'eye-off' : 'eye'}
                                    size={20}
                                    color={Temas.colors.black}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                            {load ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.textBtn}>Criar</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.textBottom}>Já tem uma conta?</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={goLogin}>
                            <Text style={styles.criarConta}>Faça login!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}