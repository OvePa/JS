// Constructor function approach

// Create Constructor function for Shape
function Shape(name) {
  // Define private variable by using 'var' keyword
  // The variable _name will not be accessible outside
  var _name = name; // assign argument to variable _name
  // Create property getName using `this` and assign it to function
  // to return private variable _name
  this.getName = () => {
    return _name;
  };
}

// Create Constructor Function for Rectangle which is derived from Shape
function Rectangle(name, side1, side2) {
  // Define properties for parent Constructor function
  Shape.call(this, name);
  // Define public properties for Rectangle Constructor Function
  this.side1 = side1;
  this.side2 = side2;

  // Define method getArea
  this.getArea = () => {
    return this.side1 * this.side2;
  };
  // Define method isSquare
  this.isSquare = () => {
    return this.side1 === this.side2;
  };
}

// Inherit prototype property
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var obj = new Rectangle("Rectangle", 3, 4); // create Rectangle object
console.log(obj.name, obj.side1, obj.side2);
console.log("obj getName method:", obj.getName());
console.log("obj isSquare method:", obj.isSquare());
console.log("obj getArea method:", obj.getArea());
