var raw_arr = [
  [
    { name: "NewYork", population: 8623000, temp: 6.0, currency: "USD" },
    { name: "Boston", population: 685094, temp: 2.0, currency: "USD" },
    { name: "Los Angeles", population: 4000000, temp: 13.0, currency: "USD" },
  ],
  [
    { name: "San Francisco", population: 884363, temp: 12.0, currency: "USD" },
    null,
    { name: "Charlottesville", population: 48019, temp: 8.0, currency: "USD" },
  ],
  [
    null,
    { name: "Seattle", population: 724745, temp: 4.0, currency: "USD" },
    null,
  ],
]; // initialise the two-dimensional array of objects

var ans = 0; // initialise ans to 0 (Sum of population)

// Iterate raw_arr in the following loop
for (var i = 0; i < raw_arr.length; i++) {
  // Iterate the array at each index i of raw_arr
  for (var j = 0; j < raw_arr[i].length; j++) {
    // For each element at row i and column j
    // Check the following conditions
    if (raw_arr[i][j] !== null) {
      // Check if not null
      if (raw_arr[i][j]["temp"] <= 10.0) {
        // Check if less or equal to 10
        ans += raw_arr[i][j]["population"]; // if satisfied, add to ans
      }
    }
  }
}

console.log("final ans:", ans);
