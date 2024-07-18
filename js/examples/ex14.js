import { createBlockForCode } from '../helper'

// ---------------------------------- bubble sort  O(n^2) ------------------------
export const main = () => {
    const sortingByChoice = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
        return arr;
    }

    console.log('sorting by choice', sortingByChoice([0,5,2,9,1,5,6]));

    createBlockForCode(`
        const sortingByChoice = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                let min = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                }
                [arr[i], arr[min]] = [arr[min], arr[i]];
            }
            return arr;
        }
    
        console.log('sorting by choice', sortingByChoice([0,5,2,9,1,5,6]));     // [0,1,2,5,5,6,9]
    `);
}
