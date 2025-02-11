/*
Extending Interfaces
In TypeScript, extending an interface allows us to create 
a new interface that inherits properties from an existing one. 
This helps in code reuse and makes the interface more scalable.
*/

interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

// User properties
function createUser(userData: User) {}
createUser({ name: "user", email: "user@example.com", password: "user123" });

// Admin along with User properties
function createAdmin(userData: Admin) {}
createAdmin({
  name: "user",
  email: "user@example.com",
  password: "user123",
  isAdmin: true,
});

// error
// createAdmin({
//   name: "user",
//   email: "user@example.com",
//   password: "user123",
// });
