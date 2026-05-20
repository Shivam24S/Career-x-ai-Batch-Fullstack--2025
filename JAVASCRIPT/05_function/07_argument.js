function sumOfNumbers() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("total", sum);
}

sumOfNumbers(1, 2, 3, 45, 5, 6, 4, 5, 6, 5, 4, 14);
