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
console.log(window.add(10, 15));

add = (function (a, b) {
  return a + b;
})(10, 20);
console.log(add);

const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }
  return {
    add: add,
    multiply: multiply,
  };
})();
console.log(calculator.add(30, 20));
console.log(calculator.multiply(30, 2));

//  callbacks function and filter()
let numbers = [1, 2, 4, 7, 3, 5, 6];
function isOddNumber(number) {
    return number % 2;
}
const isOddNumbers = numbers.filter(isOddNumber);
console.log(isOddNumbers);  // [ 1, 7, 3, 5 ]
// To make it shorter
let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
// In ES6,
oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]
// Synchronous callback functions
numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log("Sort : " + numbers);
// Asynchronous callback functions
function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);
  }, 3000);
}
let url = "https://www.javascripttutorial.net/pic.jpg";
download(url, function (picture) {
  console.log(`Processing ${picture}`);
});
// Handling errors
function download(url, success, failure) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // over simplification
    let error = url.length === 0 || !url;
    // call the failure or success callback
    error ? failure(url) : success(url);
  }, 3000);
}
download(
    "",
    function (picture) {
    console.log(`Processing the picture ${picture}`);
  },
  function (picture) {
    console.log(`Handling error...`);
  }
);

// Nesting callbacks and the Pyramid of Doom
function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);
  }, 3000);
}

const url1 = "https://www.javascripttutorial.net/pic1.jpg";
const url2 = "https://www.javascripttutorial.net/pic2.jpg";
const url3 = "https://www.javascripttutorial.net/pic3.jpg";

download(url1, function (picture) {
  console.log(`Processing ${picture}`);
  // download the second picture
  download(url2, function (picture) {
    console.log(`Processing ${picture}`);
    // download the third picture
    download(url3, function (picture) {
      console.log(`Processing ${picture}`);
    });
  });
});
