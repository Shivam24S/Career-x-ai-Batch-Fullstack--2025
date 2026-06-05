const fruits = ["apple", "banana", "mango", "litchi", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of

for (let element of fruits) {
  console.log(element);
}

// for each

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((num) => {
  console.log(num * num);
});

// we can't use return in forEach

let result = numbers.forEach((num) => {
  return num * num;
});

console.log("result", result);

// concat

console.log("fruits array", fruits);

let vegetable = ["potato", "tomato", "chilli", "onion"];

const shopItem = fruits.concat(vegetable);

console.log("shop item array", shopItem);

// toString

console.log("num array", numbers);

console.log("converting num into string", numbers.toString());
