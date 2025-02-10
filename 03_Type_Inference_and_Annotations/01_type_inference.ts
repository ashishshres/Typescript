/*
Type Inference
Type inference in TypeScript refers to the compiler's ability to automatically 
determine the type of a variable, function return, or expression without explicit 
type annotations.
*/

let message = "Hello, TypeScript!"; // inferred as string
let age = 20; // inferred as number
let isStudent = true; // inferred as boolean

// age = "twenty"; // type 'string' is not assignable to type 'number'.

function add(a: number, b: number) {
  return a + b; // TypeScript infers return type as 'number'
}

let numbers = [1, 2, 3, 4]; // inferred as number[]
let mixed = [1, "hello", true]; // inferred as (string | number | boolean)[]

let user = {
  name: "Ashish",
  age: 20,
  isStudent: true,
};
// Inferred as { name: string; age: number; isStudent: boolean }

// user.address = "Nepal"; // Property 'address' does not exist on type '{ name: string; age: number; isStudent: boolean; }'.
