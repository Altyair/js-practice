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
const t = 1;
const str = '<p id="time">Timer: <span>${t}</span> sec</p>' +
                    '<p id="task">2</p>' +
                    '<p id="result"></p>' +
                    '<textarea id="text-field" rows="20" cols="100"></textarea>';

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
    const gameStream$ = state$.pipe(
        tap(state => {
            document.querySelector('.content').innerHTML = `
                <p id="time">Timer: <span>${state.time}</span> sec</p>
                <p id="task">${state.tasks[state.level]}</p>
                <p id="result"></p>
                <textarea id="text-field" rows="20" cols="100"></textarea>
            `;
            document.querySelector('textarea').focus();
        }),
        map(state => [state, fromEvent(document.querySelector('textarea'), 'keyup')] ),
        switchMap(([state, emitCharacter$]) => combineLatest(
            state$,
            emitCharacter$.pipe(
                first(),
                switchMap(() => interval(state.intervalValue))
            ),
            emitCharacter$.pipe(pluck(('target', 'value'))),
        ).pipe(
            scan((_, game) => (
                (([state, time, text]) => (
                    state.time = time * state.intervalValue / state.formatTime.second,
                    state.text = document.querySelector('textarea').value
                ))(game),
                game
            )),
            tap((game) => ( document.querySelector('#time').querySelector('span').innerText = game[0].time )),
            takeWhile(([state]) => state.tasks[state.level] !== state.text),
            finalize(_ => {  document.querySelector('#result').innerHTML = `<b>GAME OVER!!! Press enter to play something else.</b>` } )
        ))
    );

    const gameStreamSub = gameStream$.subscribe();
    const gameStreamSubscription = new Subscription();
    gameStreamSubscription.add(gameStreamSub);

    const restartGameSubscription = new Subscription();
    restartGameSubscription.add(fromEvent(document.body, 'keyup').pipe(
        pluck('keyCode'),
        filter(keyCode => keyCode === 13 && gameStreamSub.isStopped),
        withLatestFrom(state$)).subscribe(([_, state]) => {
            (
                state.time = 0, state.text = '',
                state.level = state.level < state.tasks.length - 1 ? state.level += 1 : state.level = 0
            );
            subscriptions[0] = gameStream$.subscribe();
        }
    ));

    subscriptions.push(gameStreamSubscription, restartGameSubscription);

    console.log(str);
};
export { main, detach };
