/*
The methods related to string segmentation#
We can use the following methods for string segmentation.

The substring(start, end) takes the starting (start) and ending (end) indices and returns the extracted substring.

The slice(start, end) also takes the starting (start) and ending (end) indices and returns the extracted substring.

Note: The difference between substring and slice is that substring does not allow negative indexing while slice allows, as demonstrated in the following examples.

The split(separator) splits a string into an array of substrings based on the separator.
If the separator is not provided, it returns a single-element array containing the whole string.
If the separator is "", it returns an array of strings, each having a single character.
*/
let myString = "Educative";

console.log(myString.length);
console.log(myString.substring(0, 3));
console.log(myString.slice(-9, -6)); // slice with negative indexing
console.log(myString.split()); // split without any separator
console.log(myString.split("")); // split with "" separator

/*
The methods related to case change
These methods change the letter case of the text stored in a string (say, from lowercase to uppercase). Let’s use an example program to explore case changes.

The toUpperCase() method converts all characters in a string to uppercase.

The toLowerCase() method converts all characters in the string to lowercase.
*/
let result = "";

let myString1 = "educative";
result = myString1.toUpperCase();
console.log(result);

let myString2 = "EDUCATIVE";
result = myString2.toLowerCase();
console.log(result);

/*
The search-related methods
These methods search for the occurrence of text in a string. Let’s use an example program to explore searches.

The startsWith() method checks for text at the start of a string and returns true or false.

The charAt() method gives the text at the specified position in the string.

The search() method searches for text in the string and returns the index of the first occurrence.

The trim() method eliminates the extra spaces from a string.

The replace() method searches for first occurrences of a text in the string, replaces it with different text, and returns the new string after replacement.

The replaceAll() method searches for all occurrences of a text in the string, replaces it with different text, and returns the new string after replacement.

The endsWith() method checks for text at the end of a string and returns true or false.
*/
console.log("educative".startsWith("edu"));
console.log("educative".charAt(3));
console.log("educative".search("e"));
console.log("     educative     ".trim());
console.log("educative".split(""));
console.log("educative".replace("e", "E"));
console.log("educative".replaceAll("e", "E"));
console.log("educative".endsWith("e"));

/*
Built-in functions for arrays
JavaScript provides various built-in functions for dealing with arrays, usually termed array methods, which programmers use to perform routine tasks. Let’s use practice programs to learn these built-in methods related to arrays.

The value-inserting methods
The following methods are used to add values to arrays:

The push() method adds an element at the end of the array. If we try to push another array, it adds as individual elements to the existing array.

The unshift() method adds an element at the beginning of the array.
*/
let a = [1, 2, 3];
let b = [8, 9];

console.log("array a: " + a);
console.log("array b: " + b);

console.log("push 4 in array a");
a.push(4); // push 4 in array a
console.log("array a: " + a);

console.log("push complete array b in a");
a.push(b); // push complete array b in a
console.log("array a: " + a);
console.log("array b: " + b);

let c = [1, 2, 3];
let d = [8, 9];

console.log("array c: " + c);
console.log("array d: " + d);

console.log("unshift 4 in array d");
d.unshift(4); // unshift 4 in array a
console.log("array d: " + d);

console.log("unshift complete array c in d");
d.unshift(c); // unshift complete array b in a
console.log("array c: " + c);
console.log("array d: " + d);

/*
The value-removing methods#
The following methods are used to remove values from arrays:

The pop() method removes an element from the end of the array.

The shift() method removes an element from the beginning of the array.
*/
let d = [0, 1, 2, 7, 4, 5, 6];
console.log("array d: " + d);
console.log("Removing value from the end using pop() function");
d.pop(); // Removing using pop() function
console.log("array d: " + d);

console.log("Removing value from the start using shift() function");
d.shift(); // Removing using remove() function
console.log("array d: " + d);

/*
In JavaScript, the splice() method is used to remove or add items to an array. It modifies the original array, rather than returning a new one.

The splice() method has the following syntax:

array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 
start: The index at which to start changing the array. If its value is greater than the length of the array, the actual starting index will be set to the length of the array. If its value is negative, it will begin that many elements from the end of the array.
deleteCount (optional): The number of elements to remove. If its value is larger than the number of elements starting at the start, all of the elements through the end of the array will be deleted.
item1, item2, ... (optional): The elements to add to the array, starting from the start index. If its value isn’t specified, splice() will only remove elements from the array.
Here are some examples of using splice():
*/
let a1 = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
// remove elements from index 3
a1.splice(3, 8);
console.log(a1);
let a2 = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
// add elements to index 3
a2.splice(3, 0, "c", "a", "t", "i", "v", "e");
console.log(a2);
let a3 = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
// remove and add elements at the same time
a3.splice(6, 8, "e");
console.log(a3);

/**
 The search-related methods
The following methods are used to search for values in arrays:

The indexOf() method searches for an element in the array and returns the index of the first occurrence.

The includes() method searches for an element in the array and returns true if it exists; otherwise returns false.

The lastIndexOf() method searches for an element in the array and returns the index of the last occurrence.
 */

let c = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
console.log("The original array: " + c);
console.log(
  "The index of first occurrence of 'e' in the array: " + c.indexOf("e")
);
console.log("'v' exists in the array: " + c.includes("v"));
console.log(
  "The index of last occurrence of 'e' in the array: " + c.lastIndexOf("e")
);

/*
The arrangement-related methods
The following methods are used to change the arrangement of values in arrays:

The reverse() method reverses the order of the array.
*/

let f = ["e", "d", "u", "c", "a", "t", "i", "v", "e"];
console.log("The original list: " + f);
console.log("The array after reversing the existing elements: " + f.reverse());
/*
The sort() method sorts the array in ascending order. The values are sorted as strings based on their ASCII codes.
Here, we’ll use the sort() function to write a program that sorts values based on ASCII codes:
*/
let nums = [8, 11, 20, 3, 7];
console.log("Original array of numbers: " + nums);
console.log("Sorted array of numbers: " + nums.sort());

let alphs = "zigZAG";
console.log("Original array of string: " + alphs);
console.log("Sorted array of alphabets: " + alphs.split("").sort());
