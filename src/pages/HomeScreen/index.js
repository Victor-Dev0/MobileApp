import { Text, View } from 'react-native';
import { styles } from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { Temas } from '../../global/themes';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header backgroundColor={Temas.colors.bgTabBar} />
            <UserCard />
        </View>
    );
}