# Dynamic API with Graphql

this is a simple api based on graphql, will not persist data, just interact in dynamic memory
do you want prove methods?

  - Queries
        - getPersonById(id: ID!): Person
        - getAllPersons: [Person]
  - Mutations
        - createPerson(input: PersonInput): Person
        - removePersonById(id: ID!): String
        - updatePerson(id: ID!input: PersonInput): Person   **[BUILDING..]
 

# Queries  structure
###  [ getPersonById ]
```
query {
  getPersonById(id: "416dd2aaf8be420f309c") {
        id
        name
        age
  }
}
```
###  [ 	getAllPersons ]
```
query {
	getAllPersons {
        id
        name
        age
  }
}
```

# Mutations structure
###   [createPerson]
```
mutation {
	createPerson(input: {
  	    name: "foo", 
    	age: 22
  }) {
    id
    name
    age
  }
}
```
###    [removePersonById]
```
mutation {
  removePersonById(id: "d7a34773a404d86e3cb8" )
}
```
** PD:  as this project is built in typescript you should run these commands before being able to         execute it
