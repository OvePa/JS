let rows = 5,
  cols = 10;
let mat = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
];
console.log("Displaying in the matrix form:");
for (let i = 0; i < rows; i++) {
  console.log("   Row no." + i + "   ==> " + mat[i]);
}
let colsum = Array(cols).fill(0); // Creating a new array of zeros of size 10
for (let j = 0; j < cols; j++) {
  for (let i = 0; i < rows; i++) {
    colsum[j] += mat[i][j]; // Calculating sum of each column value
  }
}
console.log("Column Sums are: " + colsum);
