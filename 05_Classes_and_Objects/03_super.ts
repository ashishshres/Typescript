/*
The `super` keyword is used to call the parent class constructor or methods.
*/

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

class Student extends Person {
  id: number;

  constructor(id: number, name: string) {
    super(name); // call Person constructor
    this.id = id;
  }

  introduce(): void {
    super.introduce(); // call Person method
    console.log(`My id is ${this.id}`);
  }
}

const student = new Student(101, "Shres");
student.introduce();
// Output:
// Hi, I'm Shres.
// My id is 101.
