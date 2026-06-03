const vegetables = ["potato", "tomato", "carrot"];

console.log("vegetables", vegetables);

// adding element from start

// vegetables.unshift("chilli");

// console.log("vegetable after adding new element at first index", vegetables);

// manually

let length = 0;

for (let elements of vegetables) {
  length++;
}

console.log("length", length);

console.log("vegetables before", vegetables);

let count = 1;

for (let i = length - 1; i >= 0; i--) {
 

  vegetables[i + 1] = vegetables[i];
}

vegetables[0] = "cabbage";

console.log("vegetables", vegetables);
