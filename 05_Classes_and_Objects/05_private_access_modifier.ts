// private
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let person1 = new Person("Shres");
// console.log(person1.name); // not accessible
// person1.introduce(); // not accessible

// private with inheritance
class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends User {
  private jobTitle: string;

  constructor(name: string, jobTitle: string) {
    super(name);
    this.jobTitle = jobTitle;
  }

  showJob() {
    // console.log(`${this.name} works as a ${this.jobTitle}`); // `this.name` is not accessible.
  }
}

let emp = new Employee("Shres", "Frontend Developer");
// console.log(emp.name); // not accessible
