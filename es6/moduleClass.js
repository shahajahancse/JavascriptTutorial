// import { message, setMessage, sum, multiply, result} from "./message.js";
// call all export
import * as all from "./message.js";
import { sum as total } from "./math.js";

const h1 = document.createElement('h1');
h1.textContent = all.message;
document.body.appendChild(h1);

console.log(all.message); // 'ES6 Modules.'
all.setMessage('Hello');
console.log(all.message); // 'Hello'

all.sum();
console.log(all.result); // 30
all.multiply();
console.log(all.result); // 200

console.log(total(20, 30));
// export { sum as add } from "./math.js";


// Classes to ES6 // Classes prior to ES6 revisited
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
var john = new Person('John Due');
console.log(john.getName());
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
/* ES6 class declaration */
class Persons {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
john = new Persons('John Due');
let name = john.getName();
console.log(name); // "John Doe"
console.log(typeof Persons); // function
console.log(john instanceof Persons); // true
console.log(john instanceof Object); // true


// Introduction to JavaScript class expressions.
let JClass = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
var jClass = new JClass('Jak');
console.log(jClass.getName());

function factory(aClass) {
    return new aClass();
}
let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});
greeting.sayHi(); // 'Hi'

let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App')
app.start(); // Starting the Awesome App...


// Introduction to the JavaScript static methods
Person.createAnonymous = function (gender) {
  let name = gender == "male" ? "John Due" : "Jane Due";
  return new Person(name);
};
var anonymous = Person.createAnonymous();
console.log(anonymous);
// JavaScript static methods in ES6.
class EsPerson {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == 'male' ? 'Joy' : 'Job';
        return new EsPerson(name);
    }
}
anonymous = EsPerson.createAnonymous("male");
console.log(anonymous);


// Introduction to JavaScript Computed Property.
let propName = 'c';
const rank = {
    a: 1,
    b: 2,
    [propName]: 3
};
console.log(rank.c); //3

name = 'fullName';
class GetNames {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get[name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let getName = new GetNames('John', 'Due');
console.log(getName.fullName);


// Implementing JavaScript inheritance using extends and super
// the prototypal inheritance technique.
function Animals(legs) {
    this.legs = legs;
}
Animals.prototype.walk = function () {
    console.log("walking on " + this.legs + " legs");
}
function Bird(legs) {
    Animals.call(this, legs);
}
Bird.prototype = Object.create(Animals.prototype);
Bird.prototype.constructor = Animals; // extra
Bird.prototype.fly = function () {
    console.log('flying');
}
var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly(); // flying
// ES6 Inheritance
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}
class Birds extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}
let bird = new Birds(2);
bird.walk();
bird.fly();
// Shadowing methods
class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk(); // call Animal method walk()
        console.log(`go walking`);
    }
}
let bingo = new Dog();
bingo.walk(); // walking on 4 legs  //go walking
// Inheriting static members
Birds.helloWorld(); // Hello World
// and same as
Dog.helloWorld(); // Hello World
// Inheriting from built-in types
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}
var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}


// Introduction to JavaScript new.target
function Personsss(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
}
john = new Personsss("John");
console.log(john.name); // john
// JavaScript new.target in constructors
class Personasa {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}
class Employee extends Personasa {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
john = new Personasa('John Doe'); // Personasa
let lily = new Employee('Lily Bush', 'Programmer'); // Employee
