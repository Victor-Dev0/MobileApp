export async function initDb(database) {
    try {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                telefone TEXT NOT NULL,
                usuarioId INTEGER NOT NULL,
                FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
            );

            CREATE TABLE IF NOT EXISTS agendamentos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                clienteId INTEGER NOT NULL,
                data TEXT NOT NULL,
                hora TEXT NOT NULL,
                servico TEXT,
                FOREIGN KEY (clienteId) REFERENCES clientes(id)
            );
        `);
    } catch (error) {
        console.log(error)
    }
}
