import { View, Text, Alert, Button } from 'react-native'
import Header from "../../components/Header";
import { Temas } from '../../global/themes';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { styles } from './styles';
import { dbService } from '../../data/dbService';
import { useFocusEffect } from '@react-navigation/native';
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
    const { ObtemTodosClientes } = dbService();

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

    const agendar = () => {
        Alert.alert('Dados', `${data} => ${horaSelecionada.hora}:${horaSelecionada.minuto}`)
    }

    useFocusEffect(
        useCallback(() => {
            obtemClientes();
        }, []))

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} text={'Agendar Cliente'} />

            <DropdownComponente data={clientes} placeholder={'Escolha o Cliente'} search={true} />

            <DropdownComponente data={servicos} />


            <EscolhaHorario mudanca={setHoraSelecionada} />
            <DataModal mudanca={setData} />

            <Button title='Mostra' onPress={agendar} />
            {/* Botao agendar */}
        </View>
    )
}

export default Agendamento