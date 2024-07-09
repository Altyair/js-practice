import { Subject } from "rxjs";

// ----------------------------------  -------------------------------
export const main = () => {
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

    console.log(binarySearch([-10, -3, 1, 3, 7, 5, 10, 15], 5));

    // rxjs
    const obs = new Subject();
    const obj = {
        next: (res) => {
            console.log(res, 'test');
        },
        error: (err) => {
            console.log(err);
        },
    };
    obs.subscribe(obj)
    obs.next(3);
}
