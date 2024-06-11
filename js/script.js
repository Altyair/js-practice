let content;

// ---------------------------------- palindrome number
const ex6 = (arr, el) => {
    const input1 = 121;
    const input2 = -121;
    const input3 = 10;

    const isPalindromeNumber = (x) => {
        if (x < 0) return false;
        if (x % 10 === 0) return false;
        if (x < 10) return true;


    }

    console.log(isPalindromeNumber(input1));
    console.log(isPalindromeNumber(input2));
    console.log(isPalindromeNumber(input3));
}

// ---------------------------------- binary search in a sorted shifted array
const ex5 = (arr, el) => {
    let input1 = [4,5,6,7,8,1,2,3];

    const binarySearch = (arr, el) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === el) {
                return mid;
            }
            if (arr[left] <= arr[mid]) {
                if (arr[left] <= el && el <= arr[mid]) {
                    right = mid -1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (arr[mid] <= el && el <= arr[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
    console.log(binarySearch(input1, 2));

    const codeBlock = document.createElement('div');
    codeBlock.className = "highlight";
    codeBlock.innerHTML = `
        <pre class="highlight plaintext">
            <code>
let input1 = [4,5,6,7,8,1,2,3];

const binarySearch = (arr, el) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === el) {
            return mid;
        }
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= el && el <= arr[mid]) {
                right = mid -1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] <= el && el <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// find index for 2
console.log(binarySearch(input1, 2));   // 6
            </code>
        </pre>
    `;
    content.appendChild(codeBlock);
}

// ---------------------------------- calculate max area
const ex4 = () => {
    let input1 = [1,8,6,2,5,4,3,8,7];    // 49
    let input2 = [1,1];                  // 1
    let input3 = [4,3,2,1,4];            // 16
    let input4 = [1,2,1];                // 2
    let input5 = [0,0,0,500];            // 0

    const maxArea = (height) => {
        let maxArea = 0;
        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            let currentVolume = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, currentVolume);

            if (height[left] < height[right]) {
                left ++;
            } else {
                right --;
            }
        }

        return maxArea;
    }

    console.log(maxArea(input1));
    console.log(maxArea(input2));
    console.log(maxArea(input3));
    console.log(maxArea(input4));
    console.log(maxArea(input5));
}

// ---------------------------------- count of vowels in a line
const ex3 = () => {
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
}

// ---------------------------------- merge intervals
const ex2 = () => {
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
}

// ---------------------------------- canvas
const ex1 = () => {
    const S = Math.sin, C = Math.cos;
    let w, h, canvas, ctx, t = 0;

    function createCanvas() {
        canvas = document.createElement('canvas');

        canvas.id = "canvas";
        canvas.style.zIndex = 8;
        canvas.style.position = "relative";
        canvas.style.border = "1px solid";
        canvas.style.backgroundColor = "black";

        content.appendChild(canvas);
        ctx = canvas.getContext("2d");
    }

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight - 100;
        canvas.width = w;
        canvas.height = h;
    }

    function setup() {
        createCanvas();
        window.onresize = resize;
        resize();
    }

    function roundUp(num, precision = 2) {
        precision = Math.pow(10, precision);
        return Math.ceil(num * precision) / precision;
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min
    }

    function clear() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, w, h);
    }

    function draw2() {
        clear();
        console.log(7777);
        // requestAnimationFrame(draw2);
    }

    setup();
    draw2();
}

window.onload = () => {
    content = document.querySelector("#content");
    document.querySelector('#menu').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return;

        const href = event.target.dataset.href;

        content.innerHTML = '';

        switch (href) {
            case 'ex1':
                ex1();
                break;
            case 'ex2':
                ex2();
                break;
            case 'ex3':
                ex3();
                break;
            case 'ex4':
                ex4();
                break;
            case 'ex5':
                ex5();
                break;
        }
    });
}
