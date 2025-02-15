/* 
 A class can inherit properties and methods from
 another class using extends.
*/

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(): void {
    console.log("I am from Animal class.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Woof! Woof!
myDog.describe(); // I am from Animal class.
