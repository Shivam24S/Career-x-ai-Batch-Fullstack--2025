// pop

let vegetables = ["potato", "tomato", "carrot"];

console.log("vegetables array before", vegetables);

console.log(vegetables.pop());

console.log(
  "vegetable array after removing the last element from an array",
  vegetables,
);

// shift

console.log("vegetable array now", vegetables);

console.log(vegetables.shift());

console.log("after removing first element of an array", vegetables);

// splice

vegetables = ["potato", "tomato", "carrot"];

console.log("vegetables value", vegetables);

// vegetables.splice(2, 0, "chilli", "redis");

vegetables.splice(2, 1, "chilli", "redis");

console.log("vegetables value  after", vegetables);

// length

console.log("vegetables length", vegetables.length);

// now increase the length

vegetables.length = 10;

console.log(
  "vegetables length and and vegetable",
  vegetables.length,
  vegetables,
);


// now decrease the length 


vegetables.length =2;

console.log(
  "vegetables length and and vegetable",
  vegetables.length,
  vegetables,
);
