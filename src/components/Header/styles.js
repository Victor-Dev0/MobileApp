import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { Temas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: Platform.OS === 'ios' ? 160 : StatusBar.currentHeight,
        paddingStart: 16,
        paddingEnd: 16,
    },
    content: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtUser: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Temas.colors.secondary,
        paddingBottom: 5,
    },
    iconeUser: {
    },
    bgUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
})