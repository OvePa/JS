let p = "was it a car or a cat i saw"; // The string to be reversed
let q = ""; // Empty string to store the reverse
let i = p.length - 1;
while (i >= 0) {
  q += p[i]; // Appending the characters of p to q in a backward fashion
  i -= 1;
}
console.log("ORIGINAL string is: " + p);
console.log("REVERSED string is: " + q);
