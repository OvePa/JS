/**
 Counting elements
Often, we need to count elements in an array that satisfy a certain condition. We can use the map and reduce methods to do this in one line. Follow these steps:

Map the array into an array of zeros and ones.

Reduce the array of zeros and ones into the sum.

The final output gives the count of elements that satisfy a condition. Take a look at the following code, where we find the elements of type string.
 */
let arr = ["Hello", 1, true, NaN, "Bye"]; // initialise an array of elements
let countArr = arr.map((ele) => (typeof ele === "string" ? 1 : 0)); // map to 0 and 1
let sum = countArr.reduce((prev, curr) => prev + curr); // reduce for sum
console.log("arr:", arr); // print original array
console.log("array from map:", countArr); // print array returned from map method
console.log("number of Strings:", sum); // print number of strings

let arr1 = ["Hello", 1, true, NaN, "Bye"];
let sum1 = arr
  .map((ele) => {
    return typeof ele === "string" ? 1 : 0;
  })
  .reduce((prev, curr) => prev + curr);

console.log("arr:", arr1);
console.log("number of Strings:", sum1);

/*
Finding number of elements in a two-dimensional array
Another common coding task: finding the number of elements in a two-dimensional array. Again, we can use the map and reduce methods to do this task in one line! Use the following steps.

Map the array into the length of each array at each index.

Reduce the array of lengths into the sum.
 */
arr = [[1, 2, 3, 4], [1, 2], [1, 2, 3, 4, 5, 6], []]; // initialise a two-dimensional array
sum = arr
  .map((ele) => {
    return ele.length;
  })
  .reduce((prev, curr) => prev + curr);
console.log("arr:", arr); // print original array
console.log("number of elements:", sum); // print number of elements in 2D array
