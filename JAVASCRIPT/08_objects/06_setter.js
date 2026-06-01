class PersonDetail {
  constructor(name) {
    ((this.name = name), this.age);
  }

  set setPersonAge(age) {
    if (age < 18) {
      return console.log("age must be greater than 18");
    }
    this.age = age;
  }
}

const person1 = new PersonDetail("alice");

person1.setPersonAge = 19;

console.log("person 1  detail", person1);

console.log("person 1  detail age", person1.age);
