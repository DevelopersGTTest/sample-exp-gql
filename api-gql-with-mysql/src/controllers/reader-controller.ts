import { DB_CONFIG } from '../database/database'

export const readerController = {
    allReaders:  async() => {
        try {
            const query = (await DB_CONFIG).query(`SELECT * FROM reader`);
            return query;
        } catch (error) {
            console.log(error);
        }
    },
    findOneReader: async(id: string) => {
        try {
            const query = await (await DB_CONFIG)
                .query(`SELECT * FROM reader WHERE id_reader = ${id}`)
            return query;
        } catch (error) {
            console.log(error);
        }
    }
    
}