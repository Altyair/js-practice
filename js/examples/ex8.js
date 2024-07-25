import { createBlockForCode } from '../helper'

// ---------------------------------- check the validity of the brackets O(n) ------------------------
export const main = () => {
    const code = `
        const isClosedBracket = (ch) => {
            return [')', '}', ']'].indexOf(ch) > -1;
        }
    
        const isValid = (s) => {
            const stack = [];
            const brackets = {
                ')': '(',
                '}': '{',
                ']': '['
            };
    
            for (let i = 0; i < s.length; i++) {
                const current = s[i];
    
                if (isClosedBracket(current)) {
                    if (brackets[current] !== stack.pop()) return false;
                } else {
                    stack.push(current);
                }
            }
    
            return !stack.length;
        }
    
        const s1 = '()';
        const s2 = '()[]{}';
        const s3 = '(]';
        const s4 = '{[]}';
        const s5 = '([)]';
        const s6 = '{[[]{}]}()()';

        console.log(isValid(s1));   // true
        console.log(isValid(s2));   // true
        console.log(isValid(s3));   // false
        console.log(isValid(s4));   // true
        console.log(isValid(s5));   // false
        console.log(isValid(s6));   // true
    `;
    eval(code);
    createBlockForCode(code);
}
