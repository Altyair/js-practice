import { createBlockForCode } from '../helper'

// ---------------------------------- merging arrays of objects with sorting  O(n) ------------------------
export const main = () => {
    const code = `
        const getDecisions1 = [
            { id: 1, result: 'approved' },
            { id: 3, result: 'waiting' },
            { id: 15, result: 'approved' },
            { id: 20, result: 'approved' },
            { id: 26, result: 'waiting' },
            { id: 30, result: 'approved' },
        ];
        const getDecisions2 = [
            { id: 2, result: 'approved' },
            { id: 4, result: 'waiting' },
            { id: 14, result: 'approved' },
            { id: 16, result: 'approved' },
            { id: 23, result: 'waiting' },
            { id: 32, result: 'approved' },
        ];
    
        const getLastDecision = (decisions1, decisions2, k) => {
            let d1 = decisions1.length - 1,
                d2 = decisions2.length - 1,
                result = [];
    
            while (result.length < Math.min(k, Math.max(decisions1.length, decisions2.length)) && (d1 >= 0 || d2 >= 0)) {
                if (d1 < 0 || (d2 >= 0 && decisions2[d2].id > decisions1[d1].id)) {
                    result.push(decisions2[d2]);
                    d2--;
                    continue;
                }
                if (d2 < 0 || (d1 >= 0 && decisions1[d1].id > decisions2[d2].id)) {
                    result.push(decisions1[d1]);
                    d1--;
                }
            }
    
            return result;
        };
    
        console.log(getLastDecision(getDecisions1, getDecisions2, 5));
        /* result: [
            { id: 32, result: 'approved' },
            { id: 30, result: 'approved' },
            { id: 26, result: 'waiting' },
            { id: 23, result: 'waiting' },
            { id: 20, result: 'approved' },
        ] */
    `;

    eval(code);
    createBlockForCode(code);
}
