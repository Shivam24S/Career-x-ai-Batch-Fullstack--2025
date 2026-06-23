function payment(amount, callback) {
  if (amount <= 0) {
    return callback("please enter valid amount for transaction");
  } else {
    setTimeout(() => {
      console.log(`${amount} payment initialized`);

      callback(null, amount);
    }, 1000);
  }
}

let balance = 10000;

function checkBalance(amount, callback) {
  if (amount > balance) {
    return callback("insufficient balance");
  } else {
    setTimeout(() => {
      console.log("available balance is", balance);

      callback(null, amount);
    }, 2000);
  }
}

function paymentDeduct(amount, callback) {
  setTimeout(() => {
    console.log(`${amount} has been deduct from your account`);

    callback(null, amount);
  }, 3000);
}

function updateBalance(amount, callback) {
  setTimeout(() => {
    balance -= amount;

    console.log("currently available balance is", balance);

    callback(null, amount);
  }, 2000);
}

function paymentStatus(amount, callback) {
  setTimeout(() => {
    console.log(`${amount} payment was successfully`);
  },3000);
}

payment(8000, (err, amount) => {
  if (err) {
    return console.log(err);
  } else {
    checkBalance(amount, (err, amount) => {
      if (err) {
        return console.log(err);
      } else {
        paymentDeduct(amount, (err, amount) => {
          if (err) {
            return console.log(err);
          } else {
            updateBalance(amount, (err, amount) => {
              if (err) {
                return console.log(err);
              } else {
                paymentStatus(amount, (err, amount) => {
                  if (err) {
                    return console.log(err);
                  } else {
                    console.log(`${amount} transition has been completed`);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
