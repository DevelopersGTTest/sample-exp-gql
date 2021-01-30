import mysql  from 'promise-mysql-native';
import { DB_CONFIG } from './config';

let connection;

export const cnf = mysql.createConnection({
    host: DB_CONFIG.host,
    user:  DB_CONFIG.user,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database
}).then(function(conn){
    connection = conn;
    return connection.query('SELECT * FROM reader');
});