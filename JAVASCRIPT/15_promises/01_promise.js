

// producing code 

const payment = new Promise((resolve, reject) => {

    let paymentProcess = true;

    if (paymentProcess) {

        resolve("payment successfully")
    } else {
        reject("payment failed")
    }

})


// consuming code 

console.log(payment)


payment.then((msg) => {

    console.log(msg)
}).then(()=>{

    return

}).then(()=>{

    return

}).then(()=>{

    return


}).catch((err)=>{

    
})