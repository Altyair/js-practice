export const createBlockForCode = (code) => {
    const content = document.querySelector("#content");
    const codeBlock = document.createElement('div');
    codeBlock.className = "highlight";
    codeBlock.innerHTML = `
        <pre class="highlight plaintext">
            <code>
                ${code}
            </code>
        </pre>
    `;
    content.appendChild(codeBlock);
}

export const roundUp = (num, precision = 2) => {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
}

export const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
}

const createCanvas = (parent) => {
    const canvas = document.createElement('canvas');

    canvas.id = "canvas";
    canvas.style.zIndex = 8;
    canvas.style.position = "relative";
    canvas.style.border = "1px solid";
    canvas.style.backgroundColor = "black";

    parent.appendChild(canvas);
    const context = canvas.getContext("2d");

    return { canvas, context };
}

const resize = (canvas) => {
    const w = 1200;
    const h = window.innerHeight - 100;
    canvas.width = w;
    canvas.height = h;

    return { w, h };
}

export const setupCanvas = (parent) => {
    const { canvas, context } = createCanvas(parent);
    window.onresize = resize;

    const { w, h } = resize(canvas);

    return Object.assign({ w, h }, { canvas, context });
}

export const drawCanvas = (params, drawCallback) => {
    const clear = () => {
        params.context.clearRect(0, 0, params.w, params.h);
        params.context.fillStyle = "black";
        params.context.fillRect(0, 0, params.w, params.h);
    }

    const draw = () => {
        clear();
        drawCallback();
        requestAnimationFrame(draw);
    }

    draw();
}
