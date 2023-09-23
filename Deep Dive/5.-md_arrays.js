var arr = [
  ["Car", 2000],
  ["Truck", 500],
  ["Bike", 6500],
]; // Create array
console.log(arr); // Print entire array
console.log('Access "Car":');
console.log("arr[0][0]:", arr[0][0]); // Access "Car" at [0][0]
console.log("Access 500:");
console.log("arr[1][1]:", arr[1][1]); // Access 500 at [1][1]

/*----Adding a row */
var arr = [
  ["Car", 2000],
  ["Truck", 500],
  ["Bike", 6500],
]; // Create array
console.log(arr); // Print entire array
var new_row = ["Scooter", 1500]; // Create new row
console.log("new row:", new_row); // Print the row to be added

arr.push(new_row); // push the new array to the end of arr
console.log("Updated arr:", arr); // Print the updated arr

/*-------Adding a column */
var arr = [
  ["Car", 2000],
  ["Truck", 500],
  ["Bike", 6500],
]; // Create array
console.log(arr); // Print entire array
var row0_col = ["Toyota", "Nissan"];
var row1_col = ["Ford"];
var row2_col = ["Honda"];
// Push each element into each row of arr
arr[0].push(row0_col);
arr[1].push(row1_col);
arr[2].push(row2_col);

console.log("new arr:", arr); // print the final arr
