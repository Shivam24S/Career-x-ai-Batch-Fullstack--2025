// now using let

function checkBlockScope() {
  let variable = "hello";

  console.log("variable value", variable);

  if (true) {
    // let variable = "override";

    let blockVariable = "this is block variable";
    console.log("variable value", variable);
  }

  //   can't access this
//   console.log("what is the value of blockVariable", blockVariable);
}

checkBlockScope();

// rules

// variable declaration
let play;

play = "hide and sick";

// re intiliaziation can be possible;

play = "cricket";


console.log("play", play);

// in same scope we can't define same name variable again

// let play = "football";

// console.log("play", play);
