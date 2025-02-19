/*
Access Modifier
Access modifiers control the visibility of class
properties and methods.
- public: Accessible from anywhere. If no access modifier is specified, it is implicitly public.
- private: Accessible only within the class.
- protected: Accessible within the class and its subclasses. 
*/

// public
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let person1 = new Person("Shres");
console.log(person1.name); // accessible
person1.introduce(); // accessible

// public with inheritance
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends User {
  public jobTitle: string;

  constructor(name: string, jobTitle: string) {
    super(name);
    this.jobTitle = jobTitle;
  }

  showJob() {
    console.log(`${this.name} works as a ${this.jobTitle}`);
  }
}

let emp = new Employee("Shres", "Frontend Developer");
console.log(emp.name); // accessible
emp.showJob(); // accessible
