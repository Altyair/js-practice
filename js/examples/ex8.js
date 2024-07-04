import { createBlockForCode } from '../helper'

// ---------------------------------- check the validity of the brackets ------------------------
export const main = () => {
    const s1 = '()';
    const s2 = '()[]{}';
    const s3 = '(]';
    const s4 = '{[]}';
    const s5 = '([)]';
    const s6 = '{[[]{}]}()()';

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

    console.log(isValid(s1));
    console.log(isValid(s2));
    console.log(isValid(s3));
    console.log(isValid(s4));
    console.log(isValid(s5));
    console.log(isValid(s6));

    createBlockForCode(`
        const s1 = '()';            // true
        const s2 = '()[]{}';        // true
        const s3 = '(]';            // false
        const s4 = '{[]}';          // true
        const s5 = '([)]';          // false
        const s6 = '{[[]{}]}()()';  // true
    
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
    
        console.log(isValid(s1));
        console.log(isValid(s2));
        console.log(isValid(s3));
        console.log(isValid(s4));
        console.log(isValid(s5));
        console.log(isValid(s6));
    `);
}
