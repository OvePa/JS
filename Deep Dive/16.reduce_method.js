/*
reduce method
The reduce method reduces the array to a single value from left to right. This method leaves the original array unchanged when applied.

Syntax of reduce method
Check out the syntax of the reduce method:

arr.reduce(<function>);
The reduce method takes, as an argument, a function invoked for each element in the array, where it uses the reduced value of the previous element to the next. The reduce method gives arguments to the passed function in the following order .

function callbackfn(prev: any, curr: any, index: number, array: number[])
For each element, the callbackfn will be passed with the previous callbackfn function’s return value as the first argument, and the value of the element as the second argument. This is followed by the index of the element as the third argument and lastly the array itself as the fourth argument. This callbackfn function takes from 2 to 4 arguments. The callbackfn function returns a value passed onto the callbackfn function for the next element. If the array has only one value, then that value is returned. For an empty array, an error is thrown.
*/
let arr = [10, 20, 30, 40, 50];
let arr1 = arr.reduce((prev, curr) => prev + curr);
console.log("arr", arr);
console.log("reduce val:", arr1);
