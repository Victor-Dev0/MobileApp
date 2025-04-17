import { useSQLiteContext } from "expo-sqlite";

export function dbService() {
    const database = useSQLiteContext();

    async function CriarUsuario(nome, email, senha) {
        try {
            const result = await database.runAsync(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);`, [nome, email, senha]);

            return true
        } catch (error) {
            console.error(error)
            return false
        }

    }

    async function LoginTela(email, senha) {
        try {
            const result = await database.getFirstAsync(`SELECT * FROM usuarios WHERE email='${email}';`)
            return result
        } catch (error) {
            console.error(error)
        }
    }

    async function CriarCliente(nome, telefone, userId) {
        try {
            const result = await database.runAsync(`INSERT INTO clientes (nome, telefone, usuarioId) VALUES (?, ?, ?);`, [nome, telefone, userId])
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async function ObtemTodosClientes() {
        try {
            const result = await database.getAllAsync(`SELECT * FROM clientes;`)
            return result
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    async function ApagarCliente(clienteId) {
        try {
            const result = await database.runAsync(`DELETE FROM clientes WHERE id = '${clienteId}';`)
            return true
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async function BuscarClientes(nome) {
        try {
            const result = await database.getAllAsync(`SELECT * FROM clientes WHERE nome like '%${nome}%'`)
            return result
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    return {
        CriarUsuario,
        LoginTela,
        CriarCliente,
        ObtemTodosClientes,
        ApagarCliente,
        BuscarClientes,
    }
}
