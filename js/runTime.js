// JavaScript execution context to deeply understand how JavaScript code gets executed.
let x = 10;
function timesTen(a) {
  return a * 10;
}
console.log(timesTen(x));

// Introduction to JavaScript Call Stack.
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

x = average(10, 20);

