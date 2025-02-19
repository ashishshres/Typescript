/*
Optional Parameters
Parameters marked with ?, allowing them to be omitted 
when calling the function.
*/

function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}!`;
}

console.log(greet("Ashish")); // Hello, Ashish!
console.log(greet("Shikshya", 21)); // Hello, Shikshya. You are 21 years old.
