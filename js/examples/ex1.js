import { createBlockForCode, setupCanvas, drawCanvas, getRandomNumber } from '../helper';

// ---------------------------------- canvasL gravity balls -------------
export const main = () => {
    const { w, h, canvas, context } = setupCanvas(document.getElementsByClassName('content')[0]);
    const startCoords = { x: 334, y: 30 }; // TODO вычислять динамически
    const mouse = { x: w / 2 , y: h / 2, down: false };
    const dots = [];

    // particle
    class Dot {
        constructor(r) {
            this.pos = { x: mouse.x - startCoords.x, y: mouse.y - startCoords.y };
            this.vel = { x: 0, y: 0 };
            this.rad = r || getRandomNumber(1, 10);
            this.mass = this.rad * 0.002;
            this.color = `rgba(250, 10, 30, 0.9)`;
        }

        draw(x, y) {
            this.pos.x = x - startCoords.x || this.pos.x + this.vel.x;
            this.pos.y = y - startCoords.y || this.pos.y + this.vel.y;
            context.fillStyle = context.strokeStyle = this.color;
            context.beginPath();
            context.arc(this.pos.x, this.pos.y, this.rad, 0, 2*Math.PI);
            context.closePath();
            context.fill();
        }
    }
    dots.push(new Dot(35));

    canvas.addEventListener('mousemove', event => {
        [mouse.x, mouse.y] = [event.clientX, event.clientY];
    });
    canvas.addEventListener('mousedown', event => mouse.down = !mouse.down );
    canvas.addEventListener('mouseup', event => mouse.down = !mouse.down );

    const updateDots = () => {
        for (let i = 1; i < dots.length; i++) {
            const acc = { x: 0, y: 0 };
            for (let j = 0; j < dots.length; j++) {
                if (i === j) continue;

                const [a, b] = [dots[i], dots[j]];
                const delta= { x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y };
                const dist= Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1;

                let force = (dist - 100) / dist * b.mass;
                if (j === 0) {
                    force = dist < 60 ? (dist - 60) * b.mass : b.mass;
                }
                acc.x += delta.x * force;
                acc.y += delta.y * force;
            }

            dots[i].vel.x = dots[i].vel.x * 0.65 + acc.x * dots[i].mass;
            dots[i].vel.y = dots[i].vel.y * 0.65 + acc.y * dots[i].mass;
        }
        dots.map(e => e === dots[0] ? e.draw(mouse.x, mouse.y) : e.draw());
    }

    drawCanvas({w, h, context}, () => {
        if (mouse.down && dots.length < 50000000) {
            dots.push(new Dot());
        }
        updateDots();
    });
}
