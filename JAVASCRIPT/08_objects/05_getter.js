// const personDetail = {
//   firstName: "alice",
//   lastName: "johnson",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log("person full Name", personDetail.fullName);

class PersonDetail {
  constructor(firstName, lastName) {
    ((this.firstName = firstName), (this.lastName = lastName));
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new PersonDetail("charlie", "johnson");

const person2 = new PersonDetail("dexter", "morgan");

console.log("person 1 detail", person1);
console.log("person 2 detail", person2);


console.log("person 1 fullName detail",person1.fullName)

console.log("person 2 fullName detail",person2.fullName)
