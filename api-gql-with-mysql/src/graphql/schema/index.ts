import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Reader {
    id_reader: ID!
    name: String
    last_name: String
    age: Int
    address: String
  }

  type Query {
    allReaders: [Reader]
    findOneReader(id_reader: ID): Reader
  }
`;