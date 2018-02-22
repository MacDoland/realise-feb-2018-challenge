//TASK 5C
  export default function createGrid(height, width) {
    var grid = new Array(height * width);

    for (var i = 0; i < grid.length; i++) {
      //grid[i] =Math.round(Math.random());
      grid[i] = 0;
    }

    return grid;
  }
