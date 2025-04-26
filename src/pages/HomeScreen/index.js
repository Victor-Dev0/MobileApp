import React, { useState, useEffect, createContext, useCallback } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from 'react-native';
import { styles } from './styles';
import ClientCard from '../../components/ClienteCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';
import { useFocusEffect } from '@react-navigation/native';
import { dbService } from "../../data/dbService";
import moment from "moment";

export default function Home({ route }) {
    const Context = createContext();
    const [clientes, setClientes] = useState([])
    const [load, setLoad] = useState(false)
    const { user } = route.params
    const { BuscaAgendamentoPorData } = dbService();

    const data = moment().format('DD/MM/YYYY')

    const obtemClientes = async () => {
        setLoad(true)
        const cliente = await BuscaAgendamentoPorData(data);

        if (cliente) {
            setClientes(cliente)
        }
        setLoad(false)
    }

    useFocusEffect(
        useCallback(() => {
            obtemClientes();
        }, []))


    if (!user) {
        return (
            <View style={styles.container}>
                <Header backgroundColor={Temas.colors.bgTabBar} username={"Carregando..."} isHome={true} />
                <ScrollView style={styles.scroll}>
                    <View>
                        <ActivityIndicator color={'#fff'} size={'small'} />
                    </View>
                </ScrollView>
            </View>
        )
    } else if (clientes == []) {
        return (
            <View style={styles.container}>
                <Header backgroundColor={Temas.colors.bgTabBar} username={"Carregando..."} isHome={true} />
                <ScrollView style={styles.scroll}>
                    <View>
                        <ActivityIndicator color={'#fff'} size={'small'} />
                        <Text>Carregando...</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={user.nome} isHome={true} userId={user.id} />
            <View style={styles.listaCliente}>
                <FlatList
                    data={clientes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ClientCard cliente={item} isHome={false} />
                    )}
                    refreshing={load}
                    onRefresh={obtemClientes}
                />
            </View>
        </View>
    );

}