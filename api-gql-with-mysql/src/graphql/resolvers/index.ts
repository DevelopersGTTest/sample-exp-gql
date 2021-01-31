import { readerController } from '../../controllers/reader-controller';
import { categoryController } from '../../controllers/category-controller';
import { authorController } from '../../controllers/author-controller';
import { util } from '../utils/util';
import { Reader } from '../../models/reader-model';
import { Category } from '../../models/category-model';
import { Author } from '../../models/author-model'; 

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
            return element as Reader;
        },
        async allCategories() {
            const results = await categoryController.allCategories();
            const jsonData = util.toJSON(results) as Category[];
            return jsonData;
        },
        async allAuthors() {
            const results = await authorController.allAuthors();
            const jsonData = util.toJSON(results) as Author[];
            return jsonData;
        }
    },
    Mutation: { 
        createReader:  async(_: null, args: {reader: Reader}) => {
            const newReader = util.toJSON(args.reader);
            await readerController.createReader(newReader);            
            return (args.reader as Reader);
        },
        deleteReader:  async(_:null, args: {id_reader: string}) => {
            const result =  await readerController.deleteReader(args.id_reader);
            const rawDbData = util.toJSON(result);
            if( rawDbData.affectedRows === 0 ) {
                return `reader with id ${args.id_reader} not exist!`;
            }
            return `reader with id ${args.id_reader} deleted!`
        },
        createCategory: async(_: null, args: {category: Category}) => {
            const newCategory = util.toJSON(args.category);
            await categoryController.createCategory(newCategory);
            return (args.category as Category);
        }
    }
};