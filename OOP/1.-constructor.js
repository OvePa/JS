function Employee(_name, _age, _designation) {
  this.name = _name;
  this.age = _age;
  this.designation = _designation;
  this.setAge = (newage) => {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  };
  this.company = "Amazon";
}

let employee1 = new Employee("Mark", 12, "Manager");
console.log(`employee1 name: ${employee1.name} age:${employee1.age}`);
console.log(`employee1 company: ${employee1.company}`);
employee1.setAge(20);
console.log(`employee1 name: ${employee1.name} age:${employee1.age}`);

employee1.gender = "male";

console.log(`employee1 gender: ${employee1.gender}`);
