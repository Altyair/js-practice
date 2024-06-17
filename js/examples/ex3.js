import { createBlockForCode } from '../helper'

// ---------------------------------- count of vowels in a line
export const main = () => {
    const findVowels = (str) => {
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        for (let char of str.toLowerCase()) {
            if (vowels.includes(char)) {
                count ++;
            }
        }
        return count;
    }

    const findVowels2 = (str) => {
        const matched = str.match(/[aeiou]/gi);
        return matched ? matched.length : 0;
    }

    console.log(findVowels('hello'));
    console.log(findVowels('why'));
    console.log(findVowels2('table'));

    createBlockForCode(`
        const findVowels = (str) => {
            let count = 0;
            const vowels = ['a', 'e', 'i', 'o', 'u'];
    
            for (let char of str.toLowerCase()) {
                if (vowels.includes(char)) {
                    count ++;
                }
            }
            return count;
        }
    
        const findVowels2 = (str) => {
            const matched = str.match(/[aeiou]/gi);
            return matched ? matched.length : 0;
        }
    
        console.log(findVowels('hello'));   // 2
        console.log(findVowels('why'));     // 0
        console.log(findVowels2('table'));  // 2
    `);
}
