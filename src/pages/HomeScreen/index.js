import React, { useState, useEffect } from "react";

import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import ClientCard from '../../components/ClienteCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';
import { useGetData } from '../../services/hooks';
import { useNavigation } from '@react-navigation/native';

export default function Home({ route }) {
    const { getUserInfo } = useGetData()
    const [userLogado, setUserLogado] = useState(null)
    const navigation = useNavigation()

    const user = route.params.user;

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={user.nome} />
            <ScrollView style={styles.scroll}>
                <View>
                    <ClientCard />
                </View>
            </ScrollView>
        </View>
    );
}