import { createBlockForCode } from '../helper'

// ---------------------------------- bubble sort  O(n^2) ------------------------
export const main = () => {
    const code = `
        const bubbleSort = (arr) => {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }
    
        console.log('bubble sort', bubbleSort([5,2,9,1,5,6]));      // [1,2,5,5,6,9]
    `;
    eval(code);
    createBlockForCode(code);
}
