// 1. arithmetic operators

let a = 10;

let b = 5;

console.log("addition", a + b);
console.log("subtraction", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("modulus", a % b);
console.log("exponential", a ** b);

// 2. assignment operators

a = 20;

console.log("add and assign", (a += 20));
console.log("minus and assign", (a -= 20));
console.log("multiplication and assign", (a *= 20));

// 3. comparison operator

a = 30;

b = 40;

console.log("equal", a == b);
console.log("not equal", a != b);
console.log("less than ", a < b);
console.log("greater than ", a > b);
console.log("less or equal ", a <= b);
console.log("greater or equal ", a >= b);

b = "30";

console.log("equal", a == b);
console.log("strictly equal", a === b);

// 4. logical operator

let trueVariable = true;

let falseVariable = false;

// and && => both condition must be true

console.log("and result", trueVariable && falseVariable);

// or || => only one condition must be true

console.log("or result", trueVariable || falseVariable);

// not != =>

console.log("not result", !trueVariable);

// 5.unary

a = 24;

console.log("current variable value", a);

// pre increment;

console.log("pre increment", ++a);

// post increment;
console.log("post increment", a++);

// pre decrement

console.log("pre decrement", --a);

// post decrement

console.log("post decrement", a--);
console.log("current variable value", a);

// 6. miscellaneous operator

console.log("type of a", typeof a);

// ternary operator

a > b ? console.log("a is greater") : console.log("b is greater");
