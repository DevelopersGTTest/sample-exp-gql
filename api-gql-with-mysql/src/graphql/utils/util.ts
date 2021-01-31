import { Reader } from '../../models/reader-model';

export const util = {
    toJSON: (dataRaw: any) => {
        return JSON.parse(JSON.stringify(dataRaw));
    },
    mapperElement(dataList: Reader[]) {
        if( dataList.length === 0 ) {
            return {}
        }
        return dataList.find((ele)=> ele );
    }   
}