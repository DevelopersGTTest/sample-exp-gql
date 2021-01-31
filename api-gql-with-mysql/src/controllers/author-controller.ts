import { DB_CONFIG } from '../database/database';
import { Author } from '../models/author-model';

export const authorController = {
    allAuthors: async() => {
        try {
            const query = (await DB_CONFIG).query(`SELECT * FROM author`);
            return query;
        } catch (error) {
            console.log(error);
        }
    },
    createAuthor: async(author: Author ) => {
        try {
            const query = (await DB_CONFIG)
            .query(`INSERT INTO author (name) VALUES ('${author.name}')`)
        return query;   
        } catch (error) {
            console.log(error);
        }     
    }
}
