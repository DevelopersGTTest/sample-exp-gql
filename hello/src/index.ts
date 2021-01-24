import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Person } from './person.model';


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  input PersonInput {
    name: String
    age: Int
  }

  type Person {
    id: ID!
    name: String
    age: Int
  }

  type Query { 
    getPersonById(id: ID!): Person 
  }

  type Mutation {
    createPerson(input: PersonInput): Person
    updatePerson(id: ID!, input: PersonInput ): Person
  }
`);

 
// The root provides a resolver function for each API endpoint
const root = {
  createPerson: ( rawData: Person ) => {
    const person = JSON.parse(JSON.stringify(rawData)).input;
    // Create a random id for our "database".
    const id = require('crypto').randomBytes(10).toString('hex');
    return new Person( id, person.name, person.age );
  }
};
 
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, ()=> {
  console.log(`🚀  Server ready at http://localhost:4000/graphql`);
});