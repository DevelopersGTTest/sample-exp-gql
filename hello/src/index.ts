import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Person } from './person.model';
import { ObjectId  } from './utils';

let personsList:Person[] = [];

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
    getAllPersons: [Person]  
  }

  type Mutation {
    createPerson(input: PersonInput): Person
    updatePerson(id: ID!, input: PersonInput ): Person
    removePersonById(id: ID!): String
  }
`);

 
// The root provides a resolver function for each API endpoint
const root = {
  createPerson: ( rawData: Person ) => {
    const person = JSON.parse(JSON.stringify(rawData)).input;
    // Create a random id for our "database".
    const id = require('crypto').randomBytes(10).toString('hex');
    personsList.push(new Person( id, person.name, person.age ));
    return new Person( id, person.name, person.age );
  },
  getAllPersons: () => {
    return personsList
  },
  getPersonById:  (objectId: ObjectId) => {
    const rawList: Person[] = JSON.parse(JSON.stringify(personsList));
    const filteredData: Person[] = rawList.filter((person) => person.id == objectId.id);
    if(filteredData.length === 0 ) {
      throw new Error('no person exists with id ' + objectId.id);
    }
    return filteredData[0];
  },
  removePersonById: (objectId: ObjectId ) => {
    const rawList: Person[] = JSON.parse(JSON.stringify(personsList));
    const filteredData: Person[] = rawList.filter((person) => person.id == objectId.id);
    if(filteredData.length === 0 ) {
      throw new Error('no person exists with id ' + objectId.id);
    }
    const newList: Person[] = rawList.filter((person) => person.id !== objectId.id);
    personsList = newList;
    return 'person with id'+ objectId.id + 'deleted!'
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