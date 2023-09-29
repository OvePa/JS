// Class approach
// Create Class for Shape
class Shape {
  // create consstructor with one argument "name"
  constructor(name) {
    // Define private variable by using 'var' keyword
    // The variable _name will not be accessible outside
    var _name = name; // assign argument to variable _name
    // Create property getName using `this` and assign it to function
    // to return private variable _name
    this.getName = () => {
      return _name;
    };
  }
}
// Create Claass for Rectangle which is derived from Shape
class Rectangle extends Shape {
  // create consstructor with one argument "name", "side1" and "side2"
  constructor(name, side1, side2) {
    // Define properties for parent class
    super(name);
    // Define public properties for Rectangle class
    this.side1 = side1;
    this.side2 = side2;
  }
  // Define method getArea
  getArea() {
    return this.side1 * this.side2;
  }
  // Define method isSquare
  isSquare() {
    return this.side1 === this.side2;
  }
}

var obj = new Rectangle("Rectangle", 3, 4); // create Rectangle object
console.log(obj.name, obj.side1, obj.side2);
console.log("obj getName method:", obj.getName());
console.log("obj isSquare method:", obj.isSquare());
console.log("obj getArea method:", obj.getArea());
