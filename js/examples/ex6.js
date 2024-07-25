import { createBlockForCode } from '../helper'

// ---------------------------------- palindrome number ------------------------
export const main = () => {
    const code = `
        const input1 = 121;
        const input2 = -121;
        const input3 = 10;
   
        const isPalindromeNumber = (x) => {
            if (x < 0) return false;
            if (x % 10 === 0) return false;
            if (x < 10) return true;
    
            let rev = 0;
            while (x > rev) {
                rev *= 10;
                rev += x % 10;
                x = Math.trunc(x / 10);
            }
            return x === rev || x === Math.trunc(rev / 10);
        }
    
        console.log(isPalindromeNumber(input1));    // true
        console.log(isPalindromeNumber(input2));    // false
        console.log(isPalindromeNumber(input3));    // false
    `;
    eval(code);
    createBlockForCode(code);
}
