import { createBlockForCode } from '../helper'
import {
    combineLatest,
    filter, finalize,
    first,
    fromEvent,
    interval, map,
    of, pluck,
    scan,
    Subscription,
    switchMap, takeWhile, tap, withLatestFrom,
} from "rxjs";

// ---------------------------------- Typing game (rxjs example) ------------------------
let subscriptions = [];

const detach = () => (subscriptions.forEach(sub => sub.unsubscribe()));
const main = () => {

    subscriptions = [];

    const state$ = of({
        text: '',
        time: 0,
        tasks: [
            'q',
            'w',
            "Lorem ipsum dolor sit amet",
            "life is very good"
        ],
        level: 0,
        intervalValue: 100,
        formatTime: {
            second: 1000,
            minute: 60_000,



        }
    });

    console.log('Game');
};
export { main, detach };
