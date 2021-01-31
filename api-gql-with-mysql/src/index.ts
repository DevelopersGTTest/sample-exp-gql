import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs  } from './graphql/schema';

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});