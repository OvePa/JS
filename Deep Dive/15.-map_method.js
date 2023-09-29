/*
map method
The map method applies a function to each element of the array and creates a new array of the returned values. Now, we can look at its uses.

Syntax of map method
The syntax of the map method looks like this:

arr.map(<function>);
The map method above will take, as an argument, a function invoked for each element in the array. The function that will be passed is given arguments by the map method in the following order.

function callbackfn(value: any, index: number, array: any[])

Again, for each element the callbackfn will be passed with the value of the element as the first argument, followed by the index of the element as the second argument, and lastly the array itself as the third argument. This callbackfn function takes from 0 to 3 arguments. Finally, a new array with all the returned values from the callbackfn function will be returned by the map method.


*/
let arr = [10, 20, 30, 40, 50];
let arr1 = arr.map((a) => a * 2);
console.log("arr:", arr);
console.log("doubled array:", arr1);
