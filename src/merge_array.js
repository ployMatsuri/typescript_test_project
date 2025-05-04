"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    //check for array and int data input
    var collections = [collection_1, collection_2, collection_3];
    for (var i = 0; i < collections.length; i++) {
        var arr = collections[i];
        if (!Array.isArray(arr)) {
            throw new Error("collection_".concat(i + 1, " is not an array"));
        }
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (!Number.isInteger(value)) {
                throw new Error("collection_".concat(i + 1, " contains non-integer value: ").concat(value));
            }
        }
    }
    // reverst collection 2 
    var reversed_collection_2 = __spreadArray([], collection_2, true).reverse();
    var result = __spreadArray(__spreadArray(__spreadArray([], collection_1, true), reversed_collection_2, true), collection_3, true);
    // sorted array by ascending
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                var temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}
