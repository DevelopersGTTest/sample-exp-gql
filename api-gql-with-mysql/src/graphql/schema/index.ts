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

  type Book {
    id_book: ID!
    asin: Int!
    name: String!
    editorial: String!  
    lang: String!
    cover: String! 
    isbn: String!  
    author: Author!
    category: Category!
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

  input BookInput {
    asin: Int!
    name: String!
    editorial: String!  
    lang: String!
    cover: String! 
    isbn: String!  
    author: String!
    category: String!
  }

  type Query {
    allReaders: [Reader]
    findOneReader(id_reader: ID!): Reader
    allCategories: [Category]
    allAuthors: [Author]
    allBooks: [Book]
  }

  type Mutation {
    createReader(reader: ReaderInput): Reader
    deleteReader(id_reader: ID!): String
    createCategory(category: CategoryInput): Category
    createAuthor(author: AuthorInput): Author
    createBook(book: BookInput): Book
  }

`;