/*
TypeScript supports object-oriented programming (OOP)
with classes and objects, similar to JavaScript but with
strong typing and additional features like access
modifiers, inheritance, and interfaces.
*/

/* 
Class
- A class is a blueprint for creating objects. 
- It can have properties, constructors, and methods.
*/

class Bottle {
  // properties
  color: string;
  size: number;

  /*
  Constructor
  A special method inside a class that is automatically called 
  when an object of the class is created. 
  */
  constructor(color: string, size: number) {
    this.color = color;
    this.size = size;
  }

  // method
  message(): void {
    console.log(
      `Bottle with ${this.color} color and ${this.size} size is created.`
    );
  }
}

// creating an object (instance of the class)
const bottleOne = new Bottle("white", 2);
bottleOne.message(); // Bottle with white color and 2 size is created.

const bottleTwo = new Bottle("transparent", 3);
bottleTwo.message(); // Bottle with transparent color and 3 size is created.
