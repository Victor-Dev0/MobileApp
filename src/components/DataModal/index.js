import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

export default function DataModal({ mudanca }) {
    const [mostrarPicker, setMostrarPicker] = useState(false);
    const [dataAtual, setdataAtual] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setMostrarPicker(false);
        if (selectedDate) {
            const currentDate = selectedDate
            setdataAtual(currentDate);
            mudanca(currentDate)
        }
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.btnSearch} onPress={() => setMostrarPicker(true)}>
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
                    mode="date"
                    display='default'
                    onChange={onChange}
                />
            )}
        </View>
    );
}
