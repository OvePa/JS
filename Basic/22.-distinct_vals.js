let p = [2, 5, 5, 8, 8, 8, 9, 30, 45]; // Enter the list
let lp = p.length; // Calculating the length of p
let r = Array(lp).fill(p[0]); // Creating r of zeroes
let i = 1,
  k = 1;
while (i < lp) {
  // This loop will terminate when the value of i is not less than lp
  if (p[i] != p[i - 1]) {
    // If the element of p is not equal to the previous element
    r[k] = p[i]; // Assigning p to k
    k += 1;
  }
  i += 1;
}
console.log("[" + p + "]");
let s = r.slice(0, k);
console.log("[" + s + "]");
