import React, { createContext, useCallback, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Temas } from "../../global/themes";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { dbService } from "../../data/dbService";
import ClientCard from "../../components/ClienteCard";

export default function Detalhes({ route }) {
    const context = createContext();
    const navigation = useNavigation();
    const [clientes, setClientes] = useState([])
    const [load, setLoad] = useState(false)
    const { BuscaAgendamentoPorData } = dbService();

    const data = JSON.parse(route.params.data);

    const obtemClientes = async () => {
        setLoad(true)
        const cliente = await BuscaAgendamentoPorData(data)

        if (cliente) {
            setClientes(cliente)
        }
        setLoad(false)
    }

    const goBack = () => {
        navigation.goBack()
    }

    useFocusEffect(
        useCallback(() => {
            obtemClientes();
        }, []))

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} isHome={false} text={`Agendamentos de: ${data}`} />

            <FlatList
                data={clientes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ClientCard cliente={item} isHome={false} />
                )}
                refreshing={load}
                onRefresh={obtemClientes}
            />

            <View style={styles.boxBtns}>
                <View style={styles.searchBox}>
                    <TouchableOpacity onPress={goBack} style={[styles.btnSearch, styles.centerContent]}>
                        <Text style={styles.txtInp}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBox}>
                    <TouchableOpacity style={[styles.btnSearch, styles.centerContent]}>
                        <Text style={styles.txtInp}>Apagar Todos</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
} 