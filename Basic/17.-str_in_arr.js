let p = ["25", "55", "888", "9", "30", "45"]; // The 1st list which we want to search
let lp = p.length; // Calculate the length of list p
let r = "50"; // The string to be searched
let i = 0;
let found = 0;
while (i < lp) {
  // This loop will terminate when i is not less than lp
  if (p[i].includes(r)) {
    // If the element of p contains r
    console.log(r + " is found at index " + i);
    found = 1; // Update the variable found with 1
  }
  i += 1;
}
if (found == 0) {
  console.log(r + " is NOT FOUND in the array");
}
