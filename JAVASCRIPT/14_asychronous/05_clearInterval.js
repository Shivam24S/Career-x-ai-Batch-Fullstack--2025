let stop = setInterval(() => {
    let time = new Date().toLocaleTimeString();

    console.log("current time is ", time);
}, 1000);



console.log("stop",stop)

setTimeout(() => {

    clearInterval(stop)
}, 5000);