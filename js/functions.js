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

// Introduction to JavaScript anonymous functions
let show = function () {
    console.log('Anonymous function.');
}
show();
// Using anonymous functions as arguments of other functions.
setTimeout(function () {
    console.log("Execute later after 1 second.");
}, 1000);
// Immediately invoked function execution.
(function () {
    console.log("Immediately");
})();
// First, the following defines a function expression:
(function () {
  console.log("Immediately invoked function execution");
});
// Second, the trailing parentheses () allow you to call the function:
(function () {
  console.log("Immediately invoked function execution");
})();
// and sometimes, want to pass arguments into it, like this:
let person = {
    firstName: 'John',
    lastName: 'Due',
};
(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);
// ES6 shorthand function.
show = () => console.log("Anonymous functions");
show();
add = (a, b) => a + b;
console.log(add(10, 15));
