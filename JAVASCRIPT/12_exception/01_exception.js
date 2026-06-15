// without

// function checkAtmPin(pin) {
//   let atmPin = 1234;

//       if (atmPin === pin) {
//       console.log("you can use bank services");
//     } else {
//       throw new Error("invalid pin");
//     }

//   console.log("this will work without upper function result");
// }

// checkAtmPin(5678);

// with try catch block

// function checkAtmPin(pin) {
//   let atmPin = 1234;

//   try {
//     if (atmPin === pin) {
//       console.log("you can use bank services");
//     } else {
//       throw new Error("invalid pin");
//     }
//   } catch (error) {
//     console.log("error", error.message);
//   }

//   console.log("this will work without upper function result");
// }

// checkAtmPin(5678);


// finally 


function checkAtmPin(pin) {
    let atmPin = 1234;

    try {
        if (atmPin === pin) {
            console.log("you can use bank services");
        } else {
            throw new Error("invalid pin");
        }
    } catch (error) {
        console.log("error", error.message);
    } finally {
        console.log("this will work without success and fail case result")
    }

    console.log("this will work without upper function result");
}

checkAtmPin(1234);
