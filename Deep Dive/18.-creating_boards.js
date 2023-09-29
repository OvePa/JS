let generate = function (length, width, pieces) {
  // Create array of size length  and fill with " " using fill method
  let board = new Array(length).fill(" ");
  // Assign array at each index to a new array of size width and fill with " "
  board = board.map((_) => new Array(width).fill(" "));

  // Populate the board through forEach method on pieces array
  pieces.forEach((piece) => {
    // Create check for out of bounds
    // If out of bounds, return
    if (piece["row"] >= length || piece["col"] >= width) return;
    if (piece["row"] < 0 || piece["col"] < 0) return;
    // The piece is not out of bounds and so it is assigned to the board
    board[piece["row"]][piece["col"]] = piece["value"];
  });
  return board;
};
// Create a list of objects which represent pieces to be added in board
// Note that the last piece is incorrect
let sample_pieces = [
  { row: 0, col: 0, value: "X" },
  { row: 0, col: 1, value: "O" },
  { row: 0, col: 2, value: "O" },
  { row: 1, col: 0, value: "X" },
  { row: 1, col: 1, value: "X" },
  { row: 1, col: 2, value: "O" },
  { row: 2, col: 0, value: "X" },
  { row: 2, col: 1, value: "O" },
  { row: 2, col: 2, value: "O" },
  { row: 4, col: 3, value: "W" },
];

let board = generate(3, 3, sample_pieces); // Generate board
console.log(board);
