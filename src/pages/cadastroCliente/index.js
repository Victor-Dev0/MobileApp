import React, { createContext, useState } from "react";
import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import logoLogin from '../../../assets/logo.png'
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { Temas } from "../../global/themes";
import { useGetData } from '../../services/hooks'
import { dbService } from "../../data/dbService";
import { TextInputMask } from "react-native-masked-text";


const CadastroCliente = ({ route }) => {
    const Context = createContext();
    const navigation = useNavigation()
    const [telefone, setTelefone] = useState('');
    const [nome, setNome] = useState('');
    const [load, setLoad] = useState(false);
    const { CadastraCliente } = useGetData()
    const { user } = route.params
    const { CriarCliente } = dbService();

    const CadastrarCliente = async () => {
        if (!nome || !telefone || !user) {
            return Alert.alert('Atenção', 'Preencha os campos!')
        }
        setLoad(true)

        try {
            const cadastrado = await CriarCliente(nome, telefone, user)
            if (cadastrado) {
                Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!')
                setLoad(false)

                navigation.goBack()
            }
        } catch (error) {
            Alert.alert('Erro', `Erro ao cadastrar cliente: ${error}`)
            setLoad(false)
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
                        <Text style={styles.Titulo}>Cadastre um Cliente!</Text>
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
                        <Text style={styles.titleInput}>Telefone</Text>
                        <View style={styles.BoxInput}>
                            <TextInputMask
                                type={'cel-phone'}
                                style={styles.textInput}
                                value={telefone}
                                onChangeText={setTelefone}
                                placeholder="(37) 99999-9999"
                                keyboardType="phone-pad"
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99)'
                                }}


                            />
                            <MaterialIcons
                                name="phone"
                                size={20}
                                color={Temas.colors.black}
                            />
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button} onPress={CadastrarCliente}>
                            {load ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styles.textBtn}>Cadastrar Cliente</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
                            <Text style={styles.textBtn}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default CadastroCliente