// The slice() method gets a copy of the array.
var arr = [1, 2, 3, 4]; // Assign an array of elements to arr

// Print array along with it's type
console.log("Before Slice:");
console.log("arr:", arr);

// Call toString method and assign to str_arr
var arr1 = arr.slice();
var arr2 = arr.slice(1);
var arr3 = arr.slice(1, 1);
var arr4 = arr.slice(0, -1);

// Print the type and values of arr and str_arr after calling toString method
console.log("After Slice:");
console.log(`original arr: ${arr}`);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);

/*------------splice()------------ */
//The splice() method is a method used to add or remove a sub-array of elements from the array. The splice() method returns the removed elements from the array after modifying the original array.
var arr = [1, 2, 3, 4]; // Assign an array of elements to arr
console.log("intial arr:", arr);

// Add zero to list without deleting
var add = arr.splice(0, 0, 0);
console.log("arr after addition:", arr);
console.log("elements removed in addition:", add);

// remove 3 elements from index 1 onwards
var remove = arr.splice(1, 3);
console.log("arr after removal:", arr);
console.log("elements removed in removal:", remove);

// remove 1 element from index 1 and add 1, 2 and 3
var replace = arr.splice(1, 1, 1, 2, 3);
console.log("arr after replacement:", arr);
console.log("elements removed in replacement:", replace);

console.log("arr:", arr);
/*
* Adding elements in array (line 5): The first argument is set so that elements are inserted followed by 0. That states that no elements can be removed. Finally, all the values added are passed as arguments. The method returns an empty array as no element is removed.

* Removing elements from an array (line 10): The first argument is set so the elements are removed followed by the number of elements to be removed. The method would return an array of elements removed from the original array.

* Replacing elements from an array (line 15): The first argument is set so the elements are removed followed by the number of elements to be removed. Then, we pass all the values to add, once the specified range of values is removed. 
-> array.splice(startIndex, removeCount, item1, item2, .., itemN)
*/
/*---------concat()------ */
//The concat() method merges two arrays and returns a copy of the merged arrays. The method does not modify either array passed as arguments or the array of the object’s method.
var arr1 = [1, 2, 3]; // Assign an array of 3 elements to arr1
var arr2 = [4, 5]; // Assign an array of 2 elements to arr2
// Print the arrays
console.log("initial arrays:");
console.log(arr1);
console.log(arr2);
// Merge arr1 and arr2 and assign to corresponding variables
var merged1 = arr1.concat(arr2);
var merged2 = arr2.concat(arr1);
var merged3 = Array.prototype.concat(arr1, arr2);
// Print each array after merging
console.log("After concat:");
console.log("arr1:", arr1, "arr2:", arr2);
console.log("merged1:", merged1);
console.log("merged2:", merged2);
console.log("merged3:", merged3);
