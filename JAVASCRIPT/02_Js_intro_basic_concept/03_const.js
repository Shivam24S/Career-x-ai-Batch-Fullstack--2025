// const

// block scope

function activity() {
  const game = "gta-5";

  function otherActivity() {
    var exercise = "running";

    console.log("current exercise", exercise);
  }

  console.log("game", game);
  otherActivity();

  //   console.log("what is the current exercise you are doing", exercise);
}

activity();

// variable declaration
// const task;

const task = "project complete";

// console.log("task", task);

// re initialization is not possible

// task = "learning new concept";

// console.log(task);

//  when using variable in program follow this hierarchies

// const -> let -> var

const person = {
  name: "alice",
};

person.name = "charlie";

console.log(person.name);
