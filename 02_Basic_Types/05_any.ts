/*
Any
In TypeScript, the `any` type is used to represent `any` kind of value without enforcing a specific type. It allows us to store values of `any` type in a variable. However, using `any` essentially disables TypeScript's type checking for that variable, which can lead to potential issues since it bypasses the type safety that TypeScript is known for.
*/

let something: any = 10;

something = 42; // number
something = "Hello!"; // string
something = true; // boolean
something = { name: "John" }; // object
