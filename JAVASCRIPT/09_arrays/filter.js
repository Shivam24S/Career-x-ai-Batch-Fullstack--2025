let numbers = [10, 5, 0, 60, 70, 23, 11, 9, 6, 7];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const result = numbers.filter((num) => num > 20);

console.log("number greater than 20 ", result);

console.log("even numbers", evenNumbers);
console.log("original array", numbers);

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

console.log(
  "age greater than 60=>",
  personDetails.filter((p) => p.age > 60),
);

const paisa = [100, 50, 200, 500];

const note = paisa.filter((num) => num >= 200);

console.log("note", note);
