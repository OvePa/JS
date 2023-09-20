// Write your program here
function showDistinct(p) {
  // performing distinct(p)
  let lp = p.length;
  let r = [p[0]];
  let i = 1,
    k = 1;

  while (i < lp) {
    if (p[i] != p[i - 1]) {
      r[k] = p[i];
      k += 1;
    }
    i += 1;
  }

  console.log("Original array: " + p);
  console.log("Distinct array: " + r);
}
showDistinct([2, 5, 5, 8, 8, 8]);
