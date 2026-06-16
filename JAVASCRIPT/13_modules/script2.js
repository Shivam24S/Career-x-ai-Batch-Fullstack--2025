function sum(a, b) {
    let result;
    return (result = a + b);
}

export default sum;

// will not work

// function multiplication(a, b) {

//     let result;

//     return result = a * b;
// }

// export default multiplication;

export function multiplication(a, b) {
    let result;

    return (result = a * b);
}

export function subtraction(a, b) {
    let result;

    return (result = a - b);
}

// common js


// const division = require("./")

// function division(a, b) {
//     let result;

//     return (result = a / b);

// }

// module.exports division;
