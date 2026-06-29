let orderId = "";

const shopping = new Promise((resolve, reject) => {
    let cartItem = ["ps-5", "shoes", "phone"];

    // cartItem=[];

    if (cartItem.length <= 0) {
        reject("please add item in cart");
    } else {
        setTimeout(() => {
            orderId = "123456abcd";

            console.log("order booked");

            resolve(orderId);
        }, 2000);
    }
});

shopping
    .then((orderId) => {
        return new Promise((resolve, reject) => {
            if (orderId === "") {
                reject("order failed");
            } else {
                setTimeout(() => {
                    resolve(orderId);

                    console.log("order created");
                }, 3000);
            }
        });
    })
    .then((orderId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("seller was informed for the order");

                resolve(orderId);
            }, 3000);
        });
    })
    .then((orderId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(orderId);

                console.log(orderId, "delivered to the customer");
            }, 3000);
        });
    }).catch((err) => {

        console.log(err)
    }).finally(() => {

        setTimeout(() => {

            console.log("do you want to explore more ")
        }, 1000)
    });
