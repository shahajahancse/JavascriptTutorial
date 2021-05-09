// JavaScript pass by value or pass by reference
function square (x) {
    x = x * x;
    return x;
}
var y = 10;
var result = square(y);
console.log(y); // 10 no change
console.log(result); // 100
// Passing by value of object
function turnOn(machine) {
    machine.isOn = true;
}
var computer = {
    isOn: false,
};
turnOn(computer);
console.log(computer.isOn);
function nameOn(machine) {
    machine = {
        isOn: true,
    };
}
computer = {
    isOn: false,
};
nameOn(computer);
console.log(computer.isOn);

// Returning Multiple Values from a Function.
// Returning multiple values from a function using an array
function getNames() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return as an array
  return [firstName, lastName];
}
let names = getNames();
const firstNamea = names[0],
    lastNamea = names[1];
// In ES6, can destructuring assignment syntax to unpack values from an array more intuitively,
const [firstNameas, lastNameas] = getNames();
// Returning multiple values from an function using an object
function getName() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return values
  return {
    firstName,
    lastName,
  };
}
let name = getName();
let firstNames = name.firstName,
  lastNames = name.lastName;
// ES6
let { firstNamess, lastNamess } = getName();
console.log(firstNames);

// JavaScript Function Type
function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return "x : " +x+" Y : "+ y;
}
console.log(swap(10, 5));
console.log(swap.length); // 2
console.log(swap.prototype); // Object{}
// ES6
function fn() {
    console.log(new.target);
}
fn(); // undefined
let f = new fn(); // [Function: fn]
// The apply() and call() methods call a function with a given this value and arguments.
let cat = {type: "Cat", sound: "Meow"};
let dog = {type: "Dog", sound: "woof"};
let say = function (greeting) {
  console.log(greeting);
  console.log(this.type +" say "+ this.sound);
};
say.apply(cat, ['Hi']);
// Hi  // Cat says Meow
say.apply(dog,['Hi']);
// Hi  // Dog says Woof
say.call(cat,'Hi');
// Hi  // Cat says Meow
say.call(dog,'Hi');
// Hi  // Dog says Woof
// The bind() method creates a new function instance whose this value is bound to the object that you provide.
let car = {
  speed: 5,
  start: function () {
    console.log('Start with ' +this.speed+ ' km/h');
  }
};
let aircraft = {
  speed: 10,
  fly: function () {
    console.log("Flying");
  }
};
car.start.call(aircraft);
let taxing = car.start.bind(aircraft);
taxing();


