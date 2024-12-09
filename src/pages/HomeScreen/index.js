import { Text, View } from 'react-native';
import { styles } from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';


export default function Home({ route }) {
    const { usuario } = route.params;

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={usuario.user.username} />
        </View>
    );
}