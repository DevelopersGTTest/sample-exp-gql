import { DB_CONFIG } from '../database/database';
import { Author } from '../models/author-model';

export const authorController = {
    allAuthors: async() => {
        const query = (await DB_CONFIG).query(`SELECT * FROM author`);
        return query;
    },
    createAuthor: async(author: Author ) => {
        const query = (await DB_CONFIG)
            .query(`INSERT INTO author (name) VALUES ('${author.name}')`)
        return query;    
    }
}
