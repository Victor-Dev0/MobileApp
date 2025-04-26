import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { Temas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: Platform.OS === 'ios' ? 160 : 120,
        paddingStart: 16,
        paddingEnd: 16,
    },
    content: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: Platform.OS === 'ios' ? 0 : 15
    },
    txtUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Temas.colors.secondary,
    },
    bgUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    iconeUser: {
        flexDirection: 'row',
        gap: 10,
    },
    addCliente: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    txtBusca: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Temas.colors.secondary,
        paddingBottom: 5,
    },
    topContent: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: Platform.OS === 'ios' ? 0 : 20
    },
    TopAgenda: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    addAgendamento: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})