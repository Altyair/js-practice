import {max, Subject} from "rxjs";
import { cl } from "../helper";

// ----------------------------------  -------------------------------
export const main = () => {
    // ---------------------------------------- binary search -------------------
    const binarySearch = (arr, k) => {
        let l = 0, r = arr.length - 1;

        while (l < r) {
            const mid = Math.floor((r - l) / 2) + l;
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

    // console.log('binarySearch', binarySearch([-10, -3, 1, 3, 7, 5, 10, 15], 5));

    // ------------------------------------- rxjs ----------------------------
    const obs = new Subject();
    const obj = {
        next: (res) => {
            console.log('Subject rxj: ', res);
        },
        error: (err) => {
            console.log(err);
        },
    };
    // obs.subscribe(obj)
    // obs.next(3);

    // ------------------------------------- find pairs of numbers whose sum is equal to k -----------
    const findPair1 = (arr, k) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === k) {
                    return [arr[i], arr[j]];
                }
            }
        }
        return [];
    }

    const findPair2 = (arr, k) => {
        const set = new Set();
        for (let i = 0; i < arr.length; i++) {
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
        for (let i = 0; i < arr.length; i++) {
            const numberToFind = k - arr[i];

            let l = 0, r = arr.length - 1;
            while (l < r) {
                const mid = Math.floor((r - l) / 2) + l;
                if (numberToFind === arr[mid]) {
                    return [numberToFind, arr[i]];
                }
                (k < mid) ? r = mid - 1 : l = mid + 1;
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
            (sum < k) ? l++ : r--;
        }
        return [];
    }

    // console.log('find pairs of numbers whose sum is equal to k v1', findPair1([1, 3, 5, 7], 12));
    // console.log('find pairs of numbers whose sum is equal to k v2', findPair2([1, 3, 5, 7], 12));
    // console.log('find pairs of numbers whose sum is equal to k v3', findPair3([1, 3, 5, 7, 12, 17], 12));
    // console.log('find pairs of numbers whose sum is equal to k v4', findPair4([1, 3, 5, 7, 12, 17], 12));

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
    // console.log('remove duplicates in array of number', removeDuplicates([1, 1, 3, 3, 5, 7, 7, 12, 12, 12, 17]));

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

    // console.log('bubble sort', bubbleSort([5, 2, 9, 1, 5, 6])); // [2,5,1,5,6,9], [2,1,5,5,6,9], [1,2,5,5,6,9],

    // ---------------------------------- sorting by choice  O(n^2) -------------
    const sortingByChoice = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
        }
        return arr;
    }

    // console.log('sorting by choice', sortingByChoice([0, 5, 2, 9, 1, 5, 6]));

    //--------------------------------- check the validity of the brackets ---------------
    const checkValidityBrackets = (brackets) => {
        const bracketsMap = {')': '(', '}': '{', ']': '['};
        const isClosed = (bracket) => [')', '}', ']'].indexOf(bracket) !== -1;
        const bracketsArr = brackets.split('');
        for (let i = 0; i < bracketsArr.length; i++) {
            if (isClosed(bracketsArr[i])) {
                if (bracketsMap[bracketsArr[i]] === bracketsArr[i - 1]) {
                    bracketsArr.splice(i, 1);
                    bracketsArr.splice(i - 1, 1);
                    i -= 2;
                } else {
                    return false;
                }
            }
        }
        return bracketsArr.length <= 0;
    };

    // console.log('сheck the validity of the brackets', checkValidityBrackets(')'));      // false
    // console.log('сheck the validity of the brackets', checkValidityBrackets('()'));     // true
    // console.log('сheck the validity of the brackets', checkValidityBrackets('({})'));   // true
    // console.log('сheck the validity of the brackets', checkValidityBrackets('({[})'));  // false
    // console.log('сheck the validity of the brackets', checkValidityBrackets('({}'));    // false

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

    // console.log('max area', calcMaxArea([1, 8, 6, 2, 5, 4, 3, 8, 7]));      // 49

    //--------------------------------- bricks ---------------
    const wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]];
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
    // console.log(leastBricks(wall));

    //--------------------------------- task  --------------------------------------
    const getDecisions1 = [
        {id: 1, result: 'approved'},
        {id: 3, result: 'waiting'},
        {id: 15, result: 'approved'},
        {id: 20, result: 'approved'},
        {id: 26, result: 'waiting'},
        {id: 30, result: 'approved'},
    ];
    const getDecisions2 = [
        {id: 2, result: 'approved'},
        {id: 4, result: 'waiting'},
        {id: 14, result: 'approved'},
        {id: 16, result: 'approved'},
        {id: 23, result: 'waiting'},
        {id: 32, result: 'approved'},
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

    // console.log(getLastDecision(getDecisions1, getDecisions2, 5));

    //--------------------------------- has pair with sum  --------------------------------------
    const hasPairWithSum = (arr, sum) => {
        const data = new Set();
        for (let i = 0; i < arr.length; i++) {
            const numberToFind = sum - arr[i];
            if (data.has(numberToFind)) return true;
            data.add(arr[i]);
        }
        return false;
    }

    const hasPairWithSum1 = (arr, sum) => {
        for (let i = 0; i < arr.length; i++) {
            const numberToFind = sum - arr[i];
            let l = 0, r = arr.length;
            while (l < r) {
                const mid = Math.floor((l + r) / 2);
                if (arr[mid] === numberToFind) return true;
                numberToFind < mid ? r = mid - 1 : l = mid + 1;
            }
        }
        return false;
    }

    const hasPairWithSum2 = (arr, sum) => {
        let l = 0, r = arr.length - 1;
        while (l < r) {
            const sumFact = arr[l] + arr[r];
            if (sumFact === sum) return true;
            sumFact > sum ? r-- : l++;
        }
        return false;
    }

    // console.log(hasPairWithSum([3, 4, 7, 10], 8));      // false
    // console.log(hasPairWithSum([1, 4, 4, 9], 8));       // true
    // console.log(hasPairWithSum([-8, 1, 4, 9, 16], 8));   // true
    //
    // console.log(hasPairWithSum1([3, 4, 7, 10], 8));      // false
    // console.log(hasPairWithSum1([1, 4, 4, 9], 8));       // true
    // console.log(hasPairWithSum1([-8, 1, 4, 9, 16], 8));   // true
    //
    // console.log(hasPairWithSum2([3, 4, 7, 10], 8));      // false
    // console.log(hasPairWithSum2([1, 4, 4, 9], 8));       // true
    // console.log(hasPairWithSum2([-8, 1, 4, 9, 16], 8));   // true

    //--------------------------------- функция автокаррирования  --------------------------------------
    function taskChain(task1, task2, task3) {
        console.log(task1, task2, task3);
    }

    function curry(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn.apply(this, args);
            }
            return curried.bind(this, ...args);
        }
    }

    // const curriedTaskChain = curry(taskChain);
    //
    // curriedTaskChain()()()(1, 2, 3);
    // curriedTaskChain()(1)()(2)(3);
    // curriedTaskChain(1, 2, 3);
    // curriedTaskChain(1)(2)()(7);
    // curriedTaskChain(1)()(2, 3);

    //--------------------------------- рекурсия  --------------------------------------
    // 0! = 1
    // n! = n * (n-1)!
    // 2! = 1*2
    // 3! = 1*2*3
    // factorial(3): 3 * factorial(2) = 2 * 1
    // factorial(2): 2 * factorial(1) = 1
    // factorial(1): 1 * factorial(0) = 1
    // factorial(0): 1
    const factorial = (n) => {
        return (n === 0) ? 1 : n * factorial(n - 1);
    }
    // console.log(factorial(3));

    // -------------------- fibonacci O(2^n)
    // fibonacci(0) = 0
    // fibonacci(1) = 1
    // fibonacci(n) = fibonacci(n-1) + factorial(n-2), n > 1
    const fibonacci = (n) => {
        if (n <= 1) return n;
        return fibonacci(n - 1) + factorial(n - 2);
    }
    // console.log(fibonacci(3));

    // -------------------- cycle for
    const cycle = (i, arr) => {
        console.log(`el${i}`, arr[i]);
        if (i === arr.length - 1) return;
        return cycle(i + 1, arr);
    }
    const arr = [5, 0, -1, 10, -20, 55, 7];
    // cycle(0, [5, 0, -1, 10, -20, 55, 7]);

    // ------------------ palindrome
    const palindrome = (str) => {
        const str1 = str.toLowerCase();

        return str === str1.split('').reverse().join('');
    }

    // console.log(palindrome('racecar'));
    // console.log(palindrome('car'));

    // -------------------- fizzBuzz
    const fizzBuzz = (n) => {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('fizzbuzz');
            } else if (i % 3 === 0) {
                console.log('fizz');
            } else if (i % 5 === 0) {
                console.log('buzz');
            } else {
                console.log(i);
            }
        }
    }
    // fizzBuzz(5);

    // -------------------- fizzBuzz
    const anagram = (strA, strB) => {
        const buildCharObject = str => {
            const charObj = {};
            for (let char of str.replace(/[^\w]/g).toLowerCase()) {
                charObj[char] = charObj[char] + 1 || 1
            }
            return charObj;
        }

        const aCharObject = buildCharObject(strA);
        const bCharObject = buildCharObject(strB);

        if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
            return false;
        }

        for (let char in aCharObject) {
            if (aCharObject[char] !== bCharObject[char]) {
                return false;
            }
        }

        return true;
    }
    // anagram('finder', 'Friend'); // true
    // anagram('hello', 'bye');     // false

    // ----------------------------- findVowels
    const findVowels = str => {
        let count = 0
        const vowels = ['a', 'e', 'i', 'o', 'u']
        for (let char of str.toLowerCase()) {
            if (vowels.includes(char)) {
                count++
            }
        }
        return count;
    }

    const findVowels1 = str => {
        const matched = str.match(/[aeiou]/gi)
        return matched ? matches.length : 0
    }

    //-------------------------- fibonacci
    const fibonacci1 = num => {
        const result = [0, 1];

        for (let i = 2; i <= num; i++) {
            const prevNum1 = result[i - 1];
            const prevNum2 = result[i - 2];
            result.push(prevNum1 + prevNum2);
        }
        return result[num];
    }

    const fibonacci2 = num => {
        if (num === 0 || num === 1) {
            return num;
        }
        return fibonacci(num - 2) + fibonacci(num - 1);
    }

    // ------------- функция, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
    const showElIndexByDelay = () => {
        const arr = [10, 12, 15, 21];
        for (var i = 0; i < arr.length; i++) {
            // pass in the variable i so that each function
            setTimeout(function (i_local) {
                return function () {
                    console.log('The index of this number is: ' + i_local);
                }
            }(i), 3000);
        }
    }
    const showElIndexByDelay1 = () => {
        const arr = [10, 12, 15, 21];
        for (let i = 0; i < arr.length; i++) {
            // using the ES6 let syntax, it creates a new binding
            // every single time the function is called
            // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
            setTimeout(function () {
                console.log('The index of this number is: ' + i);
            }, 3000);
        }
    }
    // showElIndexByDelay();

    //---------------------- curry
    function sum(a, b, c) {
        return a + b + c;
    }

    function curry1(callback) {
        return function curried(...args) {
            if (args.length >= callback.length) {
                return callback.apply(this, args);
            }

            return curried.bind(this, ...args);

            // return function test (...newArgs) {
            //     return curried.apply(this, args.concat(newArgs))
            // }
        }
    }

    // const curriedSum = curry1(sum);
    // console.log(curriedSum(2)(1)(3));

    //-------------------- palindrome number
    const input1 = 1221;
    const input2 = -121;
    const input3 = 10;

    const isPalindromeNumber = function (x) {
        if (x < 0 || x % 10 === 0) return false;
        if (x < 10) return true;

        let rev = 0;

        while (x > rev) {
            rev *= 10;
            rev += x % 10;
            x = Math.trunc(x / 10);
            console.log(x, rev);
        }
        return x === rev || x === Math.trunc(rev / 10);
    }

    // console.log(isPalindromeNumber(input1));
    // console.log(isPalindromeNumber(input2));
    // console.log(isPalindromeNumber(input3));

    //------------------------ string palindrome

    const longestPalindrome = function (x) {
        let start, end = 0;

    }

    // console.log(longestPalindrome('babad'));
    // console.log(longestPalindrome('cbdd'));
    // console.log(longestPalindrome('mississipi'));
    // console.log(longestPalindrome('ac'));

    //------------------------- checkIsNan
    function checkIsNan(value) {
        return value !== value
    }

    //----------------------- isArray
    function isArray(value) {
        return Object.prototype.toString.call(value) === '[object Array]'
    }

    //----------------------- isNull
    function isNull(value) {
        return value === null
    }

    //--------------------- palindrome
    const palindrom = (str) => {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    }

    // console.log(palindrom('aba'));
    // console.log(palindrom('abadabac'));

    //-------------------- math operations throw words
    const one = (fn) => fn ? fn(1) : 1;
    const two = (fn) => fn ? fn(2) : 2;
    const five = (fn) => fn ? fn(5) : 5;
    const seven = (fn) => fn ? fn(7) : 7;

    const plus = (x) => (y) => y + x;
    const minus = (x) => (y) => y - x;

    // console.log(five(plus(one())));     // 6
    // console.log(seven(minus(two())));   // 5

    //--------------------------
    function sum1(n) {
        console.log(n);
        return function (a) {
            return sum1(a + n);
        }
    }

    // console.log(sum1(5)(4)(11));

    //----------------------- counter --------
    const counter = () => {
        let clousureVar = 0;

        return {
            set: (n) => clousureVar += n,
            get: () => clousureVar
        }
    }
    const c = counter();
    c.set(35);
    c.set(7);
    // console.log(c.get());

    //------------------------ memoize
    function memoize(func) {
        let cache = {};

        return (...args) => {
            const key = JSON.stringify(args);
            return cache[key] || (cache[key] = func(...args));
        }
    }

    let callCount = 0;
    const memoizedFn = memoize(function (a, b) {
        callCount += 1;
        return a + b;
    })
    memoizedFn(2, 3)
    // console.log(memoizedFn(2, 3));
    // console.log(callCount);

    //---------------------------------- divide text into chunks
    function divideTextIntoChunks(text) {
        const CHUNK_SIZE = 30,
            words = text.split(' '),
            chunks = [];

        let currentChunk = '';
        words.forEach((_, i) => {
            const word = words[i];

            if (currentChunk.length + word.length >= CHUNK_SIZE) {
                chunks.push(currentChunk.trim());
                currentChunk = '';
            }
            currentChunk += `${word} `;
        });

        if (currentChunk.length > 0) {
            chunks.push(currentChunk.trim());
        }

        return chunks;
    }

    const str = `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`;
    const res = divideTextIntoChunks(str);
    // console.log(res);

    // ------------------------------------ forEach pollyFill
    Array.prototype.customForEach = function (cbFunc, thisArg = undefined) {
        if (typeof cbFunc !== 'function') {
            throw new Error(`${cbFunc} is not a function`);
        }

        for (let i = 0; i < this.length; i++) {
            cbFunc.call(thisArg, this[i], i, this);
        }
    }
    let myArr = [1, 2, 3];
    myArr.customForEach((element, idx, arr) => arr[idx] = element + 1);

    // console.log(myArr);

    // -------------------------- map pollyFill
    Array.prototype.customMap = function (cbFunc, thisArg = undefined) {
        if (typeof cbFunc !== 'function') {
            throw new Error(`${cbFunc} is not a function`);
        }

        let innerArr = [];

        for (let i = 0; i < this.length; i++) {
            innerArr[i] = cbFunc.call(thisArg, this[i], i, this);
        }

        return innerArr;
    }
    let myArr1 = [1, 2, 3];
    const newArr = myArr1.customMap((element, idx, arr) => element * 10);

    // console.log(newArr);

    //-------------------------- test1
    function descendingOrder(n) {
        return Number(String(n).split('').sort((a, b) => b - a).join(''));
    }

    // console.log(descendingOrder(0), 0);
    // console.log(descendingOrder(1), 1);
    // console.log(descendingOrder(111), 111);
    // console.log(descendingOrder(15), 51);
    // console.log(descendingOrder(1021), 2110);
    // console.log(descendingOrder(123456789), 987654321);

    //-------------------------- test2
    function sumTwoSmallestNumbers(numbers) {
        let min1 = Math.min(numbers[0], numbers[1]),
            min2 = Math.max(numbers[0], numbers[1]);

        for (let i = 2; i < numbers.length; i++) {
            if (i % 2 === 0 && numbers[i] < min2) {
                min2 = numbers[i];
            }
            if (i % 3 === 0 && numbers[i] < min1) {
                min1 = numbers[i];
                continue;
            }
            if (numbers[i] < min2) {
                min2 = numbers[i];
            }
        }
        return min1 + min2;
    }

    // console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
    // console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
    // console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
    // console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
    // console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

    //------------------ test3
    function printerError(s) {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
        let countSymbols = 0;
        for (let i = 0; i < s.length; i++) {
            if (!alphabet.includes(s.charAt(i))) {
                countSymbols += 1;
            }
        }
        return `${countSymbols}/${s.length}`;
    }

    // console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

    //----------------- sum elements of array
    const arr2 = [1, 2, 3, 4, 5];
    // console.log(eval(arr2.join('+')));
    // console.log(Math.max.apply(null, arr2));

    // isSimilar(arr1, arr2)
    function isSimilar(arr1, arr2) {
        const sortedArr1 = arr1.slice().sort((a, b) => a - b).join(',');
        const sortedArr2 = arr2.slice().sort((a, b) => a - b).join(',');

        return sortedArr1 === sortedArr2;
    }

    function isSimilar1(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        const countMap = {};

        for (const num of arr1) {
            countMap[num] = (countMap[num] || 0) + 1;
        }

        for (const num of arr2) {
            if (!countMap[num]) {
                return false;
            }
            countMap[num] -= 1;
        }
        return Object.values(countMap).every(num => num !== 0);
    }

    // --------------------------------- retryFetch
    function retryFetch(url, {retryCount, timeout}) {
        let lastError = null;

        const fetchWithTimeout = () => {
            return new Promise((resolve, reject) => {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    controller.abort();
                    reject(new Error('Timeout: fetch aborted'))
                }, timeout);
                fetch(url, {signal: controller.signal})
                    .then(response => {
                        clearTimeout(timeoutId);
                        if (response.ok) {
                            resolve(response.json())
                        } else {
                            reject(new Error('Non-200 response'))
                        }
                    })
                    .catch(error => {
                        clearTimeout(timeoutId);
                        reject(error)
                    })
            });
        }

        const attempt = (triesLeft) => {
            return fetchWithTimeout()
                .then(response => response)
                .catch(error => {
                    lastError = error;
                    if (triesLeft > 0) {
                        return attempt(triesLeft - 1);
                    }
                })
        }

        return attempt(retryCount);
    }

    // --------------------------------- bankomat
    let limits = {
        5000: 5,
        1000: 5,
        500: 5,
        100: 5,
        23: 13,
        543: 1,
        3: 5
    };

    function atm(sum, limits) {
        let denominations = Object.keys(limits).map(Number).sort((a, b) => b - a);
        let result = {};

        for (let denom of denominations) {
            let count = Math.min(Math.floor(sum / denom), limits[denom]);

            if (count > 0) {
                result[denom] = count;
                sum -= count * denom;
            }
        }

        if (sum > 0) {
            console.log('не хватает средств');
            return;
        }

        Object.keys(result).forEach(key => {
            limits[key] -= result[key];
        });

        return result;
    }

    // --------------------------------- tickets
    const tickets = [
        {from: 'Пятигорск', to: 'Краснодар'},
        {from: 'Краснодар', to: 'Москва'},
        {from: 'Москва', to: 'Калининград'},
        {from: 'Калининград', to: 'Челябинск'},
        {from: 'Челябинск', to: 'Астана'},
    ];

    function sortTickets(tickets) {
        const routeMap = new Map();
        const seenDestination = new Set();

        tickets.forEach(ticket => {
            routeMap.set(ticket.from, ticket.to);
            seenDestination.add(ticket.to);
        })
        let start = null;
        for (const ticket of tickets) {
            if (!seenDestination.has(ticket.from)) {
                start = ticket.from;
            }
        }

        const sortedTickets = [];
        let current = start;
        while (current) {
            const next = routeMap.get(current);
            sortedTickets.push({from: current, to: next});
            current = next;
        }

        return sortedTickets;
    }

    // --------------------------------- tickets
    /**
     *     /api/items
     *
     *     result {
     *         code: 6,
     *         items: {
     *             { id: 15, name: 'foo' },
     *             { id: 45, name: 'bar' },
     *         }
     *     }
     *
     */

    // function getItems(url) {
    //    return api.get(url)
    // }
    // const url = `/api/items`;
    // const RenderItems = () => {
    //     const [items, setItems] = useState([]);
    //     const [isLoading, setIsLoading] = useState(true);
    //     const [error, setError] = useState(null);
    //
    //     useEffect(() => {
    //         getItems(url).then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network failed');
    //             }
    //
    //             return response.json();
    //         })
    //         .then(data => {
    //             setItems(data.result.items);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //             setIsLoading(false);
    //         })
    //     }, []);
    //
    //     if (isLoading) {
    //         return <div>Loading..</div>
    //     }
    //
    //     if (error) {
    //         return <div>Error..</div>
    //     }
    //
    //     return (
    //         <div>
    //             <h1>Items</h1>
    //             {
    //                 items.length > 0 ? (
    //                     <ul>
    //                         { items.map(item => {
    //                             <li key={item.id}> { item.name } </li>
    //                         }) }
    //                     </ul>
    //                 ) : (
    //                     <div> No items found </div>
    //                 )
    //             }
    //         </div>
    //     )
    // }

    // --------------------------------- primiseAll
    function promiseAll(promises) {
        return new Promise((resolve, reject) => {
            let result = [];
            let finishedPromises = 0;

            if (promises.length === 0) {
                resolve(result);
            }

            promises.forEach((promise, index) => {
                promise.then(value => {
                    result[index] = value;
                    finishedPromises += 1;

                    if (finishedPromises === promises.length) {
                        resolve(result)
                    }
                })
            }).catch(reject)
        });
    }

    // ---------------------------- two sum
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    var twoSum = function (nums, target) {
        const data = new Map();

        let remainder = null;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            remainder = target - num;

            if (data.has(remainder)) {
                const numDataIndex = data.get(remainder);
                return [Math.min(i, numDataIndex), Math.max(i, numDataIndex)];
            }
            data.set(num, i);
        }
        return null;
    };

    // ------------------------------- sleep
    /**
     * @param {number} millis
     * @return {Promise}
     */
    async function sleep(millis) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), millis)
        })
            .catch(error => error);
    }

    /**
     * let t = Date.now()
     * sleep(100).then(() => console.log(Date.now() - t)) // 100
     */

    // ----------------------------- array reduce
    /**
     * @param {number[]} nums
     * @param {Function} fn
     * @param {number} init
     * @return {number}
     */
    var reduce = function (nums, fn, init) {
        let accum = init;
        for (let i = 0; i < nums.length; i++) {
            accum = fn(accum, nums[i]);
        }
        return accum;
    };

    /**
     * @param {number[]} nums
     * @param {Function} fn
     * @param {number} init
     * @return {number}
     */
    var reduce1 = function (nums, fn, init) {
        function f(accum, i) {
            const newAccum = fn(accum, nums[i]);
            return (i === nums.length - 1) ? newAccum : f(newAccum, i += 1);
        }

        return nums.length ? f(init, 0) : init;
    };

    // --------------------- reverse words in phrase
    function reverseWords(str) {
        return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    }

    // console.log(reverseWords(`Let's take LeetCode contest`));

    // ---------------------- currencies
    function currencies() {
        const input = [
            ['usd', 'buy', 10000],
            ['usd', 'sell', 5000],
            ['gbp', 'buy', 9000],
            ['eur', 'sell', 7000],
            ['uah', 'buy', 10000],
            ['usd', 'sell', 25000],
        ];

        const output = {
            usd: [10000, 30000],
            gbp: [9000, 0],
            eur: [0, 7000],
            uah: [10000, 0],
        }

        let result = {};

        input.forEach((item) => {
            let [currency, type, amount] = item;

            if (!result[currency]) {
                result[currency] = [0, 0];
            }

            result[currency][type === 'buy' ? 0 : 1] += amount;
        })
        console.log(result);

        // through reduce
        let result2 = input.reduce((acc, curr) => {
            acc[curr[0]] = acc[curr[0]] || [0, 0];
            acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
            return acc;
        }, {});
        console.log(result2);
    }

    // currencies();

    // ---------------------- islands.  O(m*n)
    function numIslands() {
        let grid1 = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ];

        let grid2 = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ];

        const proc = (dataGrid) => {
            let counter = 0;
            let rowsL = dataGrid.length;
            let colsL = dataGrid[0].length;
            if (rowsL === 0) return 0;

            function markNeighbour(grid, r, c) {
                grid[r][c] = '6';

                if (grid[r][c - 1] && grid[r][c - 1] === '1') {
                    markNeighbour(grid, r, c - 1);
                }
                if (grid[r][c + 1] && grid[r][c + 1] === '1') {
                    markNeighbour(grid, r, c + 1);
                }
                if (grid?.[r - 1]?.[c] === '1') {
                    markNeighbour(grid, r - 1, c);
                }
                if (grid?.[r + 1]?.[c] === '1') {
                    markNeighbour(grid, r + 1, c);
                }
            }

            for (let r = 0; r < rowsL; r++) {
                for (let c = 0; c < colsL; c++) {
                    if (dataGrid[r][c] === '1') {
                        counter++;
                        markNeighbour(dataGrid, r, c);
                    }
                }
            }

            return counter;
        }
        console.log(proc(grid1));
        console.log(proc(grid2));
        console.log(proc([['1', '0', '1', '0', '0']]));
    }

    // numIslands();

    // ------------------- best time to buy
    let prices1 = [7, 1, 5, 3, 6, 4];
    let prices2 = [7, 6, 4, 3, 1];

    let maxProfit = function (prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const current = prices[i];

            if (current < minPrice) {
                minPrice = current;
            }

            if (current - minPrice > maxProfit) {
                maxProfit = current - minPrice;
            }
        }

        return maxProfit;
    }
    // console.log(maxProfit(prices1));
    // console.log(maxProfit(prices2));

    // ------------------------------ deepEqual
    // console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2}));                                 // true
    // console.log(deepEqual({a: 1, b: 2}, [1, 2,]));                                        // false
    // console.log(deepEqual({a: 1, b: [1, 2, 3]}, {a: 1}));                     // true
    // console.log(deepEqual({a: 1, b: [1, 2, {f: 50}, {g: 10}]}, {a: 1, b: [1, 2, {f: 50}, {g: 10}]}));    // false

    function isObjectAndNotArray(obj) {
        return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
    }

    function isObject(obj) {
        return typeof obj === 'object' && obj !== null;
    }

    function deepEqual(obj1, obj2) {
        try {
            if (isObjectAndNotArray(obj1) && !isObjectAndNotArray(obj2) ||
                !isObjectAndNotArray(obj1) && isObjectAndNotArray(obj2) ||
                isObjectAndNotArray(obj1) && isObjectAndNotArray(obj2) && Object.keys(obj1).length !== Object.keys(obj2).length ||
                Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) {
                return false;
            }

            for (let key in obj1) {
                if (Array.isArray(obj1[key])) {
                    if (!Array.isArray(obj2[key]) || obj1[key].length !== obj2[key].length) {
                        return false;
                    }
                    const result = deepEqual(obj1[key], obj2[key]);
                    if (!result) {
                        return false;
                    }
                    continue;
                }
                if (isObjectAndNotArray(obj1[key])) {
                    if (!Object.prototype.hasOwnProperty.call(obj2, key) || !isObjectAndNotArray(obj2[key]) || Object.keys(obj1[key]).length !== Object.keys(obj2[key]).length) {
                        return false;
                    }
                    const result = deepEqual(obj1[key], obj2[key]);
                    if (!result) {
                        return false;
                    }
                    continue;
                }
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(deepEqual1({a: 1, b: 2}, {a: 1, b: 2}));                                 // true
    // console.log(deepEqual1({a: 1, b: 2}, [1, 2,]));                                        // false
    // console.log(deepEqual1({a: 1, b: [1, 2, 3]}, {a: 1}));                     // true
    // console.log(deepEqual1({a: 1, b: [1, 2, {f: 50}, {g: 10}]}, {a: 1, b: [1, 2, {f: 50}, {g: 10}]}));    // false

    function deepEqual1(obj1, obj2) {
        try {
            const obj1Keys = Object.keys(obj1);
            const obj2Keys = Object.keys(obj2);

            if (obj1Keys.length !== obj2Keys.length) {
                return false;
            }

            for (let i = 0; i < obj1Keys.length; i++) {
                const key = obj1Keys[i];

                if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
                    return false;
                }

                if (isObject(obj1[key]) && isObject(obj2[key])) {
                    const result = deepEqual(obj1[key], obj2[key]);
                    if (!result) {
                        return false;
                    }
                    continue;
                }
                if (obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    // ------------------------- merge intervals
    // console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
    // console.log(mergeIntervals([[1,4],[4,5]]));                 // [[1,5]]
    // console.log(mergeIntervals([[1,3],[2,6],[5,9],[8,10],[15,18],[16,20]]));                 // [[1,10], [15,20]]
    // console.log(mergeIntervals([[1,4],[0,4]]));                 // [[1,5]]
    // console.log(mergeIntervals([[1, 4], [0, 0]]));                 // [[1,5]]
    // console.log(mergeIntervals([[1, 4], [0, 1]]));                 // [[1,5]]


    function mergeIntervals(intervals) {
        // ------------- core
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const lastEl = result[result.length - 1];
            const nextEl = intervals[i];

            if (lastEl[1] >= nextEl[0]) {
                lastEl[0] = Math.min(lastEl[0], nextEl[0]);
                lastEl[1] = Math.max(lastEl[1], nextEl[1]);
                continue;
            }
            result.push(nextEl);
        }
        return result;
    }

    function mergeIntervals1(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [];

        // ---------------- core
        let prevInterval = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const curInterval = intervals[i];
            const localRes = getOverlapResult(prevInterval, curInterval);

            if (localRes !== null) {
                prevInterval = localRes;
            } else {
                res.push(prevInterval);
                prevInterval = curInterval;
            }
        }
        res.push(prevInterval);

        // ------------- core
        function getOverlapResult(interval1, interval2) {
            if (interval1[1] >= interval2[0]) {
                return [
                    Math.min(interval1[0], interval2[0]),
                    Math.max(interval1[1], interval2[1]),
                ];
            }
            return null;
        }

        return result;
    }

    //--------------------------- isPalindromeFast
    // console.log(isPalindromeFast('aba'));
    // console.log(isPalindromeFast('abab'));

    function isPalindromeFast(str) {
        const mid = str.length / 2;
        for (let i = 0; i < mid; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    //----------------------------- algs and structures

    //-------------- binary search
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // console.log('binarySearch2', binarySearch2(array, 5));
    // console.log('binarySearch2', binarySearch2(array, 11));

    function binarySearch2(array, num) {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            let mid = Math.floor((right - left) / 2) + left;
            if (array[mid] === num) {
                return mid;
            }
            num < array[mid] ? right = mid - 1 : left = mid + 1;
        }
        return -1;
    }

    // console.log('binarySearch2', binarySearch2Recursion(array, 5, 0, array.length - 1));
    // console.log('binarySearch2', binarySearch2Recursion(array, 11, 0, array.length - 1));

    function binarySearch2Recursion(array, num, left, right) {
        if (left > right) return -1;
        const mid = Math.floor((right - left) / 2) + left;
        if (array[mid] === num) {
            return mid;
        }
        num < array[mid] ? right = mid - 1 : left = mid + 1;
        return binarySearch2Recursion(array, num, left, right);
    }

    // ---------------- sort by choice
    // console.log('sortByChoice2', sortByChoice2([-77, 100, 2, 0, 10, -7]));

    function sortByChoice2(array) {
        const findMin = (array) => {
            let index = 0;
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                    index = i;
                }
            }
            return {min, index};
        }
        const arrayLength = array.length;
        for (let i = 0; i < arrayLength; i++) {
            const minData = findMin(array.slice(i + 1, arrayLength));
            if (minData.min < array[i]) {
                [array[i], array[minData.index + i + 1]] = [array[minData.index + i + 1], array[i]];
            }
        }
        return array;
    }

    //----------------- quick sort
    // console.log('quickSort', quickSort([-77, 100, 2, 0, 10, -7]));

    function quickSort(array) {
        try {
            if (array.length <= 1) {
                return array;
            }
            let left = [], right = [];
            const mid = Math.floor(array.length / 2);

            for (let i = 0; i < array.length; i++) {
                if (i === mid) continue;
                if (array[i] < array[mid]) {
                    left.push(array[i]);
                } else {
                    right.push(array[i]);
                }
            }
            return [...quickSort(left), array[mid], ...quickSort(right)];
        } catch (e) {
            console.log(e);
        }
    }

    // ----------------------- graph (поиск в ширину)
    const graph = {};
    graph.a = ['b', 'c'];
    graph.b = ['f'];
    graph.c = ['d', 'e'];
    graph.d = ['f'];
    graph.e = ['f'];
    graph.f = ['g'];

    function breadthSearch(graph, start, end) {
        let queue = [];
        queue.push(start);              // ['a']
        while (queue.length > 0) {
            // 1. 'a'
            // 2. 'b'
            // 3. 'c'
            const current = queue.shift();
            if (!graph[current]) {
                graph[current] = [];
            }
            // 3. ['b', 'c'] includes 'e'
            if (graph[current].includes(end)) {
                return true;
            } else {
                // 1. ['b', 'c']
                // 2. ['c', 'f']
                queue = [...queue, ...graph[current]]
            }
        }
        return false;
    }

    // console.log(breadthSearch(graph, 'a', 'e'));

    // ----------------------- матрица смежности
    const matrix = [
        [0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    // ----------------------- алгоритм дейкстры
    const graphD = {};
    graphD.a = {b: 2, c: 1};
    graphD.b = {f: 7};
    graphD.c = {d: 5, e: 2};
    graphD.d = {f: 2};
    graphD.e = {f: 1};
    graphD.f = {g: 1}
    graphD.g = {};

    function shortPath(graph, start, end) {
        const costs = {};
        const processed = [];
        let neighbors = {};

        // { "b":2, "c":1, "d":10000000, "e":10000000, "f":10000000, "g":10000000 }
        Object.keys(graph).forEach((node) => {
            if (node !== start) {
                let value = graph[start][node];
                costs[node] = value || 10000000;
            }
        });
        // c
        let node = findNodeLowestCost(costs, processed);
        while (node) {
            const cost = costs[node];
            neighbors = graph[node];
            Object.keys(neighbors).forEach((neighbor) => {
                let newCost = cost + neighbors[neighbor];
                if (newCost < costs[neighbor]) {
                    costs[neighbor] = newCost;
                }
            });
            processed.push(node);
            node = findNodeLowestCost(costs, processed); // 1. e, 2. f, 3.g
        }
        return costs;
    }

    // 1. { "b":2, "c":1, "d":10000000, "e":10000000, "f":10000000, "g":10000000 }, []
    // 2. { "b":2, "c":1, "d":6, "e":3, "f":10000000, "g":10000000 }, ['b','c']
    // 3. { "b":2, "c":1, "d":6, "e":3, "f":4, "g":10000000 }, ['b','c','d','e']
    // 4. { "b":2, "c":1, "d":6, "e":3, "f":4, "g":5 }, ['b','c','d','e',f']
    function findNodeLowestCost(costs, processed) {
        let lowestCost = 10000000;
        let lowestNode;
        Object.keys(costs).forEach((node) => {
            let cost = costs[node];

            if (cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost;
                lowestNode = node;
            }
        });
        return lowestNode;
    }

    // { "b":2, "c":1, "d":6, "e":3, "f":4, "g":5 }
    // console.log(shortPath(graphD, 'a', 'g'));

    // ----------------------- binary tree
    const tree = [
        {value: 5, items: [{value: 5, items: [{value: 5}, {value: 5}]}]},
        {value: 6, items: [{value: 5}, {value: 5}, {value: 5}]},
        {value: 1, items: [{value: 5}, {value: 5}]},
        {value: 8, items: [{value: 5, items: [{value: 5}]}]},
    ];

    // console.log(binaryTreeRec(tree));

    function binaryTreeRec(tree) {
        let sum = 0;
        for (let i = 0; i < tree.length; i++) {
            sum += tree[i].value;

            if (tree[i].items) {
                sum += binaryTreeRec(tree[i].items);
            }
        }
        return sum;
    }

    // console.log('binaryTreeIter', binaryTreeIter(tree));

    function binaryTreeIter(tree) {
        if (!tree.length) {
            return 0;
        }
        let sum = 0;
        let stack = [];
        tree.forEach((node) => stack.push(node));
        while (stack.length) {
            const node = stack.pop();
            sum += node.value;

            if (node.items) {
                node.items.forEach(child => stack.push(child))
            }
        }
        return sum;
    }

    // --------------------------------- cash
    function cashFunction(fn) {
        const cash = {};
        return function (n) {
            if (cash[n]) {
                console.log('Взято из кэша', cash[n]);
                return cash[n]
            }
            let result = fn(n);
            console.log('Посчитала функция = ', result);
            cash[n] = result;
            return result;
        }
    }

    function factorial1(n) {
        let result = 1;
        while (n != 1) {
            result += n;
            n -= 1;
        }
        return result;
    }

    const cashFactorial = cashFunction(factorial1);
    // cashFactorial(5);
    // cashFactorial(4);
    // cashFactorial(5);

    //-----------------------
    class LinkedList {
        constructor() {
            this.size = 0;
            this.root = null;
        }

        add(value) {
            if (this.size === 0) {
                this.root = new Node(value);
                this.size += 1;
                return true;
            }
            let node = this.root;
            while (node.next) {
                node = node.next;
            }
            let newNode = new Node(value);
            node.next = newNode;
            this.size += 1;
        }

        getSize() {
            return this.size;
        }

        print() {
            let result = [];
            let node = this.root;
            while (node) {
                result.push(node.value);
                node = node.next;
            }
            console.log(result);
        }
    }

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    const list = new LinkedList();
    list.add(5);
    list.add(4);
    list.add(3);
    list.add(2);
    list.add(1);

    // list.print();

    // -------------------------- BinaryTree
    class BinaryTree {
        constructor() {
            this.root = null;
        }

        add(value) {
            if (!this.root) {
                this.root = new TreeNode(value);
            } else {
                let node = this.root;
                let newNode = new TreeNode(value);
                while (node) {
                    if (value > node.value) {
                        if (!node.right) {
                            break;
                        }
                        node = node.right;
                    } else {
                        if (!node.left) {
                            break;
                        }
                        node = node.left;
                    }
                }
                if (value > node.value) {
                    node.right = newNode;
                } else {
                    node.left = newNode;
                }
            }
        }

        print(root = this.root) {
            if (!root) {
                return true;
            }
            console.log(root.value);
            this.print(root.left);
            this.print(root.right);
        }
    }

    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    const tree1 = new BinaryTree()
    tree1.add(5);
    tree1.add(2);
    tree1.add(6);
    tree1.add(2);
    tree1.add(1);
    // tree1.print();

    //------------------------------------ Palindrome Linked List
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    var isPalindrome = function (head) {
        let vals = [];

        let currentNode = head;

        while (currentNode !== null) {
            vals.push(currentNode.val);
            currentNode = currentNode.next;
        }

        let front = 0;
        let back = vals.length - 1;
        while (front < back) {
            if (vals[front] !== vals[back]) {
                return false;
            }
            front++;
            back--;
        }
        return true;
    };

    // ------------- https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/
    /**
     * @param {string} preorder
     * @return {boolean}
     */
    var isValidSerialization = function (preorder) {
        let slots = 1;
        let nodes = preorder.split(',');

        for (let node of nodes) {
            slots--;
            if (slots < 0) {
                return false;
            }
            if (node !== '#') {
                slots += 2;
            }
        }

        return slots === 0;
    };

    //--------- https://leetcode.com/problems/contains-duplicate/
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    var containsDuplicate = function (nums) {
        return new Set(nums).size !== nums.length;
    };


    //---------------- https://leetcode.com/problems/shortest-palindrome/
    function shortestPalindrome(s) {
        const n = s.length;
        const rev = s.split('').reverse().join('');
        for (let i = 0; i < n; i++) {
            if (s.substring(0, n - i) === rev.substring(i)) {
                return rev.substring(0, i) + s;
            }
        }
        return "";
    }

    // console.log(shortestPalindrome("aacecaaafaf"));
    // console.log(shortestPalindrome("ba"));
    // console.log(shortestPalindrome("bab"));
    // console.log(shortestPalindrome("daacecaaa"));
    //
    // console.log(shortestPalindrome1("aacecaaa"));
    // console.log(shortestPalindrome1("daacecaaa"));
    // console.log(shortestPalindrome1("bab"));
    // console.log(shortestPalindrome1("ba"));

    function shortestPalindrome1(s) {
        for (let i = 0; i < s.length; i++) {
            const s1 = s.substring(0, s.length - i);
            const s2 = s1.split('').reverse().join('');
            if (s1 === s2) {
                return s.substring(s.length - i).split('').reverse().join('') + s;
            }
        }
        return '';
    }

    // ----------------- https://leetcode.com/problems/missing-number/
    /**
     * @param {number[]} nums
     * @return {number}
     */
    var missingNumber = function (nums) {
        const max = Math.max(...nums);
        const min = Math.min(...nums);

        const data = new Set();
        nums.forEach(num => {
            if (data.has(num)) {
                data.delete(num);
                return;
            }
            const incNum = num + 1;
            const decNum = num - 1;
            if (incNum !== max + 1) {
                data.add(incNum);
            }
            if (decNum !== min - 1) {
                data.add(decNum);
            }
        });
        return Array.from(data)[0] || max + 1;
    };

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var missingNumber1 = function (nums) {
        let sum = 0;
        let sum1 = 0;
        for (let i = 0; i <= nums.length; i++) {
            sum += i;
            if (nums[i]) {
                sum1 += nums[i];
            }
        }
        return sum - sum1;
    };

    // ----------------------------------------- isStrobogrammatic
    function isStrobogrammatic(num) {
        let rotated = "";
        for (let i = num.length - 1; i >= 0; i--) {
            const c = num[i];
            if (c === '0' || c === '1' || c === '8') {
                rotated += c;
            } else if (c === '6') {
                rotated += '9';
            } else if (c === '9') {
                rotated += '6';
            } else {
                return false;
            }
        }
        return num === rotated;
    }

    // console.log(isStrobogrammatic('11'));
    // console.log(isStrobogrammatic('69'));
    // console.log(isStrobogrammatic('65'));

    // ---------------- Shortest Word Distance II
    function shortestWordDistanceII(dictionary, word1, word2) {
        let count = 0,
            start = false;
        for (let i = 0; i < dictionary.length; i++) {
            if (dictionary[i] === word2) {
                break;
            }
            start && count++;
            if (dictionary[i] === word1) {
                start = true;
            }
        }
        return count;
    }

    // console.log(shortestWordDistanceII(["practice", "makes", "coding", "perfect", "makes"], "makes", "coding"));

    // ------------------- isValidBrackets -------------
    function isValidBrackets(s) {
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        const stack = [];
        for (let char of s) {
            if (map.hasOwnProperty(char)) {
                if (stack.pop() !== map[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return !stack.length;
    }

    // console.log(isValidBrackets('[]'));
    // console.log(isValidBrackets('[)'));
    // console.log(isValidBrackets('[([])]'));
    // console.log(isValidBrackets('[([{])]'));

    // ----------------------------------------- sellByMaxPrice -------------
    function sellByMaxPrice(prices) {
        let min = prices[0];
        let maxProfit = 0;

        // core
        for (let price of prices) {
            if (price < min) {
                min = price;
                continue;
            }
            maxProfit = Math.max(maxProfit, price - min);
        }
        return maxProfit;
    }

    // console.log(sellByMaxPrice([10, 1, 5, 6, 7, 1]));
    // console.log(sellByMaxPrice([10, 8, 7, 5, 2]));

    // ----------------------------------------- containerForWater -------------
    function getMaxVolumeOfContainerForWater(container) {
        let maxVolume = 0,
            left = 0,
            right = container.length - 1;

        while (left < right) {
            const currentVolume = (right - left) * Math.min(container[left], container[right]);
            maxVolume = Math.max(maxVolume, currentVolume)

            if (container[left] <= container[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxVolume;
    }

    // cl(getMaxVolumeOfContainerForWater([1, 7, 2, 5, 4, 7, 3, 6]));

    // ----------------------------------------- containerForWater -------------
    function getMostLongSequence(array) {
        if (!array.length) {
            return 0;
        }
        let longestStreak = 0;
        const numsSet = new Set(array);
        for (let num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numsSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }

    // cl(getMostLongSequence([2, 20, 4, 10, 3, 4, 5]));
    // cl(getMostLongSequence([0, 3, 2, 5, 4, 6, 1, 1]));

    // ----------------------------------------- productExeptSelf -------------
    function kMostFrequent(nums, k) {
        const hashMap = new Map();
        for (let num of nums) {
            hashMap.has(num) ? hashMap.set(num, hashMap.get(num) + 1) : hashMap.set(num, 1);
        }
        const hashMapSort = new Map([...hashMap.entries()].sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]));
        const heap = [];
        hashMapSort.forEach((value, key, map) => {
            if (heap.length < k) {
                heap.unshift(key);
            }
        });

        cl(heap);
    }

    // kMostFrequent([1, 2, 2, 2, 3, 3, 3, 3, 4,4,4,4], 3);

    //------------------------ the most long word by string
    function mostLongWord(s) {
        let maxWordLength = 0,
            currentWordLength = 0;
        for (let char of s) {
            if (char !== ' ') {
                currentWordLength += 1;
                continue;
            }
            maxWordLength = Math.max(maxWordLength, currentWordLength);
            currentWordLength = 0;
        }
        maxWordLength = Math.max(maxWordLength, currentWordLength);
        return maxWordLength;
    }
    // console.log(mostLongWord(' abc a qwerty '));

    function mostLongWord1(s) {
        let maxWordLength = 0;
        // core
        s.split(' ').forEach(word => {
            maxWordLength = Math.max(maxWordLength, word.length);
        });
        return maxWordLength;
    }
    // console.log(mostLongWord1(' abc a qwerty '));


    //Definition for singly-linked list.
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    class LinkedList1 {
        constructor() {
            this.size = 0;
            this.root = null;
        }

        add(value) {
            if (this.size === 0) {
                this.root = new Node(value);
                this.size += 1;
                return true;
            }
            let node = this.root;
            while (node.next) {
                node = node.next;
            }
            let newNode = new Node(value);
            node.next = newNode;
            this.size += 1;
        }

        createFromArray(array) {
            array.forEach(value => {
                this.add(value);
            })
        }

        getSize() {
            return this.size;
        }

        deleteNode(node) {
            node.value = node.next.value
            node.next = node.next.next
        }

        print() {
            let result = [];
            let node = this.root;
            while (node) {
                result.push(node.value);
                node = node.next;
            }
            console.log(result);
        }

        geList() {
            let list = [];
            let node = this.root;
            while (node) {
                list.push(node);
                node = node.next;
            }
            return list;
        }
    }

    function createAndDeleteNodeFromList(array, val) {
        const linkedList1 = new LinkedList1();
        linkedList1.createFromArray(array);
        const list = linkedList1.geList();
        linkedList1.deleteNode(list[1]);

        return list;
    }
    // console.log(createAndDeleteNodeFromList([4,5,1,9], 5));

    //------------------------- getSumByNestedList
    function getSumByNestedList(array, depth= 1) {
        let sum = 0;

        array.forEach(item => {
            sum += Array.isArray(item) ? getSumByNestedList(item, depth + 1) : item * depth;
        });
        return sum;
    }
    // cl(getSumByNestedList([1,[4,[6]]]));

    //------------------------------- medium: beautifulArrangement
    // https://leetcode.com/problems/beautiful-arrangement/description/
    function beautifulArrangement(N) {
        let count = 0;
        const nums = Array.from({ length: N }, (_, i) => i + 1);    //  [1,2]

        function permute(l) {
            if (l === N) {
                count++;
                return;
            }

        }

        // permute(0);
        return count;
    }
    // console.log(beautifulArrangement(2));


    //----------------------------- https://leetcode.com/problems/trapping-rain-water/
    /**
     * @param {number[]} height
     * @return {number}
     */
    const trap = function(height) {
        // core
        const getVolume = (h) => {
            let [volume, currentVolume] = [0, 0];
            let [startCurrentLevel, startHighLevel]  = [false, false];

            for (let i = 0; i < height.length; i++) {
                if (!startHighLevel && height[i] > h) {
                    volume += getVolume(h + 1);
                    startHighLevel = true;
                }

                if (height[i] >= h) {
                    if (i === height.length - 1 || height[i + 1] < h) {
                        startCurrentLevel = true;
                        volume += currentVolume;
                        currentVolume = 0;
                    }
                } else if (startCurrentLevel) {
                    currentVolume += 1;
                }
            }
            return volume;
        }
        return getVolume(1);
    };
    // console.log(trap([0,1,0,1,1,0,1,0,0,1,0,1]));
    // console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
    // console.log(trap([4,2,0,3,2,5]));
    // console.log(trap([5,2,1,2,1,5]));
    // console.log((trap([0,5,6,4,6,1,0,0,2,7])));

    const trap1 = function(height) {
        const maxHeight = Math.max(...height);
        let volume = 0;
        for (let h = 1; h <= maxHeight; h++) {
            let currentVolume = 0;
            let start = false;

            for (let i = 0; i < height.length; i++) {
                if (height[i] >= h) {
                    if (i === height.length - 1 || height[i + 1] < h) {
                        start = true;
                        volume += currentVolume;
                        currentVolume = 0;
                    }
                } else if (start) {
                    currentVolume += 1;
                }
            }
        }
        return volume;
    };
    // console.log(trap1([0,1,0,1,1,0,1,0,0,1,0,1]));
    // console.log(trap1([0,1,0,2,1,0,1,3,2,1,2,1]));
    // console.log(trap1([4,2,0,3,2,5]));
    // console.log(trap1([5,2,1,2,1,5]));
    // console.log((trap1([0,5,6,4,6,1,0,0,2,7])));

    const trap2 = function(height) {
        if (height.length == 0) return 0;
        let ans = 0;
        let size = height.length;
        let left_max = new Array(size).fill(0),
            right_max = new Array(size).fill(0);
        left_max[0] = height[0];
        for (let i = 1; i < size; i++) {
            left_max[i] = Math.max(height[i], left_max[i - 1]);
        }
        right_max[size - 1] = height[size - 1];
        for (let i = size - 2; i >= 0; i--) {
            right_max[i] = Math.max(height[i], right_max[i + 1]);
        }
        for (let i = 0; i < size; i++) {
            ans += Math.min(left_max[i], right_max[i]) - height[i];
        }
        return ans;
    }
    // console.log((trap2([0,1,0,2,1,0,1,3,2,1,2,1])));

    //---------------------------
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var searchInsert = function(nums, target) {
        if (nums.indexOf() === -1) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] > target) {
                    return i;
                }
            }
        } else {
            return nums.indexOf(target);
        }
    };

    var searchInsert1 = function(nums, target) {
        let [left, right, mid] = [0, nums.length-1, null];
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (target === nums[mid]) return mid;
            target < nums[mid] ? right = mid - 1 : left = mid + 1;
        }
        return target < nums[mid] ? mid : mid + 1;
    };
    // console.log(searchInsert1([1,30,40,50,66], 70));

    //
    var searchInsert2 = function(nums, target) {
        let [left, right, mid] = [0, nums.length-1, null];
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (target === nums[mid]) return mid;

            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    };
    // console.log(searchInsert2([4,5,6,7,0,1,2], 1));
    // console.log(searchInsert2([5,1,2,3,4], 1));
    // console.log(searchInsert2([3,4,5,6,1,2], 2));


    // https://leetcode.com/problems/longest-valid-parentheses/description/
    /**
     * @param {string} s
     * @return {number}
     */
    var longestValidParentheses = function(s) {
        const n = s.length;
        const S = [-1];
        let x = 0;

        for (let i = 0; i < n; ++i) {
            if (s[i] === '(') {
                S.push(i);
            } else {
                S.pop();
            }

            if (!S.length) {
                S.push(i);
            } else {
                x = Math.max(x, i - S[S.length - 1]);
            }
        }
        return x;
    };
    // console.log(longestValidParentheses("())(())"));
    // console.log(longestValidParentheses(")()())"));
    // console.log(longestValidParentheses("()(()"));
    // console.log(longestValidParentheses("()()"));

    var longestValidParentheses1 = function(s) {
        const stack = [];
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ')' && s[stack[stack.length - 1]] === '(') {
                stack.pop();
                maxLength = Math.max(maxLength, stack.length ? i - stack[stack.length - 1] : i - (-1));
                continue;
            }
            stack.push(i)
        }
        return maxLength;
    };

    // console.log(longestValidParentheses1("()))))(())"));
    // console.log(longestValidParentheses1(")()())"));
    // console.log(longestValidParentheses1("()((()"));
    // console.log(longestValidParentheses1("(()(((()"));

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var removeDuplicates2 = function(nums) {
        let [k, count] = [0, 0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i - 1] !== null && nums[i] <= nums[i - 1]) {
                k++;
                continue;
            }
            nums[i - k] = nums[i];
            count++;
        }
        return count;
    };

    var removeDuplicates3 = function(nums) {
        let k = 0;
        for (const x of nums) {
            if (k === 0 || x !== nums[k - 1]) {
                nums[k] = x;
                k++;
            }
        }
        return k;
    };
    // console.log(removeDuplicates3([1,1,2]));

    // i=0: [1,1,2]; k=0
    // i=1: [1,1,2]; k=1
    // i=2: [1,2,2]; k=1

    // console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));
    // i=0: [0,0,1,1,1,2,2,3,3,4]; k=0
    // i=1: [0,0,1,1,1,2,2,3,3,4]; k=1
    // i=2: [0,1,1,1,1,2,2,3,3,4]; k=1
    // i=3: [0,1,1,1,1,2,2,3,3,4]; k=2
    // i=4: [0,1,1,1,1,2,2,3,3,4]; k=3
    // i=5: [0,1,2,1,1,2,2,3,3,4]; k=3
    // i=6: [0,1,2,1,1,2,2,3,3,4]; k=4
    // i=7: [0,1,2,3,1,2,2,3,3,4]; k=4
    // i=8: [0,1,2,3,1,2,2,3,3,4]; k=5
    // i=9: [0,1,2,3,4,2,2,3,3,4]; k=5

    /**
     * @param {number} num
     * @return {number}
     */
    var addDigits = function(num) {
        if (num === 0) {
            return num;
        }
        let sum = 0;
        for (let char of num.toString()) {
            sum += Number(char);
        }
        if (sum < 10) {
            return sum;
        } else {
            return addDigits(sum);
        }
    };

    /**
     * @param {number} num
     * @return {number}
     */
    var addDigits1 = function(num) {
        let digital_root = 0
        while (num > 0) {
            digital_root += num % 10;
            num = Math.floor(num / 10);

            if (num === 0 && digital_root > 9) {
                num = digital_root;
                digital_root = 0;
            }
        }
        return digital_root;
    };
    // console.log(addDigits1(38));
    // console.log(addDigits1(101));
    // console.log(addDigits1(138));

    var reverseString = function (s, k) {
        let a = s.split('');
        for (let start = 0; start < a.length; start += 2 * k) {
            let i = start, j = Math.min(start + k - 1, a.length - 1);

            while (i < j) {
                [a[i], a[j]] = [a[j], a[i]];
                i++;
                j--;
            }
        }
        return a.join('');
    }
    // console.log(reverseString('abcdefg', 2)); // bacdfeg
    // console.log(reverseString('abcdefg', 3)); // cbadefg
    // console.log(reverseString('abcdefg', 4)); // dcbaefg

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var singleNonDuplicate = function(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (
                i === 0 && nums[i + 1] !== nums[i] ||
                nums[i-1] !== nums[i] && nums[i] !== nums[i + 1] ||
                nums[i-1] !== nums[i] && i === nums[nums.length - 1]
            ) {
                return nums[i];
            }
        }
    };

    // [1,1,2,2,3,3,4,4,8,8,9]
    var singleNonDuplicate1 = function(nums) {
        for (let i = 0; i < nums.length - 1; i += 2) {
            if (nums[i] !== nums[i + 1]) {
                return nums[i];
            }
        }
        return nums[nums.length - 1];
    };

    /**
     * @param {number} n
     * @return {boolean}
     */
    var isPowerOfTwo = function(n) {
        return n > 0 && (n & (n-1)) === 0
    };

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var moveZeroes = function(nums) {
        let lastNonZeroFoundAt = 0;
        for (let cur = 0; cur < nums.length; cur++) {
            if (nums[cur] != 0) {
                [nums[lastNonZeroFoundAt], nums[cur]] = [nums[cur], nums[lastNonZeroFoundAt]];
                lastNonZeroFoundAt++;
            }
        }
    };
    //console.log(moveZeroes([1,0,1,0,3,12]));  [1,1,0,0,3,12], [1,1,3,0,0,12],  [1,1,3,12,0,0]
    // console.log(moveZeroes([0,0,1]));

    /**
     * @param {number} num
     * @return {boolean}
     */
    var isPerfectSquare = function(num) {
        let [left, right] = [0, num];
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            if (mid * mid === num) return true;
            mid * mid > num ? right = mid - 1 : left = mid + 1;
        }
        return false;
    };
    // console.log(isPerfectSquare(16));
    // console.log(isPerfectSquare(14));
    // console.log(isPerfectSquare(81));

    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    var sumOfLeftLeaves = function(root) {
        const f = (node, left) => {
            let sum = 0;
            if (left && !node.left && !node.right) {
                sum += node.val;
            }
            if (!node.left && !node.right) {
                return sum;
            }
            if (node.left) {
                sum += f(node.left, true);
            }
            if (node.right) {
                sum += f(node.right, false);
            }
            return sum;
        }
        return f(root, false);
    };

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    var sumOfLeftLeaves1 = function(root) {
        let sum=0;

        function sumLeftLeaves(root,isLeft){
            if(!root){
                return 0;
            }
            if(root.left === null && root.right === null && isLeft ){
                sum+= root.val;
            }

            sumLeftLeaves(root.left,true);
            sumLeftLeaves(root.right,false);
        }
        sumLeftLeaves(root,false,sum);
        return sum;
    }

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        if (s.length !== t.length) return false;
        const quickSort = (str) => {
            if (str.length <= 1) return str;
            let [left, right] = ['', ''];
            const pivot = Math.floor(str.length/2);
            for (let i = 0; i < str.length; i++) {
                const ch = str[i];
                if (i === pivot) continue;
                ch < str[pivot] ? left+=ch : right+=ch;
            }
            return `${quickSort(left)}${str[pivot]}${quickSort(right)}`;
        }
        // console.log(quickSort(s));
        // console.log(quickSort(t));

        return quickSort(s) === quickSort(t);
    };
    // console.log(isAnagram('aacc', 'ccac'));

    var isAnagram1 = function(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.has(s[i]) ? map.set(s[i], map.get(s[i])+1) : map.set(s[i], 1);
            map.has(t[i]) ? map.set(t[i], map.get(t[i])-1) : map.set(t[i], -1);
        }
        for (let amount of map.values()) {
            if (amount !== 0) return false;
        }
        return true;
    };
    // console.log(isAnagram1('cat', 'tacc'));

    /**
     * @param {number} n
     * @return {boolean}
     */
    var isUgly = function(n) {
        if (n <= 0) return false;

        const keepDividingWhenDivisible = (d1, d2) => {
            while (d1 % d2 === 0) {
                d1 /= d2;
            }
            return d1;
        }

        for (let d of [2,3,5]) {
            n = keepDividingWhenDivisible(n, d);
        }
        return n === 1;
    };

    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    var wordPattern = function(pattern, s) {
        const sArray = s.split(' ');
        if (pattern.length !== sArray.length) return false;

        const cMap = new Map();
        const wMap = new Map();

        for (let i = 0; i < pattern.length; i++) {
            const [c, w] = [pattern[i], sArray[i]];
            if (!cMap.get(c)) {
                if (wMap.get(w)) return false;

                cMap.set(c, w);
                wMap.set(w, c);
            } else {
                if (cMap.get(c) !== w) return false;
            }
        }
        return true;
    };

    // https://leetcode.com/problems/range-addition-ii/description/
    var maxCount = function(m, n, ops) {
        let minA = m;
        let minB = n;
        for (let op of ops) {
            minA = Math.min(minA, op[0]);
            minB = Math.min(minB, op[1]);
        }
        return minA * minB;
    };

    class SnakeGame {
        constructor(width, height, food) {
            this.width = width;
            this.height = height;
            this.food = food;
            this.snake = [[0, 0]];
            this.score = 0;
            this.foodIndex = 0;
            this.snakeSet = new Set(["0,0"]);
        }

        move(direction) {
            let head = this.snake[0].slice();
            switch (direction) {
                case "U":
                    head[0]--;
                    break;
                case "D":
                    head[0]++;
                    break;
                case "L":
                    head[1]--;
                    break;
                case "R":
                    head[1]++;
                    break;
            }

            if (head[0] < 0 || head[0] >= this.height || head[1] < 0 || head[1] >= this.width) {
                return -1;
            }

            let newHeadStr = head.toString();
            if (this.snakeSet.has(newHeadStr) && newHeadStr !== this.snake[this.snake.length - 1].toString()) {
                return -1;
            }

            if (this.foodIndex < this.food.length && head[0] === this.food[this.foodIndex][0] && head[1] === this.food[this.foodIndex][1]) {
                this.foodIndex++;
            } else {
                let tail = this.snake.pop();
                this.snakeSet.delete(tail.toString());
            }

            this.snake.unshift(head);
            this.snakeSet.add(newHeadStr);

            return this.snake.length - 1;
        }
    }

    const snackGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);

    //
    const isPrime = num => {
        const boundary = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
        return num >= 2;
    }
}

