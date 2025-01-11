import { Dimensions, StyleSheet, Platform } from "react-native";
import { Temas } from "../../global/themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Temas.colors.bgScreen,
    },
    BoxInput: {
        width: '65%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Temas.colors.secondary,
        borderColor: Temas.colors.bgBoxInput,
    },
    textInput: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
    },
    topBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingStart: 10,
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

    midBox: {
        flex: 1,
        height: '100%',
        paddingTop: 30,
    },
})