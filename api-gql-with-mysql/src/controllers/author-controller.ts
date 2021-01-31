import { DB_CONFIG } from '../database/database';

export const authorController = {
    allAuthors: async() => {
        const query = (await DB_CONFIG).query(`SELECT * FROM author`);
        return query;
    }
}
