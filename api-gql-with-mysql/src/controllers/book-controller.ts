import { DB_CONFIG } from '../database/database';
import { Book } from '../models/book-model';

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
    },
    createBook: async(book: Book) => {
        const query =  (await DB_CONFIG).query(`
            INSERT INTO book(
                asin, name, editorial, lang, 
                cover, isbn, id_category, id_author
            ) VALUES (
                1234, 'compilers II', 'ZEDRIC LAYER', 'es', 'solid', '1234ghTY', 2, 1 
            )
            `)
    }
}