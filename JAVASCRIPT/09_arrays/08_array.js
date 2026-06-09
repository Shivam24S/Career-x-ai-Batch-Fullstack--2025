let peopleAge = [10, 20, 30, 40, 50, 60];

console.log(
  "age greater than 40=>",
  peopleAge.find((age) => age > 40),
);

// findIndex

console.log(
  "find the index of age greater then 40=>",
  peopleAge.findIndex((age) => age > 40),
);

console.log(
  "age greater than 10 =>",
  peopleAge.every((age) => age >= 10),
);
