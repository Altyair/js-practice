// ---------------------
const S = Math.sin, C = Math.cos;
let w, h, cnv, ctx, t = 0;

window.onload = () => {
    setup();
    draw();
}

function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    cnv.width = w;
    cnv.height = h;
}

function setup() {
    cnv = document.getElementById('canvas');
    ctx = cnv.getContext('2d');
    window.onresize = resize;
    resize();
}

function draw() {

    requestAnimationFrame(draw);
    const cx = 360, cy = 340;

    // clear canvas
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,w,h);

    for (let i = 1; i < 200; i++) {
        const p = i + t;   // постоянно увеличивается на t: 1, 1.01, 1.02, 1.03, ...
        const q = i / 100;  // чем больше i тем больше радиус движения
        const Z = 3 + C(p); // 1..0..1..0..-1
        const X = S(2*p) * S(2*q); // 0..1..0..-1..0

        const hue = (p + t) % 360;
        const lightness = 50 + 50 * Z;
        ctx.fillStyle = `hsl(${hue}, ${lightness}%, 50%)`;

        ctx.fillRect(
            cx + 2 / Z + X * cx / 2,
            cy + C(2*q) / Z * cy * 1.5,
            69 / Z / Z,
            69 / Z / Z
        )
    }

    t += 0.01;
}
