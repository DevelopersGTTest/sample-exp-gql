import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Reader {
    id_reader: ID!
    name: String
    last_name: String
    age: Int
    address: String
  }

  type Category {
    id_category: ID!
    name: String
  }

  type Author {
    id_author: ID!
    name: String!
  }

  input ReaderInput {
    name: String!
    last_name: String!
    age: Int!
    address: String!
  }

  input CategoryInput {
    name: String!
  }

  input AuthorInput {
      name: String!
  }

  type Query {
    allReaders: [Reader]
    findOneReader(id_reader: ID!): Reader
    allCategories: [Category]
    allAuthors: [Author]
  }

  type Mutation {
    createReader(reader: ReaderInput): Reader
    deleteReader(id_reader: ID!): String
    createCategory(category: CategoryInput): Category
    createAuthor(author: AuthorInput): Author
  }

`;