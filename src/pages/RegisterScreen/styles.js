import { Dimensions, StyleSheet } from "react-native";
import { Temas } from "../../global/themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Temas.colors.bgScreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37
    },
    bottom: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        alignItems: 'center',
        paddingTop: 100,
    },
    logoImg: {
        height: 200,
        width: 200,
    },
    Titulo: {
        fontWeight: 'bold',
        marginTop: 25,
        fontSize: 18
    },
    titleInput: {
        marginTop: 20,
        marginLeft: 5,
        color: Temas.colors.black,
        fontWeight: 'bold',
    },
    textInput: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
    },
    BoxInput: {
        width: '100%',
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
    button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Temas.colors.primary,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textBtn: {
        fontSize: 16,
        color: Temas.colors.secondary,
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 16,
        color: Temas.colors.black,
        fontWeight: 'bold',
    },
    criarConta: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Temas.colors.primary,
    },
    containerBottom: {
        flexDirection: 'row',
    }
})