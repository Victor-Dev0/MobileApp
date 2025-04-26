import { View, Text, Alert, Button, TouchableOpacity } from 'react-native'
import Header from "../../components/Header";
import { Temas } from '../../global/themes';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { styles } from './styles';
import { dbService } from '../../data/dbService';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DropdownComponente from '../../components/Dropdown';
import EscolhaHorario from '../../components/HorarioModal';
import DataModal from '../../components/DataModal';

const Agendamento = () => {
    const context = createContext()
    const [horaSelecionada, setHoraSelecionada] = useState(null);
    const [clienteEscolhido, setclienteEscolhido] = useState()
    const [servico, setServico] = useState()
    const [clientes, setClientes] = useState([])
    const [data, setData] = useState(null)
    const navigation = useNavigation()
    const { ObtemTodosClientes, InserirAgendamento, PrimeiroAgendamento } = dbService();

    const servicos = [
        { key: '1', nome: 'Esmaltação' },
        { key: '2', nome: 'Esmaltação e Cuticulagem' },
    ]

    const obtemClientes = async () => {

        const cliente = await ObtemTodosClientes();
        if (cliente) {
            setClientes(cliente)
        }
    }

    const agendar = async () => {
        const hora = `${horaSelecionada.hora.padStart(2, '0')}:${horaSelecionada.minuto.padStart(2, '0')}`
        try {
            const res = await InserirAgendamento(clienteEscolhido.nome, clienteEscolhido.id, data, hora, servico.nome)

            if (res) {
                const verAgendamento = await PrimeiroAgendamento();
                Alert.alert('Agendado!', 'Cliente agendado com sucesso!')
                navigation.goBack()
            } else {
                throw new Error("Erro ao inserir agendamento")
            }

        } catch (error) {
            Alert.alert('Erro!', error.message)
        }
        // const res = await PrimeiroAgendamento();
        // console.log(res)
    }

    useFocusEffect(
        useCallback(() => {
            obtemClientes();
        }, []))

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} text={'Agendar Cliente'} />

            <DropdownComponente data={clientes} placeholder={'Escolha o Cliente'} search={true} cliente={clienteEscolhido} setCliente={setclienteEscolhido} />

            <DropdownComponente data={servicos} servico={servico} setServico={setServico} />


            <EscolhaHorario mudanca={setHoraSelecionada} />
            <DataModal mudanca={setData} />

            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.btnSearch} onPress={agendar}>
                    <Text style={styles.txtInp}>Agendar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Agendamento