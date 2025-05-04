export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    if (!Array.isArray(collection_1) || !Array.isArray(collection_2) || !Array.isArray(collection_3)) {
        throw new Error("All inputs must be arrays of integers.");
      }
      
    const all = [...collection_1, ...collection_2, ...collection_3];
    if (!all.every(Number.isInteger)) {
      throw new Error("All input values must be integers.");
    }
  
    const reversed_c2 = [...collection_2].reverse();
  
    const merged_c1_c2 = mergeTwoSorted(collection_1, reversed_c2);
  
    return mergeTwoSorted(merged_c1_c2, collection_3);
  }
  
  function mergeTwoSorted(a: number[], b: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
  
    while (i < a.length && j < b.length) {
      if (a[i] <= b[j]) {
        result.push(a[i]);
        i++;
      } else {
        result.push(b[j]);
        j++;
      }
    }
  
    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);
  
    return result;
  }
  