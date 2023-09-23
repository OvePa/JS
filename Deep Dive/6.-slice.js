var raw_arr = [
  [200, 50, 300, 5],
  [10, 25, 7, 100],
  [25, 20, 70, 45],
  [500, 170, 11, 35],
]; // Input Data
var row = 1; // Row index
var s = 0; // subarray start index
var e = 2; // subarray end index
var ans = null; // final answer
if (raw_arr.length <= row || row < 0) {
  // check if row index is within the array
  ans = undefined;
} else if (raw_arr[row].length <= e || raw_arr[row].length <= s) {
  // check if s or e is greater than length of the array
  // they are indices of
  ans = undefined;
} else if (e < 0 || s < 0) {
  // Check if s or e is negative
  ans = undefined;
} else if (s > e) {
  // Check if start is greater than end
  ans = undefined;
} else {
  // If all indices in bounds, then assign ans a slice
  // of raw_arr at index row from s to e
  ans = raw_arr[row].slice(s, e + 1);
}
console.log(ans);
