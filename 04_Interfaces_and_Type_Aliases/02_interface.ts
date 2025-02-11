interface User {
  id: number;
  email: string;
  password: string;
}

function getUser(userData: User) {}

// getUser(); // error
// getUser({ id: 1 }); // error
// getUser({ id: 1, email: "user@example.com" }); // error
getUser({ id: 1, email: "user@example.com", password: "123" }); // valid

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: boolean; // optional
}

function getProduct(productData: Product) {}

getProduct({ id: 101, name: "product_one", price: 100 }); // valid
getProduct({ id: 102, name: "product_two", price: 100, discount: true }); // valid
