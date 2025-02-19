/*
Default Parameters
Parameters with pre-defined values that are used 
if no argument is passed during function invocation.
*/

function greet(name: string, age: number = 21): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet("Ashish")); // Hello, Ashish. You are 21 years old.
console.log(greet("Shikshya", 22)); // Hello, Shikshya. You are 22 years old.
