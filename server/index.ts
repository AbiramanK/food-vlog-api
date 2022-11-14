import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/../app/**/resolver.{ts,js}"],
  });

  const server = new ApolloServer({
    schema,
  });

  const PORT = parseInt(process.env.NODE_APP_SERVER_PORT!) ?? 8000;

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

startServer();
