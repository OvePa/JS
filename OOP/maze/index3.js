// Finding neighboring traversable indices#
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

  getNeighbours(x, y) {
    // return array of neighbours
    var neighbours = [];
    // up
    if (this.canTraverse(x - 1, y)) neighbours.push([x - 1, y]);
    // down
    if (this.canTraverse(x + 1, y)) neighbours.push([x + 1, y]);
    // left
    if (this.canTraverse(x, y - 1)) neighbours.push([x, y - 1]);
    // right
    if (this.canTraverse(x, y + 1)) neighbours.push([x, y + 1]);
    return neighbours;
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
console.log("getNeighbours 0, 1:", maze.getNeighbours(0, 1));
console.log("getNeighbours 0, 3:", maze.getNeighbours(0, 3));
console.log("can traverse 2, 3:", maze.getNeighbours(2, 3));
console.log("can traverse 1, 1:", maze.getNeighbours(1, 1));
