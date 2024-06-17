import { createBlockForCode, setupCanvas, drawCanvas } from '../helper';

// ---------------------------------- canvas
export const main = () => {
    const { w, h, canvas, context } = setupCanvas(document.querySelector('#content'));
    drawCanvas({w, h, context}, () => {
        canvas.addEventListener('mousemove', event => {
            console.log(event);
        });
    });
}
