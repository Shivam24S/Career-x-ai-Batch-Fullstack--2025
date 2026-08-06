import fs from "fs";

// const fs = require("fs")

fs.writeFileSync("new.txt", "new file created");

fs.writeFileSync("news.pdf", "new file created");

fs.writeFileSync("news.mp4", "new file created");

const text = fs.readFileSync("new.txt", "utf-8");

console.log("text", text);
