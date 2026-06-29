async function play() {
    return "i am playing";
}

console.log(play());

function run() {
    return Promise.resolve("i am running");
}

console.log(run());
