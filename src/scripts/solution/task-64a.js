//TASK 64A- David
import getCellIndex from './task-15b.js';

 export default function getNeighbours(x, y, grid, rows, columns) {
  const neighbours = [];

  function addNeighbour(x, y) {
    if (x > 1 && y > 1 && x < columns - 1 && y < rows - 1) {
      neighbours.push(grid[getCellIndex(columns, x, y)]);
    } else {
      neighbours.push(0);
    }
  }

  addNeighbour(x - 1, y - 1);
  addNeighbour(x, y - 1);
  addNeighbour(x + 1, y - 1);

  addNeighbour(x - 1, y);
  addNeighbour(x + 1, y);

  addNeighbour(x - 1, y + 1);
  addNeighbour(x, y + 1);
  addNeighbour(x + 1, y + 1);

  return neighbours;
}
