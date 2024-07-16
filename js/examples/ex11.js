import { Subject } from "rxjs";

// ----------------------------------  -------------------------------
export const main = () => {
    // ---------------------------------------- binary search -------------------
    const binarySearch = (arr, k) => {
        let l = 0, r = arr.length - 1;

        while(l < r) {
            const mid = Math.floor((r - l) / 2) + l;
            console.log(mid);

            if (arr[mid] === k) {
                return mid;
            }
            if (k < arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return -1;
    }

    console.log('binarySearch', binarySearch([-10, -3, 1, 3, 7, 5, 10, 15], 5));

    // ------------------------------------- rxjs ----------------------------
    const obs = new Subject();
    const obj = {
        next: (res) => {
            console.log('Subject rxj: ',res);
        },
        error: (err) => {
            console.log(err);
        },
    };
    obs.subscribe(obj)
    obs.next(3);

    // ------------------------------------- find pairs of numbers whose sum is equal to k -----------
    const findPair1 = (arr, k) => {
        for (let i = 0; i < arr.length; i ++) {
            for (let j = i + 1; j < arr.length; j ++) {
                if (arr[i] + arr[j] === k) {
                    return [arr[i], arr[j]];
                }
            }
        }
        return [];
    }

    const findPair2 = (arr, k) => {
        const set = new Set();
        for (let i = 0; i < arr.length; i ++) {
            const numberToFind = k - arr[i];
            if (set.has(numberToFind)) {
                return [arr[i], numberToFind];
            } else {
                set.add(arr[i]);
            }
        }
        return [];
    }

    const findPair3 = (arr, k) => {
        for (let i = 0; i < arr.length; i ++) {
            const numberToFind = k - arr[i];

            let l = 0, r = arr.length - 1;
            while (l < r) {
                const mid = Math.floor((r - l) / 2) + l;
                if (numberToFind === arr[mid]) {
                    return [numberToFind, arr[i]];
                }
                (k < mid) ? r = mid: l = mid + 1;
            }
        }
        return [];
    }

    const findPair4 = (arr, k) => {
        let l = 0, r = arr.length - 1;
        while (l < r) {
            const sum = arr[l] + arr[r];
            if (sum === k) {
                return [arr[l], arr[r]];
            }
            (sum < k) ? l ++ : r --;
        }
        return [];
    }

    console.log('find pairs of numbers whose sum is equal to k v1', findPair1([1, 3, 5, 7], 12));
    console.log('find pairs of numbers whose sum is equal to k v2', findPair2([1, 3, 5, 7], 12));
    console.log('find pairs of numbers whose sum is equal to k v3', findPair3([1, 3, 5, 7, 12, 17], 12));
    console.log('find pairs of numbers whose sum is equal to k v4', findPair4([1, 3, 5, 7, 12, 17], 12));

    // ------------------------------------- remove duplicates in array of number -----------
    const removeDuplicates = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    }
    console.log('remove duplicates in array of number', removeDuplicates([1, 1, 3, 3, 5, 7, 7, 12, 12, 12, 17]));

    // ------------------------------------- bubble sort  O(n^2) -----------
    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
                }
            }
        }
        return arr;
    }

    console.log('bubble sort', bubbleSort([5,2,9,1,5,6])); // [2,5,1,5,6,9], [2,1,5,5,6,9], [1,2,5,5,6,9],

    // ---------------------------------- sorting by choice  O(n^2) -------------
    const sortingByChoice = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
        }
        return arr;
    }

    console.log('sorting by choice', sortingByChoice([5,2,9,1,5,6]));

    //--------------------------------- check the validity of the brackets ---------------
    const checkValidityBrackets = (brackets) => {
        const bracketsMap = { ')': '(', '}': '{', ']': '[' };
        const isClosed = (bracket) => [')','}',']'].indexOf(bracket) !== -1;
        const bracketsArr = brackets.split('');
        for (let i = 0; i < bracketsArr.length; i++) {
            if (isClosed(bracketsArr[i])) {
                if (bracketsMap[bracketsArr[i]] === bracketsArr[i - 1]) {
                    bracketsArr.splice(i, 1);
                    bracketsArr.splice(i - 1, 1);
                    i-=2;
                } else {
                    return false;
                }
            }
        }
        return bracketsArr.length <= 0;
    };

    console.log('сheck the validity of the brackets', checkValidityBrackets(')'));      // false
    console.log('сheck the validity of the brackets', checkValidityBrackets('()'));     // true
    console.log('сheck the validity of the brackets', checkValidityBrackets('({})'));   // true
    console.log('сheck the validity of the brackets', checkValidityBrackets('({[})'));  // false
    console.log('сheck the validity of the brackets', checkValidityBrackets('({}'));    // false

    //--------------------------------- max area ---------------
    const calcMaxArea = (arr) => {
        let l = 0, r = arr.length - 1;
        let max = 0;
        while (l < r) {
            const area = Math.min(arr[l], arr[r]) * (r - l);
            max = Math.max(max, area);
            (arr[l] < arr[r]) ? l++ : r--;
        }
        return max;
    }

    console.log('max area', calcMaxArea([1,8,6,2,5,4,3,8,7]));      // 49

    //--------------------------------- bricks ---------------
    const wall = [[1,2,2,1], [3,1,2], [1,3,2], [2,4], [3,1,2], [1,3,1,1]];
    const leastBricks = (wall) => {
        const map = {};
        let max = 0;

        for (let i = 0; i < wall.length; i++) {
            let sum = 0;

            for (let j = 0; j < wall[i].length - 1; j++) {
                sum += wall[i][j];
                map.hasOwnProperty(sum) ? map[sum] += 1 : map[sum] = 1;
                max = Math.max(max, map[sum]);
            }

        }
        console.log(map, max);
        return wall.length - max;
    }
    console.log(leastBricks(wall));
}
