import { readerController } from '../../controllers/reader-controller';
import { util } from '../utils/util';

export const resolversT = {
    Query: {
        async allReaders() {
            const results = await readerController.allReaders()
            const jsonData = util.toJSON(results);
            console.log('results x', jsonData )
        }
    }
};