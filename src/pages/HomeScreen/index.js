import React, { useState, useEffect, createContext, useCallback } from "react";
import { FlatList, ScrollView, View } from 'react-native';
import { styles } from './styles';
import ClientCard from '../../components/ClienteCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { dbService } from "../../data/dbService";

export default function Home({ route }) {
    const Context = createContext();
    const navigation = useNavigation()
    const [clientes, setClientes] = useState([])
    const [load, setLoad] = useState(false)
    const { user } = route.params
    const { ObtemTodosClientes } = dbService();

    const obtemClientes = async () => {

        const cliente = await ObtemTodosClientes();
        if (cliente) {
            setClientes(cliente)
        }
    }

    useFocusEffect(
        useCallback(() => {
            obtemClientes();
        }, []))


    if (!user || !clientes) {
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
    }

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={user.nome} isHome={true} userId={user.id} />
            <View style={styles.listaCliente}>
                <FlatList
                    data={clientes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ClientCard cliente={item} isHome={true} />
                    )}
                    refreshing={load}
                    onRefresh={obtemClientes}
                />
            </View>
        </View>
    );
}