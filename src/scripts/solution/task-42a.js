import {configuration} from './task-81d.js';
import getCanvasData from './task-19a.js';
import setCanvasData from './task-57a.js';
import updateGrid from './task-26e.js';
import createCanvasContext from './task-55c.js';
import getCellIndex from './task-15b.js';
import createGrid from './task-5c.js';

export default function Artist(canvas) {
  let height = configuration.canvasHeight;
  let width = configuration.canvasWidth;
  let delay = configuration.delay;
  let isActive = false;
  let context = createCanvasContext(canvas);
  let canvasData = getCanvasData(context, height, width);
  let grid = createGrid(height, width);
  let timeout;


  function getIsActive() {
    return isActive;
  }

  function start() {
    if (!isActive) {
      isActive = true;
      canvasData = setCanvasData(canvasData, grid, height, width);
      context.putImageData(canvasData, 0, 0);
      draw()
    }
  }

  function draw() {
    grid = updateGrid(grid, height, width);
    canvasData = setCanvasData(canvasData, grid, height, width);
    context.putImageData(canvasData, 0, 0);
    canvasData = getCanvasData(context, height, width);

    if (isActive) {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        draw();
      }, delay)
    }
  }

  function stop() {
    isActive = false;
    clearTimeout(timeout);
    canvasData = getCanvasData(context, height, width);
    grid = updateGridFromCanvasData(grid, canvasData);
  }

  function drawPoint(x, y, value){
    var cellIndex = getCellIndex(width, Math.floor(x / configuration.canvasScale), Math.floor(y / configuration.canvasScale));
    grid[cellIndex] = value;
    canvasData = setCanvasData(canvasData, grid, height, width);
    context.putImageData(canvasData, 0, 0);
  }

  function setDelay(value){
    delay = value;
  }

  return {
    start: start,
    stop: stop,
    getIsActive: getIsActive,
    drawPoint: drawPoint,
    setDelay: setDelay
  }
}
