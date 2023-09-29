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
}

var employee1 = new Employee("Mark", 12, "Manager"); // create Employee object
// Print Employee object assigned to employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`);
console.log(`employee1 company: ${employee1.company}`);
employee1.setAge(20); // call method to set age of employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`);
// Call printAge method for employee1
employee1.printAge();
