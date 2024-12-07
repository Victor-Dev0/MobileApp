import React, { useState } from "react";
import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import logoLogin from '../../../assets/logo.png';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';

import { styles } from "./styles";
import { Temas } from "../../global/themes";


export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [senhaSegura, setSenhaSegura] = useState(true);
    const [load, setLoad] = useState(false);
    const [icon, setIcon] = useState(false);

    const trocaIcon = () => {
        setIcon(!icon);
        setSenhaSegura(!senhaSegura);
    }

    function getLogin() {
        try {
            if (!email || !senha) {
                return Alert.alert('Atenção', 'Informe os campos obrigatorios!');
            }
            setLoad(true);

            setTimeout(() => {
                Alert.alert('Registro!', 'Conta registrada com sucesso!');
                setLoad(false);
            }, 2000);


        } catch (error) {
            console.error(error)
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
                                name="circle-user"
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
                        <TouchableOpacity style={styles.button} onPress={() => getLogin()}>
                            {load ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.textBtn}>Criar</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.textBottom}>
                            Já tem uma conta?
                            <Text style={styles.criarConta}>Fazer Login!</Text>
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}