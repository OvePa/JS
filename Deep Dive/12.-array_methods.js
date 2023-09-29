/**
 Syntax of forEach method
The syntax of the forEach method is as follows.

arr.forEach(<function>);
The forEach method above takes, as an argument, a function invoked for each element in the array. The function to be passed is given arguments in the following order, by the forEach method.

function callbackfn(value: any, index: number, array: any[])
For each element, the callbackfn is passed with the value of the element as the first argument, followed by the index of the element as the second argument, and lastly the array itself as the third argument.
 */
let arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
arr.forEach((val, ind, array) => {
  // arrow function to print arguments
  console.log("Value:", val, " Index:", ind, " arr:", array); // print values
});
console.log(arr); // print array assigned to arr

arr.forEach((_, ind) => {
  console.log(" Index:", ind, " val:", arr[ind]);
});
/*
Our callback function can ignore any number of consecutive parameters from end. In the previous example, we ignored two consecutive parameters from the end. This time, we want to use the second parameter, i.e., the index of the element for which the callback is invoked. In such a case, we can ignore the third parameter by omitting it from the callback definition. If, at the same time, we don’t want to access the value of the array element (the first parameter), we can’t simply omit it from the parameter list and start at the second parameter like so: (ind) => console.log(ind). In this case, the callback would be invoked with the array element value passed in as ind.

In JavaScript, when we want to ignore a parameter from the beginning or middle of a parameter list, we use a special parameter name, the _ symbol, instead of a parameter name. Accordingly, on line 3, you’ll notice that we used _ as the first parameter, and ind as the second (and last) parameter. The callback will ignore the value of each array element (thanks to the _ symbol in its place), and accept the element index in the ind parameter.
 */
