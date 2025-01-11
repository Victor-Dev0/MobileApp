import React from "react";
import { StyleSheet } from "react-native";
import { Temas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Temas.colors.bgScreen,
    },
    searchBox: {
        flex: 0,
        flexDirection: 'row',
        width: '25%',
        alignItems: 'center',
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Temas.colors.secondary,
        borderColor: Temas.colors.bgBoxInput,
        backgroundColor: Temas.colors.primary,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSearch: {
        flex: 0,
        width: '100%',
        height: 50,
        paddingHorizontal: 19,
    },
    txtInp: {
        color: Temas.colors.secondary,
        fontWeight: 'bold',
    },
})