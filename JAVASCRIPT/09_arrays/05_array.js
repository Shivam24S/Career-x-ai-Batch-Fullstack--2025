const fruits = ["apple", "banana", "cherry", "mango"];

console.log("fruits", fruits);

console.log("array to string :-", fruits.join(""));

// flat

let numbers = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]];

console.log("number arrays", numbers);

console.log("flatten array", numbers.flat());

numbers = [1, 2, [3, 4, [5, 6, [7, 8, [10]]]]];

console.log("nested array", numbers.flat(3));

numbers = [1, 2, [3, 4, [5, 6, [7, 8, [10, [11, [12, 13, [14]]]]]]]];

console.log("nested array", numbers.flat(Infinity));

// slice

console.log("fruits array", fruits);

console.log("slice",fruits.slice(1,3))
