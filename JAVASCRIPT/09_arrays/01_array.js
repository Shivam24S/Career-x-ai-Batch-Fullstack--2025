// array literals syntax

const vegetables = ["potato", "tomato", "chilli"];

console.log("vegetables", vegetables);

console.log("type of an array is ", typeof vegetables);

// now using array constructor

const fruits = new Array("mango", "banana", "water melon");

console.log("fruits are ", fruits);

// accessing the array elements

console.log("the first element of fruit array is ", fruits[0]);

// length

console.log("length of fruits array is ", fruits.length);

console.log("the last element of fruits array is ", fruits[fruits.length - 1]);

// update

fruits[0] = "strawberry";

console.log("updated fruits data are ", fruits);

// push =>  adding element in the the array

console.log("fruits are before", fruits);

fruits.push("pineapple");

console.log("fruits are after", fruits);
