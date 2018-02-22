//Task 26E - Nick

import getCellIndex from './task-15b.js';
import getNeighbours from './task-64a.js';
import countInArray from './task-2e.js';
import getState from './task-48f.js';

/***
	For every cell in the grid, call getState() to obtain new value, based on combined value of neighbour cells.
	Params:
		gridArray:	one dimensional array that represents a two dimensional grid
		rows:		number of rows in the grid
		cols:		number of cols in the grid
	Return:
		Updated array
*/
export default function updateGrid(gridArray, rows = 3, cols = 3){
	let updatedArray = [], cnt = 0;
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			updatedArray.push(getState(gridArray[cnt++], countInArray( getNeighbours(j, i, gridArray, rows, cols), 1)));
		}
	}
	return updatedArray;
}
