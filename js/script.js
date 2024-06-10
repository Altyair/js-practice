window.onload = () => {
    const wrapper = document.querySelector("#wrapper");

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

            wrapper.appendChild(canvas);
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

    const ex2 = () => {
        console.log('231231313');
    }

    document.querySelector('#menu').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return;

        const href = event.target.dataset.href;

        if (['ex1', 'ex2'].includes(href)) {
            wrapper.innerHTML = '';
        }

        switch (href) {
            case 'ex1':
                ex1();
                break;
            case 'ex2':
                ex2();
                break;
        }
    });
}
