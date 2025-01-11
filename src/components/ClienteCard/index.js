import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Temas } from '../../global/themes';

export default function ClientCard({ cliente }) {
    return (
        <View style={styles.container}>
            <View style={styles.bgUser}>
                <Feather
                    name='user'
                    size={35}
                    color={Temas.colors.black}
                />
            </View>
            <View style={styles.clinteInfo}>
                <Text style={styles.clientName}>{cliente.nome}</Text>
                <Text>{cliente.horario}</Text>
                <Text>{cliente.telefone}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.actionIcons} activeOpacity={0.5}>
                    <Feather
                        name='edit'
                        size={20}
                        color={Temas.colors.amarelo}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionIcons} activeOpacity={0.5}>
                    <Feather
                        name='trash-2'
                        size={20}
                        color={Temas.colors.red}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}