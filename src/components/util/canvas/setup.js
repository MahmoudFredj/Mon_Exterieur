let canvas;
let brush;


const tick = () => {
}

const draw = () => {
}

const ignite = () => {
    tick();
    draw();
    requestAnimationFrame(ignite);
}


export const setup = (elmn) => {
    canvas = elmn;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    brush = canvas.getContext('2d');
    ignite();
}
