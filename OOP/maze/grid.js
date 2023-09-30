class Grid {
  constructor(arr) {
    if (arr === undefined) {
      // create 6x6 grid random
      var temp = new Array(6);
      for (var i = 0; i < temp.length; i++) {
        temp[i] = new Array(6);
        for (var j = 0; j < temp[i].length; j++) {
          // assign random number between 0 and 1
          temp[i][j] = Math.round(Math.random());
        }
      }
      this.grid = temp;
    } else {
      this.grid = new Array(arr.length);
      for (var i = 0; i < arr.length; i++) {
        // copy array elements
        this.grid[i] = arr[i].slice();
      }
    }
  }
  // Helper function to print the grid
  printArray() {
    // Iterate the grid
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[i].length; j++) {
        // Print X or O
        if (this.grid[i][j] === 0) process.stdout.write(`X `);
        else process.stdout.write(`O `);
      }
      console.log("");
    }
  }
}

var arr = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];
var maze = new Grid(arr);
console.log("Maze created from array arr:");
maze.printArray();
var maze2 = new Grid();
console.log("Randomly generated maze:");
maze2.printArray();
