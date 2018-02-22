import getCellIndex from './task-15b.js';
import getNeighbours from './task-64a.js';
import countInArray from './task-2e.js';
import getState from './task-48f.js';

export default function updateGrid(grid, rowCount, columnCount) {
  var newGrid = new Array(grid.length);
  var cellIndex, neighbours;
  var sumOfNeigbours;

  for (var y = 0; y < rowCount; y++) {
    for (var x = 0; x < columnCount; x++) {
      cellIndex = getCellIndex(columnCount, x, y);
      neighbours = getNeighbours(x, y, grid, rowCount, columnCount);
      sumOfNeigbours = countInArray(neighbours, 1);
      newGrid[cellIndex] = getState(grid[cellIndex], sumOfNeigbours);
    }
  }

  return newGrid;
}
