/*
Hiding properties in a constructor function
To hide properties in a constructor function, we simply replace a variable definition from this.property to var property. Doing this, the property variable becomes accessible only inside the constructor function.
*/
function Employee(name, age, designation) {
  // Properties assignment passed as arguments
  this.name = name;
  var _age = age;
  this.designation = designation;
  // Method
  this.setAge = (newage) => {
    console.log(`setting age from ${_age} to ${newage}`);
    _age = newage;
  };
  this.printAge = () => {
    console.log(`${this.name} is ${_age} years old`);
  };
  // Property assigned by constructor function
  this.company = "Amazon";
}

Employee.planet = "Earth"; // try adding property planet

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object

// Print Employee object assigned to employee1 and employee2
console.log("employee1 age:", employee1.age, employee1._age);
employee1.printAge(); // Print Age
