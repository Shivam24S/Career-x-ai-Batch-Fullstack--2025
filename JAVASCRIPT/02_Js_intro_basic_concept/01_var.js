// variable is storage container which we are using in our code;

// 1 var

function play() {
  var game = "gta-5";

  console.log("i am playing", game);

  if (true) {
    console.log("what is the game name ", game);
  }
}

play();

// console.log("what is the game name ", game);

// var has functional scope

// declaration

var activity;

// initialization

activity = "riding";

console.log("current i am doing", activity);

// reinitialize is possible

activity = "swimming";

console.log("current i am doing", activity);

// global scope it's not any rule we can define any variable as global scope and global scope variable will be available anywhere in whole code

// we can redeclare variable in same scope with same name
var exercise = "running";
console.log("current i am doing", exercise);
