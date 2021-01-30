import { readerController } from '../../controllers/reader-controller';
import { util } from '../utils/util';
import { Reader } from '../../models/reader-model';

export const resolvers = {
    Query: {
        async allReaders() {
            const results = await readerController.allReaders()
            const jsonData = util.toJSON(results) as Reader[];
            return jsonData;
        }
    }
};