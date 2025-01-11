import { View, TextInput, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useUserStorage } from "../../services/storage/dataStorage";
import { styles } from './styles';
import { Temas } from '../../global/themes';
import Header from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import List from '../../components/List';
import ClientCard from '../../components/ClienteCard';

export default function Pesquisar() {
    const [hasSearched, setHasSearched] = useState(false)
    const [cliente, setCliente] = useState([])
    const [load, setLoad] = useState(false)
    const { userId } = useUserStorage()


    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} text={'Procure pelo Cliente'} isHome={false} />
            <View style={styles.topBox}>
                <View style={styles.BoxInput}>
                    <TextInput style={styles.textInput} />
                    <MaterialIcons
                        name="person-search"
                        size={20}
                        color={Temas.colors.gray}
                    />
                </View>
                <View style={styles.searchBox}>
                    <TouchableOpacity style={[styles.btnSearch, styles.centerContent]}>
                        <Text style={styles.txtInp}>Procurar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.midBox}>
                <List
                    isLoading={load}
                    data={cliente}
                    renderItem={({ item }) => <ClientCard cliente={item} />}
                    hasSearched={hasSearched}
                />
            </View>
        </View>
    );
}