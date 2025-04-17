import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../DataModal/styles'

export default function EscolhaHorario({ mudanca }) {
    const [mostrarPicker, setMostrarPicker] = useState(false);
    const [horaAtual, setHoraAtual] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setMostrarPicker(false);
        if (selectedDate) {
            const horario = {
                hora: selectedDate.getHours().toString(),
                minuto: selectedDate.getMinutes().toString()
            }
            setHoraAtual(selectedDate);
            mudanca(horario)
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.btnSearch} onPress={() => setMostrarPicker(true)}>
                    <Text style={styles.txtInp}>Escolher Horario</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.selecionados, { paddingStart: 140 }]}>
                {horaAtual.getHours().toString().padStart(2, '0')}:{horaAtual.getMinutes().toString().padStart(2, '0')}
            </Text>
            {mostrarPicker && (
                <DateTimePicker
                    value={horaAtual}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}
