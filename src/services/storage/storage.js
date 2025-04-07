import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const SalvarUsuario = async (valor) => {
    try {
        await AsyncStorage.setItem("Usuario", valor).then(Alert.alert('Sucesso', 'Usuario salvo!'))
    } catch (error) {
        return { error }
    }
}

export const CarregarUsuario = async () => {
    try {
        let jsonValue = await AsyncStorage.getItem("Usuario").then(Alert.alert('Sucesso', 'Usuario Buscado!'))
        console.log(jsonValue)

        if (jsonValue !== null) {
            return JSON.parse(jsonValue)
        }
    } catch (error) {
        return { error }
    }
}
