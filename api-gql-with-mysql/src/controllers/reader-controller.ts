import { DB_CONFIG } from '../database/database'
import { Reader } from '../models/reader-model';

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
            const query = (await DB_CONFIG)
                .query(`SELECT * FROM reader WHERE id_reader = ${id}`)
            return query;
        } catch (error) {
            console.log(error);
        }
    },
    createReader: async(reader: Reader ) => {
        try {
            const query = (await DB_CONFIG)
                .query(`
                INSERT INTO reader 
                    (name, last_name, age, address) 
                VALUES ('${reader.name}', '${reader.last_name}', 
                    '${reader.age}', '${reader.address}');`)
                return query;
        } catch (error) {
            console.log(error)
        }
    } 
}