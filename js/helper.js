export const createAdaptive = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('adaptive');
    const menu = document.querySelector('.adaptive .menu');
    menu.style.display = 'none';
    const burgerMenuButton = document.createElement('a');
    burgerMenuButton.innerHTML = '<img src="../assets/icons/burger-icon.png"  alt="menu"/>';
    burgerMenuButton.className = 'burger-menu-button';
    let toggleAdaptive = false;
    burgerMenuButton.addEventListener('click', () => {
        toggleAdaptive = !toggleAdaptive;
        toggleAdaptive ? menu.style.display = 'block' : menu.style.display = 'none';
    });
    burgerMenuButton.style.position = 'absolute';
    // burgerMenuButton.innerText = 'menu';
    wrapper.insertBefore(burgerMenuButton, wrapper.firstChild);
}

export const createBlockForCode = (code) => {
    const content = document.getElementsByClassName("content")[0];
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

// canvas
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
    const { left, top } = canvas.getBoundingClientRect();

    return Object.assign({ left, top }, { w, h }, { canvas, context });
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
