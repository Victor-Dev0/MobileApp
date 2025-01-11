import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Temas } from '../../global/themes';


export default function Header({ backgroundColor, barStyle = 'light-content', username, isHome, text }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
            {isHome ? (
                <View style={styles.content}>
                    <Text style={styles.txtUser}>Olá, {username}</Text>
                    <View style={styles.iconeUser}>
                        <TouchableOpacity style={styles.addCliente} activeOpacity={0.5}>
                            <Ionicons
                                name='add-circle'
                                size={32}
                                color={Temas.colors.secondary}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bgUser} activeOpacity={0.5}>
                            <Feather
                                name='user'
                                size={32}
                                color={Temas.colors.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.topContent}>
                    <Text style={styles.txtBusca}>{text}</Text>

                </View>
            )}

        </SafeAreaView>
    );
}
