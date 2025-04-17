import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { Temas } from '../../global/themes';
import { useNavigation } from '@react-navigation/native';
import { createContext } from 'react';

export default function HeaderAgenda({ backgroundColor, barStyle = 'light-content', text }) {
    const Context = createContext();
    const navigation = useNavigation();



    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
            <View style={styles.TopAgenda}>
                <Text style={styles.txtBusca}>{text}</Text>
                <TouchableOpacity style={styles.addAgendamento} activeOpacity={0.5} onPress={() => navigation.navigate('Agendamento')}>
                    <Ionicons
                        name='add-circle'
                        size={32}
                        color={Temas.colors.secondary}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
