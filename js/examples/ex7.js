import { createBlockForCode } from '../helper'

// ---------------------------------- remove duplicates in array of number ------------------------
export const main = () => {
    const arr1 = [1, 1, 2];
    const arr2 = [1,1,1,1,2,2,2,2,3,3,3,3,3];

    const removeDuplicates = (nums) => {
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] === nums[i - 1]) {
                nums.splice(0, 1);
                i --;
            }
        }

        return nums.length;
    }

    console.log(removeDuplicates(arr1));
    console.log(arr1);

    console.log(removeDuplicates(arr2));
    console.log(arr2);

    createBlockForCode(`
        const arr1 = [1, 1, 2];
        const arr2 = [1,1,1,1,2,2,2,2,3,3,3,3,3];
    
        const removeDuplicates = (nums) => {
            for (let i = 0; i < nums.length; i ++) {
                if (nums[i] === nums[i - 1]) {
                    nums.splice(0, 1);
                    i --;
                }
            }
    
            return nums.length;
        }
    
        console.log(removeDuplicates(arr1));     // 2
        console.log(removeDuplicates(arr1));     // [1, 2]
        
        console.log(removeDuplicates(arr2));     // 3
        console.log(removeDuplicates(arr2));     // [1, 2, 3]
    `);
}
