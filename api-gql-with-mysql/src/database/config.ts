import mysql  from 'promise-mysql-native';

let connection;

export const cnf = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'graphql-library'
}).then(function(conn){
    connection = conn;
    return connection.query('SELECT * FROM reader');
});