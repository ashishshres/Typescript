/*
Union
A union type allows a variable to hold multiple possible types. 
It means the value can be one of the specified types.
*/

type Status = "success" | "error" | "loading";

let requestStatus: Status;
requestStatus = "success"; // valid
requestStatus = "error"; // valid
requestStatus = "loading"; // valid
// requestStatus = "pending"; // Type '"pending"' is not assignable to type 'Status'.

type ID = string | number;

let userId: ID;
userId = 123; // valid
userId = "abc123"; // valid
// userId = true; // Type 'boolean' is not assignable to type 'ID'.
