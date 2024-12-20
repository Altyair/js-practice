import { createBlockForCode } from '../helper'

// ---------------------------------- currying ------------------------
export const main = () => {
    const code = `
        // ------------------------------------ forEach polyfill
        Array.prototype.customForEach = function (cbFunc, thisArg = undefined) {
            if (typeof cbFunc !== 'function') {
                throw new Error(cbFunc + 'is not a function');
            }
        
            for (let i = 0; i < this.length; i++) {
                cbFunc.call(thisArg, this[i], i, this);
            }
        }
        let myArr = [1,2,3];
        myArr.customForEach((element, idx, arr) => arr[idx] = element + 1);
        
        console.log(myArr);
        
        
        // -------------------------- map polyfill
        Array.prototype.customMap = function (cbFunc, thisArg = undefined) {
            if (typeof cbFunc !== 'function') {
                throw new Error(cbFunc + 'is not a function');
            }
    
            let innerArr = [];
    
            for (let i = 0; i < this.length; i++) {
                innerArr[i] = cbFunc.call(thisArg, this[i], i, this);
            }
    
            return innerArr;
        }
        let myArr1 = [1,2,3];
        const newArr= myArr1.customMap((element, idx, arr) => element * 10);
    
        console.log(newArr);
    `;

    eval(code);
    createBlockForCode(code);
}
