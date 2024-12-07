import { StyleSheet } from 'react-native';
import { Temas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Temas.colors.bgScreen,
        alignItems: 'center',
    },
    logoImg: {
        height: 200,
        width: 200,
        top: '70%',
        marginBottom: 12,
    },
    load: {
        top: '30%',
    }
});