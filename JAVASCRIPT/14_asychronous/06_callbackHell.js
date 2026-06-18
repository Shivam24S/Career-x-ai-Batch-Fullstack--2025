

function login(callback) {

    setTimeout(() => {
        console.log("user logged in...")

        callback();
    }, 1000)

}

function showMenu(callback) {

    setTimeout(() => {

        console.log("loading menu...");

        callback();
    },2000)
}

function selectItem(callback) {

    setTimeout(() => {

        console.log("pizza selected...");

        callback();
    },2000)
}



function confirmOrder(callback) {

    setTimeout(() => {

        console.log("confirming order...");

        callback();
    },2000)
}



function payment(callback) {

    setTimeout(() => {

        console.log("payment initialized...");

        callback();
    },2000)
}



function checkValidPayment(callback) {

    setTimeout(() => {

        console.log("payment done...");

        callback();
    },2000)
}



function orderSuccess(callback) {

    setTimeout(() => {

        console.log("order booked successfully...");

        callback();
    },2000)
}


login(function () {
    showMenu(function () {
        selectItem(function () {
            confirmOrder(function () {
                payment(function () {
                    checkValidPayment(function () {
                        orderSuccess(function () {
                            console.log("order delivered enjoy your meal")
                        })
                    })
                })
            })
        })
    })
})