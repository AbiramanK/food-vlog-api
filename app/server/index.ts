import { ApolloServer } from "apollo-server";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
