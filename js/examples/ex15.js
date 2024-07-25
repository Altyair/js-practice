import { createBlockForCode } from '../helper'

// ---------------------------------- quick sort ------------------------
export const main = () => {
    const code = `
        const quickSort = (array) => {
            if (array.length <= 1) return array;
    
            const pivotIndex = Math.floor(array.length / 2);
            const pivot = array[pivotIndex];
            const less = [];
            const greater = [];
            for (let i = 0; i < array.length; i++) {
                if (i === pivotIndex) continue;
                array[i] < pivot ? less.push(array[i]) : greater.push(array[i]);
            }
            return [...quickSort(less), pivot, ...quickSort(greater)];
        }
    
        console.log('quick sort', quickSort([0,5,2,9,1,5,6]));      // [0,1,2,5,5,6,9]
    `;
    eval(code);
    createBlockForCode(code);
}
