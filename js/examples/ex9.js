import { createBlockForCode } from '../helper'

// ---------------------------------- brick wall -------------------------------
export const main = () => {
    const code = `
        const wall = [[1,2,2,1], [3,1,2], [1,3,2], [2,4], [3,1,2], [1,3,1,1]];
    
        const leastBricks = (wall) => {
            let map = {};
            let max = 0;
    
            wall.forEach(row => {
                let sum = 0;
                for (let n = 0; n < row.length - 1; n ++) {
                    sum += row[n];
                    map[sum] = map[sum] ? map[sum] + 1 : 1;
                    max = Math.max(map[sum], max);
                }
            })
    
            console.log(map);
            return wall.length - max;
        }
    
        console.log(leastBricks(wall));     // 2
    `;
    eval(code);
    createBlockForCode(code);
}
