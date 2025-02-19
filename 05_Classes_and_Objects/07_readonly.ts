/*
Readonly
- Allows reading but not writing after initialization.
- Can be used with public, private, or protected.
*/

class Person {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let person1 = new Person(101, "Shres");
console.log(person1.id); // allowed
// person1.id = 102; // Cannot assign to 'id' because it is a read-only property.

// with inheritance
class User {
  protected readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Admin extends User {
  constructor(id: number) {
    super(id);
  }

  showId() {
    console.log(`User ID: ${this.id}`); // allowed inside subclass
  }
}

let admin = new Admin(202);
admin.showId(); // allowed
// admin.id = 303; // Cannot modify readonly property
