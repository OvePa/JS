class Employee {
  constructor(_name, _age, _designation) {
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
  // Methods defined outside the constructor
  printAge() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  static compareAge(employee_1, employee_2) {
    return employee_1.age - employee_2.age;
  }
}

var employee1 = new Employee("Mark", 12, "Manager"); // create Employee object
var employee2 = new Employee("Tom", 30, "Accountant"); // create Employee object
// Check for compareAge method for an employee object
console.log("employee1 objects method 'compareAge:'", employee1.compareAge);
console.log("Employee class method 'compareAge:'", Employee.compareAge);
// Call method
console.log("compareAge method:", Employee.compareAge(employee2, employee1));
