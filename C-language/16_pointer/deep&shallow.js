// deep copy

// let a = 10;

// let b = a;

// console.log("a", a);
// console.log("b", b);

// b = 30;

// console.log("a", a);
// console.log("b", b);

// shallow copy

let person1 = {
  name: "alice",
  age: 23,
};

let person2 = person1;

console.log("person 1", person1);
console.log("person 2", person2);

person2.name = "charlie";

console.log("person 1", person1);
