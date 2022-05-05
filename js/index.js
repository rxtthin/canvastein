import * as Renderer from './renderer.js';
let lastTimeStamp;
function GameLoop(timeStamp) {
    const deltaTime = (timeStamp - lastTimeStamp) / 1000;
    Renderer.ClearCanvas();
    Renderer.DrawText(`FPS: ${Math.round(1 / deltaTime)}`, 5, 5, 40);
    lastTimeStamp = timeStamp;
    window.requestAnimationFrame(GameLoop);
}
window.onload = () => {
    Renderer.UpdateCanvasSize();
    window.requestAnimationFrame(GameLoop);
};
