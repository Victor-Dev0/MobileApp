import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const SalvarUsuario = async (valor) => {
    try {
        await AsyncStorage.setItem("Usuario", valor).then(Alert.alert('Sucesso', `Usuario salvo`))
    } catch (error) {
        return { error }
    }
}

export const CarregarUsuario = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("Usuario").then(Alert.alert('Sucesso', 'Usuario Buscado!'))
        //console.log(jsonValue)
        if (jsonValue !== null) {
            return jsonValue
        }
    } catch (error) {
        return { error }
    }
}
