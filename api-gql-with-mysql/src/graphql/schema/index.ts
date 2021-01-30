import { gql } from 'apollo-server';


export const typeDefs = gql`
  type Reader {
    name: String
    last_name: String
    age: Int
    address: String
  }

  type Query {
    allReaders: [Reader]
  }
`;