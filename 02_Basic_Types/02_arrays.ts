/*
Arrays
In TypeScript, an array is a data structure used to store multiple values of the same type. 
TypeScript provides strong typing for arrays, allowing better code reliability and error detection.
*/

let arr = [2, 4, 6, 8]; // number
// arr = ["apple", "banana", "cherry"]; // Type 'string' is not assignable to type 'number'.
let arrTwo = [1, "ashish"]; // number or string
arrTwo = [1, 2, 3]; // valid
arrTwo = ["apple", "banana"]; // valid
// arrTwo = [true]; // Type 'boolean' is not assignable to type 'string | number'.

// type[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Bishal", "Aryan", "Shikshya"];

// Array<type>
let evenNumbers: Array<number> = [2, 4, 6, 8];
let users: Array<string> = ["ashish", "shres"];

// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Mixed-type arrays
let mixed: (number | string)[] = [1, "ashish"];
