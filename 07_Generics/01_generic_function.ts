/*
Generics in TypeScript allow you to create reusable, type-safe code 
by enabling functions, classes, and interfaces to work with any data type 
while preserving the type information. 
*/

/*
Generic Function
A function that works with any type while maintaining type safety.
*/

function echo<T>(value: T) {
  console.log(value);
}

echo<number>(10);
echo<string>("Generic Function");

// Typescript automatically infers the type
echo(20); // number
echo("Good morning"); // string
