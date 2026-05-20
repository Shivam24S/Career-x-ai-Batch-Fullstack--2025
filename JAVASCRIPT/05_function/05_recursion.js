function factorial(num) {
  if (num <= 0) {
    return "factorial for negative or zero not defined";
  } else if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));
