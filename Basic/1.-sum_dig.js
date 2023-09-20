let sum = 0;
let number = parseInt(prompt("Enter the number?")); // taking input in variable number
if (number > 0 && number <= 9999) {
  // checking number range between 0 and 9999
  sum += number % 10; // adding remainder to variable sum
  number = parseInt(number / 10); // adding quotient to the number
  if (number > 0) {
    sum += number % 10; // adding remainder to variable sum
    number = parseInt(number / 10); // adding quotient to the number
  }
  if (number > 0) {
    sum += number % 10; // adding remainder to variable sum
    number = parseInt(number / 10); // adding quotient to the number
  }
  if (number > 0) {
    sum += number % 10; // adding remainder to variable sum
    number = parseInt(number / 10); // adding quotient to the number
  }
  console.log("Sum of digits is: " + sum);
} else {
  console.log("Invalid number");
}
