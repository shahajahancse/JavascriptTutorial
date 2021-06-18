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


// Introduction to the Array find() method // JavaScript find() examples
numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((e) => e % 2 == 0));
let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];
console.log(customers.find((c) => c.credit > 100));


// JavaScript findIndex() examples
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank) => rank === 7);
console.log(index);

ranks = [1, 3, 5, 7, 8, 10, 7];
index = ranks.findIndex((rank, index) => rank === 7 && index > 2);
console.log(index);


// Using JavaScript Object.assign() to clone an object
let widget = {
  color: "red",
};
let clonedWidget = Object.assign({}, widget);
console.log(clonedWidget);
// Using JavaScript Object.assign() to merge objects
let box = {
    height: 10,
    width: 20
};
let style = {
    color: 'Red',
    borderStyle: 'solid'
};
let styleBox = Object.assign({}, box, style);
console.log(styleBox);


// The === operator treats -0 and +0 are the same value:
let amount = +0,
  volume = -0;
console.log(volume === amount);
// However, the Object.is() treats +0 and -0 as different values.
console.log(Object.is(amount, volume));
// === treats NaN as the different value:
let quantity = NaN;
console.log(quantity === quantity);
// However, Object.is() treats NaN as the same value:
console.log(Object.is(quantity, quantity));


// JavaScript String startsWith() examples
const title = "Jack and Jill Went Up the Hill";
console.log(title.startsWith("Jack"));
console.log(title.startsWith("jack"));
console.log(title.startsWith("Jill", 9));

// JavaScript String endsWith() examples
console.log(title.endsWith("Hill"));
console.log(title.endsWith("Up", 21));
console.log(title.endsWith("Hill"));
console.log(title.endsWith("hill"));
console.log(title.endsWith("Up", 21));


// Introduction to JavaScript String includes() method
let email = "admin@example.com";
console.log(email.includes("@"));
let str = "JavaScript String";
console.log(str.includes("Script"));
console.log(str.includes("script"));
