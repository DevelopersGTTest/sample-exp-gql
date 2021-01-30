import { DB_CONFIG } from '../database/database'

export const readerController = {
    allReaders:  async() => {
        try {
            const query = (await DB_CONFIG).query('SELECT * FROM reader');
            return query;
        } catch (error) {
            console.log(error);
        }
    }
}