/*
Intersection
An intersection type combines multiple types into one unified type. 
A value of an intersection type must satisfy all the combined types.
*/

type User = {
  name: string;
  email: string;
};

type Admin = User & {
  getDetails(userId: number): void;
};

function createAdmin(user: Admin) {
  user.getDetails(123);
  user.name = "user";
  user.email = "user@example.com";
}
