class Human {
  constructor(_name, _age) {
    // Properties assignment passed as arguments
    this.name = _name;
    this.age = _age;
    // Property assigned by constructor function
    this.arms = 2;
    this.legs = 2;
  }
}

class Employee extends Human {
  constructor(_name, _age, _designation) {
    // Properties assignment passed as arguments
    // this.name = _name;
    // this.age = _age;
    super(_name, _age); // use super to use properties from Human class
    this.designation = _designation;
    // Property assigned by constructor function
    this.company = "Amazon";
  }
  // Method
  setAge(newage) {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  }
}

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// print objects
console.log(employee1.name, " is ", employee1.age);
console.log(employee1.name, " has ", employee1.arms, " arms");
