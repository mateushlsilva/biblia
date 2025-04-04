import "reflect-metadata";
import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { BibliaResolver } from "./resolvers";
import AppDataSource from "./data-source";

const main = async () => {
    const schema = await buildSchema({
        resolvers: [BibliaResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({ schema });
    await server.start();

    const app = express();

    server.applyMiddleware({ app }); 


    app.listen(4000, () => {
        console.log("🚀 Servidor rodando em: http://localhost:4000/graphql");
    });
};

main();
