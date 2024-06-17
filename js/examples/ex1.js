import { createBlockForCode } from '../helper'

// ---------------------------------- canvas
export const main = () => {
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
        w = 1200;
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

    let pageX
    function draw2() {
        clear();

        canvas.addEventListener('mousemove', event => {
            console.log(event);
        });

        // requestAnimationFrame(draw2);
    }

    setup();
    draw2();
}
