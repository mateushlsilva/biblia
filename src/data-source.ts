import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

// //versão para PostgreSQL
const AppDataSource = new DataSource({
    database: 'catolica_biblia', // se for SQLite, então use bdaula.sqlite
    type: "mysql", // se for SQLite, então use sqlite
    host: 'localhost', // não use esta propriedade se for sqlite
    port: 3306, // não use esta propriedade se for sqlite
    username: 'root', // não use esta propriedade se for sqlite
    password: 'fatec', // não use esta propriedade se for sqlite
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false,
    logging: false, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/models/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.

});

// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!") //sucesso na promessa
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;