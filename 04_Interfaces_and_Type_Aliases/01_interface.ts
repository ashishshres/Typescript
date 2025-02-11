/*
Interface
An interface in TypeScript is a way to define the structure of an object, 
specifying what properties and methods it must have. Interfaces improve 
code readability, maintainability, and type safety.
*/

interface User {
  name: string;
  age: number;
  isStudent: boolean;
}

let user: User = {
  name: "Ashish",
  age: 20,
  isStudent: true,
};

// let user: User = {
//   name: "Ashish",
//   age: 20,
//   isStudent: true,
//   isPresent: true, // 'isPresent' does not exist in type 'User'.
// };
