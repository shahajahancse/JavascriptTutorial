// Introduction to the JavaScript call() method.
function show() {
  console.log("Show function");
  console.log(this);
}
console.log(show instanceof Function); //true
show();
show.call();
function add(a, b) {
  return a + b;
}
let result = add.call(this, 10, 20);
console.log(result);
var greeting = 'Hi';
var messenger = {
  greeting: 'Hello',
};
function say(name) {
  console.log(this.greeting +' '+ name);
}
say.call(this, 'John');
say.call(messenger, "John");
// Using the JavaScript call() method to chain constructors for an object.
function Box(height, width) {
  this.height = height;
  this.width = width;
}
function Widget(height, width, color) {
  this.color = color;
  Box.call(this, height, width);
}
let widget = new Widget('red', 100, 200);
function getOddNumbers() {
  const args = Array.prototype.slice.call(arguments);
  return args.filter((num) => num % 2);
}
let oddNumbers = getOddNumbers(10, 3, 4, 7, 4, 1, 5, 9);
console.log(oddNumbers);

// Introduction to the JavaScript apply() method
let person = {
  firstName: 'John',
  lastName: 'Due',
};
function greet(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}
result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);
result = greet.call(person, 'Hello', 'How are you?');
console.log(result);
// Function borrowing of apply().
const computer = {
  name: 'macBook',
  isOn: false,
  turnOn(){
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff(){
    this.isOn = false;
    return `The ${this.name} is Off`;
  }
};
const server = {
  name: 'Dell powerEdge t30',
  isOn: false,
};
result = computer.turnOn.apply(server);
console.log(result);
result = computer.turnOff.apply(server);
console.log(result);
// Using the apply() method to append an array to another.
let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);

// Introduction to JavaScript bind() method.
person = {
  name: "John Due",
  getName: function () {
    console.log(this.name);
  }
};
setTimeout(person.getName(), 1000);
// Or
let f = person.getName.bind(person);
// setTimeout(f, 1000);Using bind() to borrow methods from a different object
let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};
let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name +' flies at '+ speed +'mph.');
  },
};
let run = runner.run.bind(flyer, 20);
run();

// Introduction to the JavaScript recursive functions.
function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);
// Calculate the sum of digits of a number example
function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(320));














