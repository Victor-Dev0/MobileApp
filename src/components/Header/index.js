import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Temas } from '../../global/themes';


export default function Header({ backgroundColor, barStyle = 'light-content', username }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
            <View style={styles.content}>
                <Text style={styles.txtUser}>Olá, {username}</Text>
                <View style={styles.iconeUser}>
                    <TouchableOpacity style={styles.bgUser} activeOpacity={0.5}>
                        <Feather
                            name='user'
                            size={32}
                            color={Temas.colors.secondary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
