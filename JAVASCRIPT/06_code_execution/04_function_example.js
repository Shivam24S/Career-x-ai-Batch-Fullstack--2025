var x = 1000;

a();

console.log(x);

function a() {
  var x = 10;
  console.log(x);

  function b() {
    var x =100
    console.log(x);
  }

  b();
}
