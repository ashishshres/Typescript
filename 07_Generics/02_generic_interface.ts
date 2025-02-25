/*
Generic Interface
Interfaces with generics allow for flexible data structures.
*/

interface Student<T> {
  sid: number;
  sname: string;
  key: T;
}

function addStudent(obj: Student<string>) {
  //
}

addStudent({ sid: 101, sname: "Shikshya", key: "s3a6mai0nsh24" });
