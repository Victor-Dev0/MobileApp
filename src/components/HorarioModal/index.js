import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../DataModal/styles'

export default function EscolhaHorario({ mudanca }) {
    const [mostrarPicker, setMostrarPicker] = useState(false);
    const [modo, setModo] = useState('time')
    const [horaAtual, setHoraAtual] = useState(new Date());

    const onChange = (event, selectedDate) => {
        setMostrarPicker(Platform.OS === 'ios')
        if (selectedDate) {
            const horario = {
                hora: selectedDate.getHours().toString(),
                minuto: selectedDate.getMinutes().toString()
            }
            setHoraAtual(selectedDate);
            mudanca(horario)
        }
        setMostrarPicker(false)
    };

    const mostrarModo = (modoAtual) => {
        setMostrarPicker(true)
        setModo(modoAtual)

    }

    return (
        <View style={{ padding: 20 }}>
            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.btnSearch} onPress={() => mostrarModo('time')}>
                    <Text style={styles.txtInp}>Escolher Horario</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.selecionados, { paddingStart: 140 }]}>
                {horaAtual.getHours().toString().padStart(2, '0')}:{horaAtual.getMinutes().toString().padStart(2, '0')}
            </Text>
            {mostrarPicker && (
                <View>
                    <DateTimePicker
                        value={horaAtual}
                        mode={modo}
                        is24Hour={true}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                    />
                    <View style={styles.searchBox}>
                        <TouchableOpacity style={styles.btnSearch} onPress={() => mostrarModo('time')}>
                            <Text style={styles.txtInp}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
