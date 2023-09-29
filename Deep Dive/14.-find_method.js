/*
find method
The find method finds the first element in an array, starting from the first index, and then returns it. The original array is left unchanged when the method is applied. Let’s discuss this further.

Syntax of find method
The syntax of the find method is as follows.

arr.find(<function>);
The find method above will take, as an argument, a function invoked for each element in the array. The function to be passed is given arguments in the following order, by the find method.

function callbackfn(value: any, index: number, array: any[])
For each element, the callbackfn will be passed with the value of the element as the first argument, followed by the index of the element as the second argument, and finally the array itself as the third argument. We may write the callbackfn function to take between 1 and 3 arguments. The callbackfn function returns a boolean value when the value is true. The value is returned and find method terminates. Otherwise, it is skipped. If no element in the array gives true value by the callbackfn function, then undefined is returned by the find method.
*/
let arr = [10, 20, 30, 40, 50];
let val = arr.find((a) => a > 20);
console.log("arr:", arr);
console.log("elements greater than 20:", val);
