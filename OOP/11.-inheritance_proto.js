function Employee(_name, _age, _designation) {
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  this.designation = _designation;
  // Method
  this.setAge = (newage) => {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  };
  // Property assigned by constructor function
  this.company = "Amazon";
}

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
var employee2 = new Employee("Bob", 30, "Accountant"); // create Employee object
// create new property in the prototype object for all objects to inherit
Employee.prototype.gender = "male";

// print objects
console.log(employee1.name, " is ", employee1.gender);
console.log(employee2.name, " is ", employee2.gender);
