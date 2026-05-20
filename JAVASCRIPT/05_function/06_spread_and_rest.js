let fruits = ["apple", "banana", "mango", "cherry"];

let anotherFruits = [...fruits];

console.log("another fruits", anotherFruits);

// now using in function

function movies(...movies) {
  console.log("i have these movies available ", ...movies);
}

movies("3 idiots", "saiyara", "pk");

let person = {
  name: "alice",
  age: 20,
  city: "bvn",
};

console.log("before person values changed", person);

person.name = "bob";


console.log("after person values changed", person);
