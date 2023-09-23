var arr1 = [1, 2, 3]; // Assign an array of 3 eleement to arr1
var arr2 = new Array(); // Assign an empty array to arr2
// Print Array.prototype before adding any prototype
console.log(`Initial Array.prototype:`, Array.prototype);
// Add lol property to Array.prototype
Array.prototype.lol = "Ha Ha Ha";
// Add loooool property to Array.prototype
Array.prototype.loooool = "Muahahahahaha";

// Print Array.prototype to see it's value
console.log(`New Array.prototype:`, Array.prototype);
// Print Array.lol to see if lol is a property of Array
console.log(`Array.lol:`, Array.lol);

// Print lol and loooool property of arr1
console.log("arr1.lol :", arr1.lol, "| arr1.loooool :", arr1.loooool);
// Print arr1 directly
console.log("arr1:", arr1);

console.log(`\narr2:`);
// Print lol and loooool property of arr2
console.log("arr2.lol :", arr2.lol, "| arr2.loooool :", arr2.loooool);
// Print arr2 directly
console.log("arr2:", arr2);
