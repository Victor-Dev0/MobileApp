import { Dimensions, StyleSheet } from "react-native";
import { Temas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: Dimensions.get("window").height / 9,
        width: Dimensions.get("window").width / 1.1,
        backgroundColor: Temas.colors.secondary,
        marginStart: 10,
        alignItems: 'center',
        backgroundColor: Temas.colors.bgTabBar,
        borderRadius: 20,
        marginTop: 12,
        gap: 10,
        paddingStart: 15,
    },
    bgUser: {
        width: 54,
        height: 54,
        backgroundColor: Temas.colors.bgUsuario,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 54 / 2,
    },
    clinteInfo: {
        flex: 1,
        // paddingStart: 12,
        marginLeft: 20,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    actionIcons: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35 / 2,
        backgroundColor: Temas.colors.bgUsuario,
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 10,
        marginRight: 30,
    }
})