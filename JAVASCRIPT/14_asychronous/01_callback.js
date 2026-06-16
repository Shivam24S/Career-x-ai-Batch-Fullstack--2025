

function total(a, b, callBackFunction) {
  let result = a + b;

  callBackFunction(result);
}


total(10,20,function cb(result) {
  console.log(result);
})