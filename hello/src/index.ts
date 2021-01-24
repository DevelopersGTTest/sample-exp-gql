import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
 
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    greetingPerson(name: String!, age: Int): String
  }
`);

interface Person {
  name: string;
  age: number 
}
 
// The root provides a resolver function for each API endpoint
const root = {
    greetingPerson: ( data: Person ) => {
        return `hello ${data.name} ${data.age}`;
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