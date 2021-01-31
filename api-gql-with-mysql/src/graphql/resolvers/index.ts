import { readerController } from '../../controllers/reader-controller';
import { util } from '../utils/util';
import { Reader } from '../../models/reader-model';

export const resolvers = {
    Query: {
        async allReaders() {
            const results = await readerController.allReaders();
            const jsonData = util.toJSON(results) as Reader[];
            return jsonData;
        },
        async findOneReader(_: null, args: {id_reader: string }) {
            const result = await readerController.findOneReader(args.id_reader);
            const jsonDataList = await util.toJSON(result);
            const element: any = util.mapperElement(jsonDataList)
            if( Object.keys(element).length === 0 ) {
                throw new Error('no reader exists with id ' + args.id_reader);
            }
            return element;
        }
    }
};