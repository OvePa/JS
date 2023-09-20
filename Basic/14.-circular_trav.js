let a = [2, 8, 3, 15]; // Enter the array for circular traversal
let i = 0,
  j = 0,
  allneg = 0,
  addneg = 0;
while (allneg == 0) {
  // This loop will terminate when the value of allneg is zero
  if (a[i] > 0) {
    // If the value of a is greater than zero
    console.log("Now PROCESSING the index " + i);
  } else {
    if (i != j) {
      // If i is not equal to j
      console.log("Now skipping the index " + i);
    } else {
      console.log("Now STOPPING at the index " + i);
    }
  }
  console.log(i + " [" + a + "]");
  if (a[i] > 0) {
    // If the value of a is greater than zero
    a[i] = -a[i]; // Converting value to negative value
    let k = 0;
    let ii = i; // Storing value of i in ii
    console.log("Moving " + -a[i] + " steps");
    while (k < -a[i]) {
      // This loop will terminate when k is not less than -a[i]
      ii = (ii + 1) % a.length;
      k += 1;
      console.log(". " + ii + " [" + a + "]");
    }
    i = ii; // Storing the updated value of ii to i
    addneg = 1;
  } else {
    // If the value of a is not greater than zero
    if (addneg == 1) {
      // If the value of addneg is 1
      j = i;
      addneg = 0; // Change the value of addneg to 0
    } else {
      if (j == i) {
        // If i is equal to j
        allneg = 1;
      }
    }
    i = (i + 1) % a.length; // Update value of i
  }
}
console.log(" *** DONE *** ");
