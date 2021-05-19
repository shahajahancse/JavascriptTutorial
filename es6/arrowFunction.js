// Introduction to JavaScript arrow functions
let add = function(x,y) {
  return x + y;
}
console.log(add(10,20)); // 30
//same as
add = (x,y) => x + y;  // same as add = (x, y) => { return x + y; };
console.log(add(10,25)); // 30;
console.log(typeof add); // function
console.log(add instanceof Function); // true
// JavaScript arrow functions with multiple parameters
// number short
let numbers = [4, 2, 6];
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);
numbers.sort(function (a, b) {
  return  a - b;
});
console.log(numbers);
//  same ass
numbers.sort((a, b) => b - a);
console.log(numbers);
// JavaScript arrow functions with a single parameter
let names = ["John", "Mac", "Peter"];
let lengths = names.map(name => name.length);
console.log(lengths);
// JavaScript arrow functions and object literal
let setColor = function (color) {
    return {value: color}
};
let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"
// same as
setColor = color => {value: color };
// JavaScript arrow functions and this value
function Car() {
    this.speed = 0;
    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            console.log(this.speed); // undefined
        }, 1000);

    };
}
let car = new Car();
car.speedUp(50); // undefine
// undefine error
function Cars() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(self.speed);
        }, 1000);

    };
}
let cars = new Cars();
cars.speedUp(50); // 50;
//  or
function Cara() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}
car = new Cara();
car.speedUp(50); // 50;
// JavaScript arrow functions and the arguments object
function show() {
    return x => x + arguments[0];
}
let display = show(10, 20);
let result = display(5);
console.log(result); // 15
// JavaScript arrow functions and the prototype
function dump( message ) {
    console.log(message);
}
console.log(dump.hasOwnProperty('prototype')); // true

let dumps = message => console.log(message);
console.log(dumps.hasOwnProperty('prototype')); // false


