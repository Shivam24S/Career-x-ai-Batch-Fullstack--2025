const person1 = {
  name: "alice",
};

console.log("person 1 name", person1.name);

const person2 = person1;

console.log("person 2 name", person2.name);


person2.name = "charlie";

console.log("person 1 name", person1.name);
