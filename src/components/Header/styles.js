import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { Temas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight,
    }
})