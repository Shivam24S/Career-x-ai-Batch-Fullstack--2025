let TicketDetails = {
  name: "Alice",
  age: 20,
  price: 2000,
  venue: "abcd hall",
};

// console.log(TicketDetails.name);

// using for in loops

for (let key in TicketDetails) {
  console.log(TicketDetails[key]);
}
