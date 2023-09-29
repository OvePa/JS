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
// Print Employee objects prototype objects
console.log(
  `employee protoypes: ${employee1.__proto__}, ${employee2.__proto__}`
);
console.log(
  `protoype equalities: ${employee1.__proto__ === employee2.__proto__}`
);
console.log(
  `protoype equalities: ${Employee.prototype === employee2.__proto__}`
);
console.log(Employee, Employee.__proto__, Employee.prototype);
