// Assume that the following variable is already defined:
// list1
// You are required to use the above variables to find
// the index of the first outlier in the array and display it.
// You may start your code from here to store the correct result in
// the variable idx
idx = 1;
if (list1.length < 5) {
  // Checking the length of array, if it is less than 5
  idx = 0;
  console.log("The array contains less than 5 elements.");
} else {
  diff = list1[0] - list1[1]; // Taking absolute difference
  for (let i = 1; i < list1.length - 1; i++) {
    if (list1[i] - list1[i + 1] != diff && idx == 1) {
      idx = i + 1;
      console.log("The outlier value is at the index: " + idx + ".");
    }
  }
  if (idx == 1) {
    // If there are no outlier
    idx = -1;
    console.log("There is no outlier in the array.");
  }
}
