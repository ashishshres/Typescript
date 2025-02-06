/*
Tuples
A tuple in TypeScript is a fixed-length array where each element has a specific type. 
Unlike normal arrays, tuples enforce a strict order and type for each element.
*/

let user: [number, string, boolean] = [1, "Ashish", true];
// user = [1, "Ashish"]; // Type '[number, string]' is not assignable to type '[number, string, boolean]'.
user[0] = 2; // Allowed
user[1] = "Shres"; // Allowed
// user[2] = "Yes"; // Type 'string' is not assignable to type 'boolean'.

// Tuple with optional elements
let newUser: [number, string, boolean?] = [1, "Ashish", true];
newUser = [1, "Shres"]; // valid

let nextUser: [number, string?, boolean?] = [1, "Ashish", true];
nextUser = [1]; // valid

// Named tuples
let student: [name: string, age: number, isEnrolled: boolean] = [
  "Shres",
  21,
  true,
];

console.log(student[0]); // "Shres"
console.log(student[1]); // 21
console.log(student[2]); // true

// TypeScript allows using .push(), but it doesn't enforce the tuple's fixed structure.
let person: [string, number, boolean] = ["Ashish", 21, false];
person.push("Extra value"); // Allowed (but not recommended)
console.log(person); // ["Ashish", 20, true, "Extra value"]
// console.log(person[3]); // Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
