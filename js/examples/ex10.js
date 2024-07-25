import { createBlockForCode } from '../helper'
import { binarySearch } from './ex5';

// ----------------------------------  -------------------------------
export const main = () => {
    const code = `
        // время: O(n*n) память: O(1)
        const findPairs = (arr, k) => {
            const result = [];
            for (let i = 0; i < arr.length; i ++) {
                for (let j = i + 1; j < arr.length; j ++) {
                    if (arr[i] + arr[j] === k) {
                        result.push([arr[i], arr[j]]);
                    }
                }
            }
            return result;
        }
    
        // время: O(n) память: O(n)
        const quickFindPairs = (arr, k) => {
            const result = [];
            let set = new Set();
    
            for (let i = 0; i < arr.length; i ++) {
                const numberToFind = k - arr[i];
    
                if (set.has(numberToFind)) {
                    result.push([arr[i], numberToFind]);
                } else {
                    set.add(arr[i]);
                }
            }
            return result;
        }
    
        // время: O(n log n) память: O(1)
        const quickFindPairsThroughBinarySearch = (arr, k) => {
            const result = [];
            for (let i = 0; i < arr.length; i ++) {
                const numberToFind = k - arr[i];
                let l = 0, r = arr.length - 1;
                while (l < r) {
                    const mid = Math.floor((r - l) / 2) + l;
                    if (numberToFind === arr[mid]) {
                        return [numberToFind, arr[i]];
                    }
                    (k < mid) ? r = mid - 1: l = mid + 1;
                }
            }
            return result;
        }
    
        // время: O(n log n память: O(1)
        const bestAlgFindPairs = (arr, k) => {
            let l = 0, r = arr.length - 1;
    
            while (l < r) {
                const sum = arr[l] + arr[r];
    
                if (sum === k) {
                    return [arr[l], arr[r]];
                }
    
                if (sum < k) {
                    l++;
                } else {
                    r--;
                }
            }
    
            return [];
        }
    
        console.log(findPairs([-3, 0, 1, 4, 5], 5));                                 // [[0,5],[1,4]]
        console.log(quickFindPairs([-3, 0, 1, 4, 5], 5));                            // [[0,5],[1,4]]
        console.log(quickFindPairsThroughBinarySearch([-7, 0, 2, 3, 6, 8, 10], 10)); // [[0,10],[2,8]]
        console.log(bestAlgFindPairs([-3, 0, 1, 4, 7], 5));                          // [1,4]
    `;
    eval(code);
    createBlockForCode(code);
}
