//TASK 13B
  export default function updateGridFromCanvasData(grid, canvasData) {

    for (var i = 0; i < grid.length; i++) {
      grid[i] = 0; //reset
      grid[i] = canvasData.data[i * 4] > 0 ? 1 : 0;
    }
    return grid;
  }
