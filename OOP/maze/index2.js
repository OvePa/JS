//Finding Traversable Indices
const Grid = require("./grid").gridClass;
// Create MazeSolver class below
class MazeSolver extends Grid {
  constructor(arr) {
    super(arr); // initialize the grid
  }
  canTraverse(x, y) {
    // check bounds
    if (x < 0 || y < 0) return false;
    else if (x >= this.grid.length) return false;
    else if (y >= this.grid[x].length) return false;
    // check if 0 or not
    else if (this.grid[x][y] === 0) return false;
    else return true; // all passsed
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
console.log("can traverse -1, 1:", maze.canTraverse(-1, 1));
console.log("can traverse 0, 0:", maze.canTraverse(0, 0));
console.log("can traverse 1, -1:", maze.canTraverse(1, -1));
console.log("can traverse 1, 1:", maze.canTraverse(1, 1));
