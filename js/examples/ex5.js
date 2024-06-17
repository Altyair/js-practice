import { createBlockForCode } from '../helper'

// ---------------------------------- binary search in a sorted shifted array
export const main = (arr, el) => {
    let input1 = [4,5,6,7,8,1,2,3];

    const binarySearch = (arr, el) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === el) {
                return mid;
            }
            if (arr[left] <= arr[mid]) {
                if (arr[left] <= el && el <= arr[mid]) {
                    right = mid -1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (arr[mid] <= el && el <= arr[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
    console.log(binarySearch(input1, 2));

    createBlockForCode(`
        let input1 = [4,5,6,7,8,1,2,3];
        
        const binarySearch = (arr, el) => {
            let left = 0;
            let right = arr.length - 1;
        
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
        
                if (arr[mid] === el) {
                    return mid;
                }
                if (arr[left] <= arr[mid]) {
                    if (arr[left] <= el && el <= arr[mid]) {
                        right = mid -1;
                    } else {
                        left = mid + 1;
                    }
                } else {
                    if (arr[mid] <= el && el <= arr[right]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
            }
            return -1;
        }
        
        // find index for 2
        console.log(binarySearch(input1, 2));   // 6
            </code>
        </pre>
    `);
}
