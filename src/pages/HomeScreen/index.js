import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import ClientCard from '../../components/ClienteCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';
import { useGetData } from '../../services/hooks';
import { useNavigation } from '@react-navigation/native';
import { CarregarUsuario } from "../../services/storage/storage";

export default function Home({ route }) {
    const navigation = useNavigation()
    const [usuario, setUsuario] = useState()
    const { user } = route.params

    const receber = () => {
        CarregarUsuario().then((usuario) => setUsuario(usuario))
    }

    useEffect(() => {
        receber
        //console.log(usuario)
    }, [])

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={user.nome} isHome={true} userId={user.id} />
            <ScrollView style={styles.scroll}>
                <View>

                </View>
            </ScrollView>
        </View>
    );
}