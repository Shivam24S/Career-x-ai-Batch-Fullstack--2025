// charAt

let message = "hello";

console.log("Text", message);

console.log(message.charAt(4));

let greeting = "good morning";

console.log(message.concat(greeting));

console.log(message.endsWith("o"));
console.log(message.endsWith("s"));

console.log(message.startsWith("h"));

console.log(message.startsWith("s"));

console.log("greeting answer", greeting.startsWith("good"));

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes("fox"));

message = "hello hello good morning";

console.log("index of result", message.indexOf("hello"));

console.log("index of result", message.indexOf("z"));

console.log("last index of", message.lastIndexOf("n"));

console.log("length of message string", message.length);
