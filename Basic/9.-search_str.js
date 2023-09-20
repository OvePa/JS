function searchStr(p, r) {
  // performing search in string
  let lp = p.length;
  let i = 0;
  let found = 0;
  while (i < lp) {
    if (p[i] == r) {
      console.log(r + " is found at index " + i);
      found = 1;
    }
    i += 1;
  }
  if (found == 0) {
    console.log("*** " + r + " is NOT FOUND in the array ***");
  }
}
let p = ["2", "55", "888", "9", "30", "45"];
let key = "888";
searchStr(p, key);
