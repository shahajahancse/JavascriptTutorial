// Introduction to the JavaScript Array.of() method
let numbers = new Array(2);
console.log(numbers.length); // 2
console.log(numbers[0]); // undefined
numbers = new Array("2");
console.log(numbers.length); // 1
console.log(numbers[0]); // "2"

numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3
let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']
// JavaScript Array.of() polyfill
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}


// Introduction to JavaScript Array Array.from() method
function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);
// or
function arrayFromArg() {
    return Array.prototype.slice.call(arguments);
}
fruits = arrayFromArg('Apple', 'Orange', 'Banana');
console.log(fruits);
// JavaScript Array Array.from() with a mapping function
function addOne() {
  return Array.from(arguments, (x) => x + 1);
}
console.log(addOne(1, 2, 3));
// JavaScript Array Array.from() with a this value
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    }
}
let scores = [5, 6, 7];
let newScores = Array.from(scores, doubler.double, doubler);
console.log(newScores);
// Create an array from an iterable object
let even = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i += 2) {
            yield i;
        }
    }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);
