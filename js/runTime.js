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
console.log(x);

// JavaScript single-threaded model
function task(message) {
  let n = 1000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}
console.log("Start script...");
task("Download a file.");
console.log("Done!");
