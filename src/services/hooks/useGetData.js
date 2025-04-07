import { api } from '../api'

export const useGetData = () => {

    const handleLogin = async (email, senha) => {
        const data = {
            email: email,
            senha: senha
        }
        try {
            const res = await api.post('/usuario/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return res.data
        } catch (error) {
            console.error(`Erro em handleLogin: ${error}`)
            return { error }
        }
    }

    const CadastraCliente = async (nome, telefone, userId) => {
        const data = {
            nome: nome,
            telefone: telefone,
            usuarioId: userId
        }

        try {
            const res = await api.post('/cliente/inserir', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return res
        } catch (err) {
            return { err }
        }
    }
    const CadastroUsuario = async (nome, email, senha) => {
        const data = {
            nome: nome,
            email: email,
            senha: senha
        }

        try {
            const res = await api.post('/usuario/inserir', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return res.data
        } catch (error) {
            return { error }
        }
    }

    const getUserInfo = async (idUser) => {
        try {
            const response = await api.get(`/usuario/obter?id=${idUser}`)

            return response.data
        } catch (error) {
            console.error(`Erro em getUserInfo: ${error}`)
            return { error }
        }
    }

    return {
        handleLogin,
        getUserInfo,
        CadastroUsuario,
        CadastraCliente,
    }
}