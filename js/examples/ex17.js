import { createBlockForCode } from '../helper'

// ---------------------------------- insertion sort  O(n^2) ------------------------
export const main = () => {
    const insertionSort = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            const el = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > el) {
                arr[j + 1] = arr[j];
                j --;
            }
            arr[j + 1] = el;
        }
        return arr;
    }

    console.log('insertion sort', insertionSort([0,5,7,2,9,1,5,6]));

    createBlockForCode(`
        const insertionSort = (arr) => {
            for (let i = 1; i < arr.length; i++) {
                const el = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > el) {
                    arr[j + 1] = arr[j];
                    j --;
                }
                arr[j + 1] = el;
            }
            return arr;
        }
    
        console.log('insertion sort', insertionSort([0,5,7,2,9,1,5,6]));    // [0,1,2,5,5,6,9]
    `);
}
