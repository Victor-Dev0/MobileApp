import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


export default function Header({ backgroundColor, barStyle = 'light-content' }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </SafeAreaView>
    );
}
