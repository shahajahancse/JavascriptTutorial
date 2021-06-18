function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return this.firstName +' '+ this.lastName;
}
p1 = new Person ('John', 'Due');
console.log(p1.getFullName());

// JavaScript prototypal inheritance and __proto__
let person = {
  name: "John Doe",
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};
console.log(person instanceof Object);
console.log(person.toString());
console.log(person.__proto__);
let teacher = {
  teach: function (subject) {
    return "I can teach " + subject;
  },
};
teacher.__proto__ = person;
console.log(teacher.name);
console.log(teacher.greet());
// A standard way to implement prototypal inheritance in ES5
teacher = Object.create(person);
teacher.name = "Jane Doe";
teacher.teach = function (subject) {
  return "I can teach " + subject;
};
// Or
// let teacher = Object.create(person, {
//   name: { value: "John Doe" },
//   teach: {
//     value: function (subject) {
//       return "I can teach " + subject;
//     },
//   },
// });
console.log(Object.getPrototypeOf(teacher) === person);

// use of this keyword
const counter = {
  count : 0,
  next : function () {
    return ++this.count;
  }
};
console.log(counter.next());
this.color= 'Red';
console.log(window.color);
//  Simple function invocation
function show() {
  console.log(this === window);
}
show();

// To set the strict mode, you can use the directive "use strict" at the beginning of the file.
"use strict";
function strict() {
  console.log(this === undefined);
}
strict();
// AND If you want to apply the strict mode to a specific function only, you place it at the top of the function body
function shows() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}
shows();
// Method invocation
let car = {
  brand : "Honda",
  getBrand : function () {
    return this.brand;
  }
};
console.log(car.getBrand());
let brand = car.getBrand;
console.log(brand()); // undefined
brand = car.getBrand.bind(car);
console.log(brand());
let bike = {
  brand: "Harley Davidson",
};
brand = car.getBrand.bind(bike);
console.log(brand());
// Constructor invocation
function Car(brand) {
  this.brand = brand;
}
Car.prototype.getBrand = function (brand) {
  return this.brand;
}
car = new Car('Honda');
console.log(car.getBrand());
// var bmw = Car('BMW');
//console.log(bmw.brand); // => TypeError: Cannot read property 'brand' of undefined
// check the Car() function is always invoked using constructor invocation, at the beginning of the Bike() function
function Bike(brand) {
  if (!(this instanceof Bike)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
// bike = Bike('BMW');
// console.log(bike.brand);
// ES6 syntax
function Cars(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
// bike = Cars("BMW");
// console.log(bike.brand);
// Indirect Invocation
function getPrefix(prefix) {
  console.log(prefix + this.brand);
}
let honda = {
  brand : 'Honda',
};
let audi = {
  brand : 'audi',
};
getPrefix.call(honda,  "It's a "); // "It's a Honda"
getPrefix.call(audi, "It's an "); // "It's a Audi"
getPrefix.apply(honda, ["It's a "]); // "It's a Honda"
getPrefix.apply(audi, ["It's an "]); // "It's a Audi"
// ES6
let getThis = () => this;
console.log(getThis() === window); // true
function ES6() {
  this.speed = 120;
}
ES6.prototype.getSpeed = () => {
  return this.speed;
}
let es6 = new ES6();
es6.getSpeed(); // TypeError

