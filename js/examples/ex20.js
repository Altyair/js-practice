import { createBlockForCode } from '../helper'

// ---------------------------------- currying ------------------------
export const main = () => {
    const code = `
        function taskChain(task1, task2, task3) {
            console.log(task1, task2, task3);
        }
    
        function curry (fn) {
            return function curried(...args) {
                if (args.length >= fn.length) {
                    return fn.apply(this, args);
                }
                return curried.bind(this, ...args);
            }
        }
    
        const curriedTaskChain = curry(taskChain);
    
        curriedTaskChain()()()(1,2,3);  // 1,2,3
        curriedTaskChain()(1)()(2)(3);  // 1,2,3
        curriedTaskChain(1,2,3);        // 1,2,3
        curriedTaskChain(1)(2)()(7);    // 1,2,7
        curriedTaskChain(1)()(2,3);     // 1,2,3
    `;

    eval(code);
    createBlockForCode(code);
}
