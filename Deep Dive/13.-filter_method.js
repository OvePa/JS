/*
filter method
The filter method filters elements in an array that pass a certain test and then returns it in a new array. The original array is left unchanged when the method is applied. Let’s see how it works.

Syntax of filter method
The syntax of the filter method is this.

arr.filter(<function>);
The filter method above takes a function as an argument that is invoked for each element in the array. The function that will be passed is given arguments in the following order by the filter method.

function callbackfn(value: any, index: number, array: any[])
For each element, the callbackfn will be passed with the value of the element as the first argument, followed by the index of the element as the second argument, and lastly the array itself as the third argument. The callbackfn function can take between 1 and 3 arguments. The callbackfn function returns a boolean value when the value is true; otherwise the value is filtered and skipped.
*/
let arr = [10, 20, 30, 40, 50];
let arr1 = arr.filter((a) => a > 30);

console.log("arr", arr);
console.log("Elements greater than 30:", arr1);
