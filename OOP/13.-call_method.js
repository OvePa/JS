function Human(_name, _age) {
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  // Property assigned by constructor function
  this.arms = 2;
  this.legs = 2;
}

function Employee(_name, _age, _designation) {
  // Properties assignment passed as arguments
  Human.call(this, _name, _age);
  this.designation = _designation;
  // Method
  this.setAge = (newage) => {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  };
  // Property assigned by constructor function
  this.company = "Amazon";
}
Employee.prototype = Object.create(Human.prototype); // assign human prototype
Employee.prototype.constructor = Employee; // create constructor property

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// create new property in the prototype object for all objects to inherit
Employee.prototype.gender = "male";
Human.prototype.feet = 2;
// print objects
console.log(employee1.name, " is ", employee1.gender);
console.log(employee1.name, " is ", employee1.age);
console.log(employee1.name, " has ", employee1.arms, " arms");
console.log(employee1.name, " has ", employee1.feet, " feet");
