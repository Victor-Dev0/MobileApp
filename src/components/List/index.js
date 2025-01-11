import React, { useState } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import { Temas } from "../../global/themes";
import { styles } from "./styles";

export default function List({ isLoading, data, renderItem, hasSearched }) {

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={60} color={Temas.colors.primary} />
            </View>
        )
    }

    if (hasSearched && (!data || data.length === 0)) {
        return Alert.alert("Aviso", "Nenhum cliente foi encontrado!")
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
        />
    )
}