let p = [2, 5, 5, 8, 8, 8, 9, 30, 45]; // Enter array 1
let q = [4, 5, 5, 6, 7, 7, 8, 8, 9, 10, 45]; // Enter array 2
let lp = p.length,
  lq = q.length; // Calculating the length of both p and q
let lr;
if (lq < lp) {
  lr = lq;
} else {
  lr = lp;
}
let r = Array(lr).fill(0); // Creating r of zeros
let i = 0,
  j = 0,
  k = 0;
while (i < lp && j < lq) {
  // This loop will terminate when the values of i,j are not less than lp and lq
  if (p[i] == q[j]) {
    // If the element of p is equal to the element of q
    r[k] = p[i]; // Assigning value of p to k
    i += 1;
    j += 1;
    k += 1;
  } else {
    // If the element of p is not equal to the element of q
    if (p[i] < q[j]) {
      // If the element of p is less than the element of q
      i += 1;
    } else {
      // If the element of p is not less than the element of q
      j += 1;
    }
  }
}
console.log("[" + p + "]");
console.log("[" + q + "]");
let s = r.slice(0, k);
console.log("[" + s + "]");
