// Assume that the following variable is already defined:
// num
// You are required to use the above variables to calculate
// the power of 2 nearest to the num.
// You may start your code from here to store the correct result
// in the variable pwr.
pwr = 0;
let i = 0;
pwr = 2 ** i; //Calculating power before while loop
let lastpower = 0;
while (pwr < num) {
  //Checking the power should be less than the number
  lastpower = pwr; //Assigning last power
  pwr = 2 ** i; //Calculating next power
  i += 1;
}
//Checking difference between the number and the both powers
let diff1 = num - lastpower;
let diff2 = pwr - num;
// If the difference between power and number is greater than or equal to
// the difference between last power and the number then store lastpower in pwr.

if (diff2 >= diff1) {
  pwr = lastpower;
}
console.log("The " + pwr + " is the power of 2 nearest to " + num + ".");
