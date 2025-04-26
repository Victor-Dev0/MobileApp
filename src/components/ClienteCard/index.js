import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Temas } from '../../global/themes';
import { createContext } from 'react';
import { dbService } from '../../data/dbService';

export default function ClientCard({ cliente, isHome, pesquisa }) {
    const Context = createContext();
    const { ApagarCliente } = dbService();

    const Apagar = async (id) => {
        const apagado = await ApagarCliente(id)
    }

    if (pesquisa) {
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
                </View>
            </View>
        )
    }
    if (isHome) {
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
                </View>
            </View>
        );
    } else {
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
                    <Text>Horario: {cliente.hora}</Text>
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

}