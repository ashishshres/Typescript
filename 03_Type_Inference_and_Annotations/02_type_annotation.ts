/*
Type Annotations
Type annotations in TypeScript allow us to explicitly specify 
the type of variables, function parameters, return values, and more.
*/

let message: string = "Hello, TypeScript!";
let age: number = 20;
let isStudent: boolean = true;

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function add(a: number, b: number): number {
  return a + b;
}

let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let mixed: (number | string)[] = [1, "hello", 3];

let user: { name: string; age: number; isStudent: boolean } = {
  name: "Ashish",
  age: 20,
  isStudent: true,
};

let id: number | string;
id = 123; // allowed
id = "ABC123"; // allowed
// id = true; // error

let person: [string, number] = ["Ashish", 20];
// person = [20, "Ashish"]; // error

enum Role {
  Admin,
  User,
  Guest,
}

let myRole: Role = Role.Admin; // myRole = 0

let data: any = 42;
data = "Now a string"; // no error
data = true; // no error

function logMessage(): void {
  console.log("This function returns nothing.");
}
