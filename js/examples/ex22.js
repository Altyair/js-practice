import { createBlockForCode } from '../helper'
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged, filter, finalize,
    first,
    fromEvent,
    interval, map,
    of, pluck,
    scan,
    startWith, Subscription,
    switchMap, takeWhile, tap, withLatestFrom,
} from "rxjs";

// ---------------------------------- currying ------------------------
let subscriptions = [];

export const detach = () => (subscriptions.forEach(sub => sub.unsubscribe()));

export const main = () => {
    subscriptions = [];

    const INTERVAL_VALUE = 100;
    const state$ = of({
        text: '',
        time: 0,
        tasks: [
            'q',
            'w',
            "Lorem ipsum dolor sit amet",
            "life is very good"
        ],
        level: 0
    });
    const gameStream$ = state$.pipe(
        tap(state => {
            document.querySelector('.content').innerHTML = `
                <p id="time">Timer: <span>${state.time}</span> sec</p>
                <p id="task">${state.tasks[state.level]}</p>
                <p id="result"></p>
                <textarea id="text-field" rows="20" cols="100"></textarea>
            `;
        }),
        map(_ => fromEvent(document.querySelector('textarea'), 'keyup')),
        switchMap((emitCharacter$) => combineLatest(
            state$,
            emitCharacter$.pipe(
                first(),
                switchMap(() => interval(INTERVAL_VALUE))
            ),
            emitCharacter$.pipe(map((e) => e.target.value)),
        ).pipe(
            scan((_, game) => (
                (([state, time, text]) => (
                    state.time = time * INTERVAL_VALUE / 1000,
                    state.text = document.querySelector('textarea').value
                ))(game),
                game
            )),
            tap((game) => ( document.querySelector('#time').querySelector('span').innerText = game[0].time )),
            takeWhile(([state]) => state.tasks[state.level] !== state.text),
            finalize(_ => {  document.querySelector('#result').innerHTML = `<b>GAME OVER!!! Press enter to play something else.</b>` } )
        ))
    );

    let gameStreamSub = gameStream$.subscribe();
    const gameStreamSubscription = new Subscription();
    gameStreamSubscription.add(gameStreamSub);

    const restartGameSubscription = new Subscription();
    restartGameSubscription.add(fromEvent(document.body, 'keyup').pipe(
        map(event => event.keyCode),
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
};
