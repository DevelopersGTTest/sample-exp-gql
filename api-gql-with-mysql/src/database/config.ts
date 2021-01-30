export const CONFIG = {
    user          : process.env.NODE_MYSQL_USER || 'root',
    password      : process.env.NODE_MYSQL_PASSWORD || '',
    host          : process.env.NODE_MYSQL_HOST || 'localhost',
    database      : process.env.NODE_MYSQL_DATABASE || 'graphql-library',
}