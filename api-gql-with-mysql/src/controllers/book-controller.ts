import { DB_CONFIG } from '../database/database';

export const bookController = {
    allBooks:  async() => {
        try {
            const query = (await DB_CONFIG)
            .query(`
                SELECT 
                    b.id_book, b.asin, b.name, 
                    b.editorial, b.lang, b.cover, 
                    b.isbn, b.id_category, c.name as 'categoryName' , 
                    b.id_author, a.name as 'nameAuthor'  
                FROM 
                    book b, category c, author a 
                WHERE 
                    b.id_category = c.id_category 
                AND 
                    b.id_author = a.id_author
            `);
            return query;
        } catch (error) {
            console.log(error);
        }
    }
}