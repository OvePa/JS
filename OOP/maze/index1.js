// Creating MazeSolver
const Grid = require("./grid").gridClass;

// Create MazeSolver class below
class MazeSolver extends Grid {
  constructor(arr) {
    super(arr); // initialize the grid
  }
}

var arr = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];
var maze = new MazeSolver(arr);
maze.printArray();
