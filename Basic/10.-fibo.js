function fibo(n) {
  if (n < 1) {
    console.log(
      "It seems the number of desired Fibonacci numbers has got an invalid value: " +
        n
    );
    return;
  } else {
    let fib = [0];
    if (n > 1) {
      fib[1] = 1;
    }
    let count = 2;
    while (count < n) {
      fib[count] = fib[count - 2] + fib[count - 1];
      count += 1;
    }
    return fib;
  }
}
let nterms = 10;
console.log(
  "First " + nterms + " terms of Fibonacci sequence are: " + fibo(nterms)
);
console.log("*** End of generating Fibonacci Numbers ***");
