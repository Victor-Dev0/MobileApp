import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from "../../utils/localeCalendarCfg"
import { styles } from './styles';
import Header from '../../components/Header';
import { Temas } from "../../global/themes";
import { useNavigation } from '@react-navigation/native';
import HeaderAgenda from '../../components/Header/headerAgenda';

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export default function Agenda() {
    const navigation = useNavigation()

    const navegarDetalhesDia = (dia) => {
        const dataClicada = dia;

        navigation.navigate('Detalhes', { data: JSON.stringify(dataClicada) })
    }

    return (
        <View style={styles.container}>
            <HeaderAgenda backgroundColor={Temas.colors.bgTabBar} text={"Agenda"} />

            <View style={styles.calendarBox}>
                <Calendar
                    style={styles.calendar}
                    headerStyle={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: Temas.colors.red,
                        paddingBottom: 10,
                        marginBottom: 10,
                    }}
                    theme={{
                        textMonthFontSize: 18,
                    }}
                    onDayPress={(dia) => {
                        navegarDetalhesDia(dia)
                    }}
                    hideExtraDays
                />
            </View>
        </View>
    );
}