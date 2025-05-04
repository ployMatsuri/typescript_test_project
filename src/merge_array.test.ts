import { describe } from 'node:test';
import { merge } from './merge_array';

describe('merge',()=>{
    it('merges sorted ascending arrays correctly', () => {
        const collection_1 = [1,2,3];
        const collection_2 = [6,5,4];
        const collection_3 = [7,8,9];
        const result = merge(collection_1,collection_2,collection_3);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9]);

        expect(merge([1,2,3,4,5,6,7,8,9,10,11,12], [40,39,38,37,36,35], [1001,1002,1003,1004,1005,1006])).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,35,36,37,38,39,40,1001,1002,1003,1004,1005,1006]);
    })

    it('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1, 2], [], [])).toEqual([1, 2]);
        expect(merge([], [2, 1], [])).toEqual([1, 2]);
    });

    it('should handle duplicates', () => {
        expect(merge([1, 2], [2, 1], [1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
        expect(merge([11,12,13,14,15], [26,25], [11,12,25])).toEqual([11, 11, 12, 12, 13, 14, 15, 25, 25, 26]);
    });

    it('should handle negative number', () => {
        const collection_1 = [-44,-43,-42,-41];
        const collection_2 = [16,15,13,12,11];
        const collection_3 = [0,10,14];
        const result = merge(collection_1,collection_2,collection_3);
        expect(result).toEqual([-44, -43, -42, -41, 0, 10, 11, 12, 13, 14, 15, 16]);
    });

    it('should throw error if non-integer is present', () => {
        expect(() => merge([1, 2], [3, 'a' as any], [4])).toThrow('All input values must be integers.');
        expect(() => merge([1, 2.2], [], [])).toThrow('All input values must be integers.');
        expect(() => merge([], [], ['x' as any])).toThrow('All input values must be integers.');
    });
    
    it('should throw error if input is not an array', () => {
        expect(() => merge([1, 2], 123 as any, [3])).toThrow('All inputs must be arrays of integers.');
    });
    
})