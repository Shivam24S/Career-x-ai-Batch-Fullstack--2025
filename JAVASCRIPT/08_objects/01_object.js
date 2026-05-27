// using object literals syntax

const person = {
  name: "alice",
  age: 20,
  address: "BVN",
};

console.log("person detail", person);

console.log("type", typeof person);

// using object constructor

const student = new Object();

console.log("student", student);

student.name = "alice";

student.grId = 12345;

student.course = "fsd";

console.log("student detail", student);

console.log(typeof student);
