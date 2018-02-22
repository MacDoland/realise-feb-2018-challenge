import getCellIndex from './task-15b.js';

//TASK 64A
export default function getNeighbours(cellX, cellY, grid, rowCount, columnCount) {
    var neighbours = [];
    var minX = 0,
      minY = 0,
      maxX = columnCount - 1,
      maxY = rowCount - 1;


    //get top left
    if (cellX > minX && cellY > minY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX - 1, cellY - 1)]);
    } else {
      neighbours.push(0);
    }

    //get top
    if (cellY > minY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX, cellY - 1)]);
    } else {
      neighbours.push(0);
    }

    //get top right
    if (cellX < maxX && cellY > minY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX + 1, cellY - 1)]);
    } else {
      neighbours.push(0);
    }

    //get right
    if (cellX < maxX) {
      neighbours.push(grid[getCellIndex(columnCount, cellX + 1, cellY)]);
    } else {
      neighbours.push(0);
    }

    //get bottom right
    if (cellX < maxX && cellY < maxY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX + 1, cellY + 1)]);
    } else {
      neighbours.push(0);
    }

    //get bottom
    if (cellY < maxY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX, cellY + 1)]);
    } else {
      neighbours.push(0);
    }

    //get bottom left
    if (cellX > minX && cellY < maxY) {
      neighbours.push(grid[getCellIndex(columnCount, cellX - 1, cellY + 1)]);
    } else {
      neighbours.push(0);
    }

    //get bottom left
    if (cellX > minX) {
      neighbours.push(grid[getCellIndex(columnCount, cellX - 1, cellY)]);
    } else {
      neighbours.push(0);
    }

    return neighbours;
  }
