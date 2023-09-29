let vehicle = { wheels: 4 }; // object assigned to variable named vehicle
let car = {
  seats: 5,
  __proto__: vehicle, // __proto__ property assigned to vehicle
}; // object assigned to variable named car
let bmw = {
  price: 50000,
  owner: "Bob",
  __proto__: car, // __proto__ property assigned to car (inherits car)
}; // object assigned to variable named bmw
// Print all properties of bmw object
console.log("BMW price:", bmw.price);
console.log("BMW owner:", bmw.owner);
console.log("BMW seats:", bmw.seats);
console.log("BMW wheels:", bmw.wheels);
