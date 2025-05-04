export function merge(collection_1:number[],collection_2:number[],collection_3:number[]):number[]{
    
    //check for array and int data input
    const collections = [collection_1, collection_2, collection_3];

    for (let i = 0; i < collections.length; i++) {
        const arr = collections[i];
        if (!Array.isArray(arr)) {
            throw new Error(`collection_${i + 1} is not an array`);
        }
        for (const value of arr) {
            if (!Number.isInteger(value)) {
                throw new Error(`collection_${i + 1} contains non-integer value: ${value}`);
            }
        }
    }

    // reverst collection 2 
    const reversed_collection_2 = [...collection_2].reverse();

    const result = [...collection_1, ...reversed_collection_2, ...collection_3];

    // sorted array by ascending
    for (let i=0; i<result.length; i++){
        for (let j=0; j<result.length -i -1; j++){
            if(result[j]>result[j+1]){
                const temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }
    return result;
}

