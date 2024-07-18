import { createBlockForCode } from '../helper'

// ---------------------------------- recursive binary search ------------------------
export const main = () => {
    const recursiveBinarySearch = (array, item, start, end) => {
        const middle = Math.floor((start + end)/2);
        if (item === array[middle]) return middle;
        if (start === end) return -1;
        if (item < array[middle]) {
            return recursiveBinarySearch(array, item, start, middle - 1);
        } else {
            return recursiveBinarySearch(array, item, middle + 1, end);
        }
    }

    console.log('recursive binary search', recursiveBinarySearch([-5,-2,0,1,5,8,10,25,45], 25, 0, 9));
    console.log('recursive binary search', recursiveBinarySearch([-5,-2,0,1,5,8,10,25,45], -200, 0, 9));

    createBlockForCode(`
        const recursiveBinarySearch = (array, item, start, end) => {
            const middle = Math.floor((start + end)/2);
            if (item === array[middle]) return middle;
            if (start === end) return -1;
            if (item < array[middle]) {
                return recursiveBinarySearch(array, item, start, middle - 1);
            } else {
                return recursiveBinarySearch(array, item, middle + 1, end);
            }
        }
    
        console.log('recursive binary search', recursiveBinarySearch([-5,-2,0,1,5,8,10,25,45], 25, 0, 9));      // 7
        console.log('recursive binary search', recursiveBinarySearch([-5,-2,0,1,5,8,10,25,45], -200, 0, 9));    // -1
    `);
}
