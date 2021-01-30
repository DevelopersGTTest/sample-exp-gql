import { ApolloServer, gql } from 'apollo-server';
import { resolversT } from './graphql/resolvers';

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
      books: () => books,
    },
  };

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {

  console.log('allreaders ',  resolversT.Query.allReaders() ); 

  console.log(`🚀  Server ready at ${url}`);
});