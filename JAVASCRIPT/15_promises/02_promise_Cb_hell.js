function payment(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 0) {
      reject("invalid amount");
    } else {
      setTimeout(() => {
        console.log(`${amount} payment initialized`);

        resolve(amount);
      }, 2000);
    }
  });
}

let balance = 10000;

function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    if (amount > balance) {
      reject("insufficient balance");
    } else {
      setTimeout(() => {
        console.log(`${balance} available balance`);

        resolve(amount);
      }, 2000);
    }
  });
}

function withDraw(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${amount} has been deduct`);

      balance -= amount

      resolve(balance);
    }, 3000);
  });
}

function updateBalance(amount) {
  return new Promise((resolve, reject) => {
    if (balance <= 0) {
      reject("empty balance");
    } else {
      setTimeout(() => {
        console.log(`${amount} is currently available`);
      }, 2000);
    }
  });
}

function paymentStatus(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${amount} amount payment has been successfully`);
    });
  });
}

payment(5000)
  .then((amt) => {
    return checkBalance(amt);
  })
  .then((amt) => {
    return withDraw(amt);
  })
  .then((amt) => {
    return updateBalance(amt);
  })
  .then((amt) => {
    return paymentStatus(amt);
  })
  .catch((err) => {
    console.log(err);
  });
