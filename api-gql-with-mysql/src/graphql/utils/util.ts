
export const util = {
    toJSON: ( dataRaw: any ) => {
        return JSON.parse(JSON.stringify(dataRaw));
    }   
}