import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

export default function DataModal({ mudanca }) {
    const [mostrarPicker, setMostrarPicker] = useState(false);
    const [modo, setModo] = useState('date')
    const [dataAtual, setdataAtual] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setMostrarPicker(Platform.OS === 'ios')
        if (selectedDate) {
            const currentDate = selectedDate
            setdataAtual(currentDate);
            mudanca(currentDate)
        }
    };

    const mostrarModo = (modoAtual) => {
        setMostrarPicker(true)
        setModo(modoAtual)
    }

    return (
        <View style={{ padding: 10 }}>
            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.btnSearch} onPress={() => mostrarModo('date')}>
                    <Text style={styles.txtInp}>Escolher Data</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.selecionados}>
                    {dataAtual.getDate().toString().padStart(2, '0')}/{(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/{dataAtual.getFullYear().toString().padStart(2, '0')}
                </Text>
            </View>

            {mostrarPicker && (
                <DateTimePicker
                    value={dataAtual}
                    mode={modo}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                    is24Hour={true}
                />
            )}
        </View>
    );
}
