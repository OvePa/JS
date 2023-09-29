/*
Hiding properties in a class
To hide properties in a class, we replace a variable definition from this.property to var property int the constructor function. Through this, the property variable would be accessible only inside the constructor function. The variable will also not be accessible to other methods defined in the class body.
*/
class Employee {
  constructor(name, age, designation) {
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
  // Methods defined outside the constructor
}

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object

// Print Employee object assigned to employee1's age
console.log("employee1 age:", employee1.age, employee1.age);
employee1.printAge(); // Print Age
