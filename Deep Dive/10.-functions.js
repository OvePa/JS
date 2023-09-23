// Normal function
let func = function (a, b) {
  let sum = a + b;
  return sum;
};
console.log("Sum of 1 and 3:", func(1, 3));

// arrow function
func = (a, b) => {
  sum = a + b;
  return sum;
};
console.log("Sum of 1 and 3:", func(1, 3));

// Single-lined function as an arrow function
func = (a, b) => a + b;
console.log("Sum of 1 and 3:", func(1, 3));

//Arrow functions with a single argument
//Arrow functions with only one argument can be made cleaner by dropping the parentheses around the arguments. Look at the example below where we return the double of the argument.
func = (a) => a * 2;
console.log("Sum of 1 and 3:", func(3));

//Arrow functions without arguments
//We can write arrow functions without any arguments too, because JavaScript allows us to write functions without arguments. Check out the function below, which prints the string "Hello".

func = () => console.log("Hello");
func();

//Returning objects in an arrow function
// The syntax for an arrow function varies if we are returning an object encapsulated in curly brackets. Because objects are encapsulated in curly brackets, writing the object directly is confusing for JavaScript; in an arrow function, curly brackets are supposed to encapsulate the function body. See how we can return an object for arrow functions.
var func1 = (a) => ({ 1: a }); // arrow function creating object
var func2 = (a) => {
  return { 1: a };
}; // arrow function creating object

console.log("Object with '1' property as 'OK':", func1("OK")); // print object
console.log("Object with '1' property as 'OK':", func2("OK")); // print object
