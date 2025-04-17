import { View, TextInput, TouchableOpacity, ActivityIndicator, Text, FlatList } from 'react-native';
import { useUserStorage } from "../../services/storage/dataStorage";
import { styles } from './styles';
import { Temas } from '../../global/themes';
import Header from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { createContext, useCallback, useState } from 'react';
import ClientCard from '../../components/ClienteCard';
import { dbService } from '../../data/dbService';
import { useFocusEffect } from '@react-navigation/native';

export default function Pesquisar() {
    const Context = createContext();
    const [hasSearched, setHasSearched] = useState(false)
    const [clientes, setCliente] = useState([])
    const [load, setLoad] = useState(false)
    const [busca, setBusca] = useState()
    const { userId } = useUserStorage()
    const { BuscarClientes } = dbService();

    const RealizaBusca = async () => {
        try {
            const res = await BuscarClientes(busca)
            setLoad(true)

            if (res) {
                setCliente(res)
                setLoad(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            setCliente([])
            setBusca()
        }, []))


    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} text={'Procure pelo Cliente'} isHome={false} />
            <View style={styles.topBox}>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.textInput} value={busca} onChangeText={setBusca} />
                    <MaterialIcons
                        name="person-search"
                        size={20}
                        color={Temas.colors.gray}
                    />
                </View>
                <View style={styles.searchBox}>
                    <TouchableOpacity style={[styles.btnSearch, styles.centerContent]} onPress={RealizaBusca}>
                        <Text style={styles.txtInp}>Procurar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.midBox}>
                <FlatList
                    isLoading={load}
                    data={clientes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ClientCard cliente={item} isHome={false} />
                    )}
                    hasSearched={hasSearched}
                />
            </View>
        </View>
    );
}