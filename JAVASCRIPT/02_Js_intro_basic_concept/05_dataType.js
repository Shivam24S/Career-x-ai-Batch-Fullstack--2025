//1. string ->textual data

let name = "alice";

console.log(name);

// typeOf operator is used to check dataTypes of operator

console.log("type of name is ", typeof name);

// using single quat

name = "charlie";

console.log(name);

// 2. Number

let num = 10;

console.log("num value", num);

console.log("type of num is ", typeof num);

num = "10";
console.log("type of num is ", typeof num);

// 3. Boolean

let answer = true;

console.log("answer", answer);

console.log("type of answer is ", typeof answer);

answer = false;
console.log("type of answer is ", typeof answer);

// 4. undefined -> work as placeholder in memory it will occupy space in memory but value haven't assign yet

let a;
console.log("a value", a);

console.log("type of a ", typeof a);

let b = undefined;

console.log(b);

// 5. null

let marks = null;

console.log("marks", null);

console.log("type of null", typeof marks);

// 6.  bigInt

let bigNumber = 900719925124740999n;

console.log("big numbers", bigNumber);

console.log("type of bigNumber", typeof bigNumber);

// 7. symbol

let id = Symbol("id");

console.log("id", id);

console.log("type of id", typeof id);

// 8. object

let person = { name: "alice" };

console.log("person", person);

console.log("type of person", typeof person);

let fruits = ["apple", "banana", "mango"];
let fruits = ["apple", "banana", "mango", 1, true];

console.log("fruits items are", fruits);

console.log(typeof fruits);
