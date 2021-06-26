function add(a, b) {
    return a + b;
}
let sum = add;
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, sum);
console.log(result);


function swap(x, y) {
    let tmp = x;
    x = y;
    y = tmp;
}
console.log(swap.length); // 2
console.log(swap.prototype); // Object{}
function fn() {
    console.log(new.target);
}
fn(); // undefined
let f = new fn(); // [Function: fn]


function show() {
   console.log('Show function');
}
show();
show.call();

function add(a, b) {
    return a + b;
}
result = add.call(this, 10, 20);
console.log(result);

var greeting = 'Hi';
var messenger = {
    greeting: 'Hello'
}
function say(name) {
    console.log(this.greeting + ' ' + name);
}
say.call(this, "John");
say.call(messenger, "John");
// Using the JavaScript call() method to chain constructors for an object
const car = {
    name: 'car',
    start: function() {
        console.log('Start the ' + this.name);
    },
    speedup: function() {
        console.log('Speed up the ' + this.name)
    },
    stop: function() {
        console.log('Stop the ' + this.name);
    }
};
const aircraft = {
    name: 'aircraft',
    fly: function(){
        console.log('Fly');
    }
};
car.start.call(aircraft);


const person = {
    firstName: 'John',
    lastName: 'Doe'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
result = greet.apply(person, ["Hello", "How are you?"]);
console.log(result);
result = greet.call(person, 'Hello', 'How are you?');
console.log(result);
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
result = computer.turnOn.apply(server);
console.log(result);
result = computer.turnOff.apply(server);
console.log(result);
// 3) Using the apply() method to append an array to another
let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);
// 1) A simple JavaScript recursive function example
function countDown(fromNumber) {
    console.log(fromNumber);
    if ((fromNumber - 1) > 0) {
      countDown(fromNumber - 1);
    }
}
countDown(3);
