import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Temas } from '../../global/themes';
import { useNavigation } from '@react-navigation/native';


export default function Header({ backgroundColor, barStyle = 'light-content', username, isHome, text, userId }) {
    const navigation = useNavigation()
    const id = userId;
    const navegarCadastroCliente = (nomeTela) => {
        navigation.navigate(nomeTela, { user: userId })
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
            {isHome ? (
                <View style={styles.content}>
                    <View>
                        <Text style={styles.txtUser}>Olá, {username}</Text>
                        <Text style={styles.txtUser}>Agendamentos de Hoje</Text>
                    </View>

                    <View style={styles.iconeUser}>
                        <TouchableOpacity style={styles.addCliente} activeOpacity={0.5} onPress={() => navegarCadastroCliente('RegistroCliente')}>
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
