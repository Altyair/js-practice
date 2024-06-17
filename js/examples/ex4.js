import { createBlockForCode } from '../helper'

// ---------------------------------- calculate max area
export const main = () => {
    let input1 = [1,8,6,2,5,4,3,8,7];    // 49
    let input2 = [1,1];                  // 1
    let input3 = [4,3,2,1,4];            // 16
    let input4 = [1,2,1];                // 2
    let input5 = [0,0,0,500];            // 0

    const maxArea = (height) => {
        let maxArea = 0;
        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            let currentVolume = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, currentVolume);

            if (height[left] < height[right]) {
                left ++;
            } else {
                right --;
            }
        }

        return maxArea;
    }

    console.log(maxArea(input1));
    console.log(maxArea(input2));
    console.log(maxArea(input3));
    console.log(maxArea(input4));
    console.log(maxArea(input5));

    createBlockForCode(`
        let input1 = [1,8,6,2,5,4,3,8,7];    // 49
        let input2 = [1,1];                  // 1
        let input3 = [4,3,2,1,4];            // 16
        let input4 = [1,2,1];                // 2
        let input5 = [0,0,0,500];            // 0
    
        const maxArea = (height) => {
            let maxArea = 0;
            let left = 0;
            let right = height.length - 1;
    
            while (left < right) {
                let currentVolume = Math.min(height[left], height[right]) * (right - left);
                maxArea = Math.max(maxArea, currentVolume);
    
                if (height[left] < height[right]) {
                    left ++;
                } else {
                    right --;
                }
            }
    
            return maxArea;
        }
    
        console.log(maxArea(input1));   // 49
        console.log(maxArea(input2));   // 1
        console.log(maxArea(input3));   // 16
        console.log(maxArea(input4));   // 2
        console.log(maxArea(input5));   // 0
    `);
}
