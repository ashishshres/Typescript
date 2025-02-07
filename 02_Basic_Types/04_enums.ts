/*
Enums
Enums (enumerations) in TypeScript are a way to define a set of named constants, making code more readable and maintainable. 
TypeScript provides both numeric and string enums.
*/

// numeric enum
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}

let favoriteColor: Color = Color.Green; // 1
console.log(favoriteColor); // 1

// string enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

console.log(Status.Approved); // APPROVED

// custom values
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

console.log(Size.Medium); // 2
console.log(Size[2]); // Medium
console.log(Size[3]); // Large
