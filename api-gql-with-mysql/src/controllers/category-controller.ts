import { DB_CONFIG } from '../database/database'
// import { Category } from '../models/category-model';

export const categoryController = {
    allCategories:  async() => {
        try {
            const query = (await DB_CONFIG).query(`SELECT * FROM category`);
            return query;
        } catch (error) {
            console.log(error);
        }
    }
}