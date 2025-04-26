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

    async function InserirAgendamento(nome, clienteId, data, hora, servico,) {
        try {
            const result = await database.runAsync('INSERT INTO agendamentos (nome, clienteId, data, hora, servico) VALUES (?, ?, ?, ?, ?);',
                [nome, clienteId, data, hora, servico]);

            return true
        } catch (error) {
            console.error(error)

            return false
        }
    }

    async function PrimeiroAgendamento() {
        try {
            const result = await database.getAllAsync('SELECT * FROM agendamentos');
            // const result = await database.runAsync('DELETE FROM agendamentos');

            return result
        } catch (error) {
            console.error(error)
        }
    }

    async function BuscaAgendamentoPorData(data) {
        try {
            const result = await database.getAllAsync(`
                SELECT c.nome, c.telefone, a.hora
                FROM clientes c 
                JOIN agendamentos a on c.id = a.clienteId
                WHERE data = ?
                ORDER BY c.nome,
                         c.telefone,
                         a.hora
                `, [data]);

            return result
        } catch (error) {
            console.error(error)
        }
    }

    return {
        CriarUsuario,
        LoginTela,
        CriarCliente,
        ObtemTodosClientes,
        ApagarCliente,
        BuscarClientes,
        InserirAgendamento,
        PrimeiroAgendamento,
        BuscaAgendamentoPorData,
    }
}
