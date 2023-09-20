let p = [2, 5, 5, 8, 8, 8, 9, 30, 45]; // Enter the array 1
let q = [4, 5, 5, 6, 7, 7, 8, 9, 10]; // Enter the array 2
let lp = p.length,
  lq = q.length; // Calculating the length of both p and q
let lr = lp + lq;
let r = Array(lr).fill(0); // creating r of zeros
let i = 0,
  j = 0,
  k = 0;
while (i < lp && j < lq) {
  // This loop will terminate when the values of i,j are not less than lp and lq
  if (p[i] < q[j]) {
    // If the element of p is less than element of q
    r[k] = p[i]; // Assign the value of p to r
    i += 1;
  } else {
    // If the element of p is not less than element of q
    if (p[i] > q[j]) {
      // If the element of p is greater than element of q
      r[k] = q[j]; // Assign the value of q to r
      j += 1;
    } else {
      // The elements of p and q are equal
      r[k] = p[i];
      i += 1;
      j += 1;
    }
  }
  k += 1;
}
while (i < lp) {
  // This loop will terminate when the value of i is not less than lp
  r[k] = p[i];
  i += 1;
  k += 1;
}
while (j < lq) {
  // This loop will terminate when the value of j is not less than lq
  r[k] = q[j];
  j += 1;
  k += 1;
}
console.log("[" + p + "]");
console.log("[" + q + "]");
let s = r.slice(0, k);
console.log("[" + s + "]");
/**
 In the code above:

The first loop traverses through both arrays (p and q) and puts the smaller value in the resulting r array. After completing this round, any one array is exhausted.

The other array still has one or more untraversed values, all of which are certainly greater than or equal to the last value of the exhausted array.

Therefore, one of the next two loops executes to add those values to the end of r without comparison.
 */
