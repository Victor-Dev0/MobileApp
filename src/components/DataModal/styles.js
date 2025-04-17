import { StyleSheet } from "react-native";
import { Temas } from "../../global/themes";

export const styles = StyleSheet.create({
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
    selecionados: {
        paddingStart: 120,
        height: 40,
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        marginTop: 20,
        fontSize: 25
    },
})