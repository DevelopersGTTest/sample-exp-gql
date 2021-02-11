import { DB_CONFIG } from '../database/database';

export const bookController = {
    allBooks:  async() => {
        try {
            const query = (await DB_CONFIG)
            .query(`
                SELECT 
                    book.*,
                    category.name AS 'categoryName',
                    author.name AS 'nameAuthor'
                FROM book
                INNER JOIN category ON book.id_category = category.id_category
                INNER JOIN author ON book.id_author = author.id_author
            `);
            return query;
        } catch (error) {
            console.log(error);
        }
    }
}