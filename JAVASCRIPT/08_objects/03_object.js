// object destructure

const bikeDetail = {
  name: "ninja h2",
  brand: "kawasaki",
  engine: "1000cc",
  model: 2026,
};

console.log("bike name", bikeDetail.name);

console.log("bike brand name", bikeDetail.brand);

// using destructure method

const { name, brand, engine, model } = bikeDetail;

console.log("bike name", name);

console.log("bike brand name", brand);

// student data

const student1 = {
  name: "alice",
  grId: 123,
  course: "fsd",
};

const student2 = {
  name: "charlie",
  grId: 1234,
  course: "ui/ux",
};

function student(name, grId, course) {
  this.name = name;
  this.grId = grId;
  this.course = course;
}

const student3 = new student("micheal", 321, "graphic");
const student4 = new student("franklin", 3214, "video editing");
const student5 = new student("trevor", 1231, "ai/ml");

console.log("student 1 detail", student1);
console.log("student 2 detail", student2);
console.log("student 3 detail", student3);
console.log("student 4 detail", student4);
console.log("student 5 detail", student5);

// now adding more properties to student5;

student5.block = "A";

console.log("student 5 detail after adding properties", student5);

console.log((student.prototype.email = "student@gmail.com"));

// delete

delete student5.block;

console.log("student 5 detail after delete properties", student5);

// hasOwnProperty

// true and false as answer

console.log(student5.hasOwnProperty("course"));

// false

console.log(student5.hasOwnProperty("job"));

// for in loop

for (let key in student1) {
  console.log(key, student1[key]);
}
