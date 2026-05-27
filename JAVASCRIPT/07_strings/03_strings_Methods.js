let strings = "javascript learning";

console.log("string into array ", strings.split(""));
console.log("string into array with space ", strings.split(" "));

console.log(strings.split("a"));

// substring

console.log("string=>", strings);

console.log(strings.substring(2, 6));
console.log(strings.substring(6, 2));
console.log(strings.substring(-1));

// toUpperCase

let message = "hello";

console.log(message.toUpperCase());

message = "HELLO";
console.log(message.toLowerCase());

strings = "        goodMorning        ";

console.log("the length of string is ", strings.length);

// trim remove the whitespaces

console.log("trim text with white spaces", strings);

console.log("trim start", strings.trimStart());

console.log("trim end", strings.trimEnd());

console.log("trim end", strings.trim());
