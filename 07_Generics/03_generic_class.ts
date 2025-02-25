/*
Generic Class
A class that can handle any type while keeping type consistency.
*/

class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContents()); // 100

const stringBox = new Box<string>("Hello Shikshya!");
console.log(stringBox.getContents()); // Hello Shikshya!
