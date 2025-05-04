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
    if (!Array.isArray(collection_1) || !Array.isArray(collection_2) || !Array.isArray(collection_3)) {
        throw new Error("All inputs must be arrays of integers.");
    }
    var all = __spreadArray(__spreadArray(__spreadArray([], collection_1, true), collection_2, true), collection_3, true);
    if (!all.every(Number.isInteger)) {
        throw new Error("All input values must be integers.");
    }
    var reversed_c2 = __spreadArray([], collection_2, true).reverse();
    var merged_c1_c2 = mergeTwoSorted(collection_1, reversed_c2);
    return mergeTwoSorted(merged_c1_c2, collection_3);
}
function mergeTwoSorted(a, b) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            i++;
        }
        else {
            result.push(b[j]);
            j++;
        }
    }
    while (i < a.length)
        result.push(a[i++]);
    while (j < b.length)
        result.push(b[j++]);
    return result;
}
