/*
Unknown
In TypeScript, `unknown` is a safer alternative to `any` because it forces type checking before you can use a value. It is often used when we don't initially know the type of a value but want to ensure type safety later.
*/

let value: unknown;
value = 2;
value = "hello";
value = true;

// this will throw an error because TypeScript doesn't know `value` type
// console.log(value.toUpperCase());

// we must check the type before using it
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
