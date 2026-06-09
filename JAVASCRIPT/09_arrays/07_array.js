let fruits = ["apple", "banana", "mango", "cherry"];

console.log("index of ", fruits.indexOf("mango"));

console.log("index of ", fruits.indexOf("grapes"));

console.log("includes method ", fruits.includes("grapes"));

console.log("includes method ", fruits.includes("cherry"));

let alphabets = ["a", "z", "c", "e", "f"];

console.log(alphabets.sort());

let numbers = [10, 50, 60, 70, 8, 9, 100];

// ascending
console.log(numbers.sort((a, b) => a - b));

// descending

console.log(numbers.sort((a, b) => b - a));
