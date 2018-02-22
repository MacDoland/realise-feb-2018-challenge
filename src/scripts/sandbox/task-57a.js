//TASK 57A
export default function setCanvasData(canvasData, grid) {
  for (var i = 0; i < grid.length; i++) {
    canvasData.data[i * 4 + 0] = grid[i] * 255;
    canvasData.data[i * 4 + 1] = grid[i] * 255;
    canvasData.data[i * 4 + 2] = grid[i] * 255;
    canvasData.data[i * 4 + 3] = 255;
  }
  return canvasData;
}
