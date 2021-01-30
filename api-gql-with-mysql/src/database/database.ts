import mysql  from 'promise-mysql-native';
import { CONFIG } from './config';

let connection;

export const DB_CONFIG = mysql.createConnection({
    host: CONFIG.host,
    user:  CONFIG.user,
    password: CONFIG.password,
    database: CONFIG.database
}).then(function(conn){
    connection = conn;
    return connection;
});