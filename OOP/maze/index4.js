// Checking if an index is already visited
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

  checkVisited(x, y, visited) {
    // traverse array for visited
    // console.log(x,y,visited)
    for (var i = 0; i < visited.length; i++) {
      if (visited[i][0] === x && visited[i][1] === y) {
        return true;
      }
    }
    return false;
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
var visited = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 1],
  [1, 2],
];
console.log("visited indices:", visited);
console.log("check visited 0, 1:", maze.checkVisited(0, 1, visited));
console.log("check visited 2, 0:", maze.checkVisited(2, 0, visited));
console.log("check visited 3, 3:", maze.checkVisited(3, 3, visited));
console.log("check visited 2, 1:", maze.checkVisited(2, 1, visited));
