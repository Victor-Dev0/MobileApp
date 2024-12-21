import { api } from '../api'

export const useGetData = () => {

    const handleLogin = async (login, senha) => {
        const data = {
            username: login,
            password: senha
        }
        try {
            const res = await api.post('/User/Login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(res.data)
            return res.data
        } catch (error) {
            console.error(`Erro em handleLogin: ${error}`)
            return { error }
        }
    }

    const getUserInfo = async (idUser) => {
        try {
            const response = await api.get(`/User/obter?userId=${idUser}`)

            return response.data
        } catch (error) {
            console.error(`Erro em getUserInfo: ${error}`)
            return { error }
        }
    }

    return {
        handleLogin,
        getUserInfo,
    }
}