// protected
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let person1 = new Person("Shres");
// console.log(person1.name); // not accessible
// person1.introduce(); // not accessible

// protected with inheritance
class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends User {
  protected jobTitle: string;

  constructor(name: string, jobTitle: string) {
    super(name);
    this.jobTitle = jobTitle;
  }

  showJob() {
    console.log(`${this.name} works as a ${this.jobTitle}`); // `this.name` is accessible
  }
}

let emp = new Employee("Shres", "Frontend Developer");
// console.log(emp.name); // not accessible
console.log(emp.showJob());
