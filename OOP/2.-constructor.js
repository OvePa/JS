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

Employee.planet = "Earth"; // try adding property planet

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
var employee2 = new Employee("Bob", 30, "Accountant"); // create Employee object

employee1.gender = "male"; // add property gender
// Print Employee object assigned to employee1 and employee2
console.log(`employee names: ${employee1.name}, ${employee2.name}`);
console.log(`employee planet: ${employee1.planet}, ${employee2.planet}`);
console.log(`employee gender: ${employee1.gender}, ${employee2.gender}`);
