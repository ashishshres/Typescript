/*
Primitives
In TypeScript, primitives are the fundamental data types that represent simple values.
These are the same as JavaScript's primitive types but with TypeScript's added type safety.
*/

// string
let myName = "Ashish";
// myName = 10; // Type 'number' is not assignable to type 'string'.
let newName: string = "Shres"; // explicitly

// number
let age = 21;
// age = "twenty-one"; // Type 'string' is not assignable to type 'number'.
let price: number = 499.0;

// boolean
let isStudent = true;
// isStudent = 0; // Type 'number' is not assignable to type 'boolean'.
let isLogged: boolean = false;

// bigint
let largeNumber = 9007199254740991n;
let bigNumber: bigint = 9007199254740991n;

// symbol
let myKey = Symbol("id");
let uniqueKey: symbol = Symbol("id");

// null
let data = null;
let emptyValue: null = null;

// undefined
let value = undefined;
let newValue: undefined = undefined;
