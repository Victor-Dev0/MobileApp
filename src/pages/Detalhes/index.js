import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Temas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';

export default function Detalhes({ route }) {
    const navigation = useNavigation()

    const data = JSON.parse(route.params.data);

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} isHome={false} text={`Detalhes Dia: ${data.day}`} />
            <View style={styles.searchBox}>
                <TouchableOpacity onPress={goBack} style={[styles.btnSearch, styles.centerContent]}>
                    <Text style={styles.txtInp}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 