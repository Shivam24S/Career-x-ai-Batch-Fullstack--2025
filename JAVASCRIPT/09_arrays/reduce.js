let price = [100, 20, 50, 60, 70, 80, 90];

let total = price.reduce((acc, curr) => (acc += curr), 0);

console.log("total", total);

const shoppingItems = [
  {
    name: "faceWash",
    price: 150,
    qty: 2,
  },
  {
    name: "biscuit",
    price: 100,
    qty: 3,
  },
  {
    name: "soap",
    price: 80,
    qty: 5,
  },
  {
    name: "shoes",
    price: 5000,
    qty: 2,
  },
];

const totalPrice = shoppingItems.reduce(
  (acc, curr) => (acc += curr.price * curr.qty),0
);

console.log("total price", totalPrice);
