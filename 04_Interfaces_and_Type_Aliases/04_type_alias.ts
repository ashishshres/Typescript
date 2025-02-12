/*
Type Alias
In TypeScript, a type alias is used to create a new name for a type, 
making it easier to read and reuse complex types. 
*/

type ID = string;
let userId: ID = "12345";

type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "user",
  email: "user@example.com",
};
