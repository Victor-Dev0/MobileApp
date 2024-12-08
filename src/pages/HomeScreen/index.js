import { Text, View } from 'react-native';
import { styles } from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';

//APAGAR ISTO FUTURAMENTE
//import { API_URL } from '@env';

export default function Home({ username }) {

    async function getUser() {
        try {
            const res = await fetch()
        } catch (e) {

        }
    }

    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} username={'Victor'} />
        </View>
    );
}