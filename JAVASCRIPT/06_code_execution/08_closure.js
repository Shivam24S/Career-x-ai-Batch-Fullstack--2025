function count() {
  let countValue = 0;

  function increment() {
    return countValue++;
  }

  return increment;
}

let counter = count();

console.log(counter());
console.log(counter());
console.log(counter());
