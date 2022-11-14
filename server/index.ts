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

  server.listen({ port: 8000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

startServer();
