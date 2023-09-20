let n = 5; // The number of prime numbers to be stored
if (n < 1) {
  //checks for the validity of input
  console.log(
    "It seems the number of desired prime numbers has got an invalid value: " +
      n
  );
} else {
  let p = Array(n).fill(2); //generate an array to store n values with initial value of 2 for all elements
  let pcount = 0;
  let v = p[pcount] + 1; // the value to be tested
  while (pcount < n - 1) {
    // loop for number of generated values
    let r = pcount + 1;
    let i = 0;
    let pflag = 0;
    while (i <= pcount && pflag == 0) {
      // loop for testing v against each prime number p[i]
      if (v % p[i] == 0) {
        v += 1; // current v is not a prime number, generate next value to be tested
        pflag = 1; // flag to stop the inner loop
      } else {
        i += 1; // move forward the index in the list of prime numbers
      }
    }
    if (pflag == 0) {
      // check flag after finishing the inner loop
      pcount += 1; // increment pcount, we found next prime number
      p[pcount] = v; // store the next prime number at next position in the list
    }
  }
  console.log(p);
}
/*
In the above code:

The variable n shows the total number of prime numbers.

The first if statement specifies that the value of n shouldn’t be less than 1.

We create an array of n values (i.e., Array(n)). The syntax Array(n).fill(2) is used to create an array of n elements, each having a value of 2.

We use two nested while loops.

The outer loop counts the number of generated prime numbers.

The inner loop keeps generating sequential integers until the next prime number is found.

We use the following variables:

n stores the total number of prime numbers.

p stores the generated prime numbers.

pcount keeps track of the most recently generated prime number.

v stores the next number to be tested.

i iterates through the array of prime numbers generated so far.

pflag indicates whether the current number is prime.

The comments in the program itself will help explain the rest of the code.
*/
