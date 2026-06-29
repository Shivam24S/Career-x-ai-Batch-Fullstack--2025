function order() {
    let item = ["samosa", "gathiya"];

    return new Promise((resolve, reject) => {
        if (item.length === 0) {
            return reject("please add item in cart to proceed");
        } else {
            setTimeout(() => {
                resolve(item);

                console.log("order booked");
            }, 2000);
        }
    });
}

function orderReceived(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item);

            console.log("order confirmed");
        });
    });
}

function itemPrepare(item) {
    let material = true;

    return new Promise((resolve, reject) => {
        if (!material) {
            reject("item could not be prepared");

            console.log("failed to prepare food");
        } else {
            setTimeout(() => {
                resolve(item);

                console.log("item prepared")
            }, 2000);
        }
    });
}

function foodDelivered(item) {
    return new Promise((resolve, reject) => {
        if (!item) {
            reject("item not be delivered");

            console.log("failed to delivered food");
        } else {
            setTimeout(() => {
                resolve(item);

                console.log("food delivered")
            }, 2000);
        }
    });
}



async function foodOrder() {


    const food = await order()

    const orderData = await orderReceived(food)

    const prepare = await itemPrepare(orderData);

    const delivered = await foodDelivered(prepare)


    console.log("this will wait until upper programme execution finished")


}

foodOrder()

    console.log("this will not wait")