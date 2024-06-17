import { createBlockForCode } from '../helper'

// ---------------------------------- merge intervals
export const main = () => {
    let input1 = [[1,3], [2,6], [8,10], [15,18]];                                   // [[1,6], [8,10], [15,18]]
    let input2 = [[1,4], [4,5]];                                                    // [[1,5]]
    let input3 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]];                     // [[1,4],[5,10],[11,12]]
    let input4 = [[1,4]];                                                           // [[1,4]]

    const mergeIntervals = (intervals) => {
        if (intervals.length < 2) {
            return intervals;
        }

        intervals.sort((a, b) => a[0] - b[0]);

        let result = [intervals[0]];

        for (let interval of intervals) {
            let recent = result[result.length - 1];

            if (recent[1] >= interval[0]) {
                recent[1] = Math.max(recent[1], interval[1]);
            } else {
                result.push(interval);
            }
        }

        return result;
    }

    console.log(mergeIntervals(input1));
    console.log(mergeIntervals(input2));
    console.log(mergeIntervals(input3));
    console.log(mergeIntervals(input4));

    createBlockForCode(`
        let input1 = [[1,3], [2,6], [8,10], [15,18]];                                   // [[1,6], [8,10], [15,18]]
        let input2 = [[1,4], [4,5]];                                                    // [[1,5]]
        let input3 = [[11,12], [2,3], [5,7], [1,4], [8,10], [6,8]];                     // [[1,4],[5,10],[11,12]]
        let input4 = [[1,4]];                                                           // [[1,4]]
    
        const mergeIntervals = (intervals) => {
            if (intervals.length < 2) {
                return intervals;
            }
    
            intervals.sort((a, b) => a[0] - b[0]);
    
            let result = [intervals[0]];
    
            for (let interval of intervals) {
                let recent = result[result.length - 1];
    
                if (recent[1] >= interval[0]) {
                    recent[1] = Math.max(recent[1], interval[1]);
                } else {
                    result.push(interval);
                }
            }
    
            return result;
        }
    
        console.log(mergeIntervals(input1));
        console.log(mergeIntervals(input2));
        console.log(mergeIntervals(input3));
        console.log(mergeIntervals(input4));
    `);
}
