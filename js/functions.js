// define a function
function say(message) {
  console.log(message);
}
// instantiate a function
say('Hi');
// Sum function create
function add(a, b) {
  return a + b;
}
let sum = add(10, 20);
console.log("Sum : " + sum);
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
let compares = compare(20, 10);
console.log(compares);
// calculates the sum of any number of arguments.
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
       sum += arguments[i];
    }
    return sum;
}
console.log('arguments sun : ' + add(1,3));
console.log('arguments sun : ' + add(1,3, 5, 7));


