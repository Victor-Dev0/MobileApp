import React from "react";
import { StyleSheet } from "react-native";
import { Temas } from "../../global/themes"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Temas.colors.bgScreen,
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '55%',
        alignItems: 'center',
        height: 40,
        marginLeft: 80,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Temas.colors.secondary,
        borderColor: Temas.colors.bgBoxInput,
        backgroundColor: Temas.colors.primary,
    },
    btnSearch: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInp: {
        color: Temas.colors.secondary,
        fontWeight: 'bold',
    },
})