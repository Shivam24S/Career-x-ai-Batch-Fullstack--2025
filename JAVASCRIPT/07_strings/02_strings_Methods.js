let message = "good good morning";

console.log("match result", message.match("good"));

console.log("match result", message.match("xyz"));

console.log(message.repeat(2));

console.log(message.replace("g", "G"));

console.log(message.replace("g", ""));

console.log(message.replaceAll("g", "G"));

console.log(message.search("result","morning"));

console.log(message.indexOf("good", 4));

message = "hello there";


console.log(message.slice(3,7))

console.log(message.slice(-1))
