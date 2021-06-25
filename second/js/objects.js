let person = {
    firstName: 'John',
    lastName: 'Due',
};
console.log(person.firstName +' '+ person.lastName);
console.log(person);
// Adding a new property to an object
person.age = 25;
console.log(person.age);
// Deleting a property of an object
delete person.age;
console.log(person.age); //undefined
// Checking if a property exists
console.log('age' in person); //false
console.log('lastName' in person); //true
// Iterating over properties of an object using for...in loop
let website = {
    title: 'JavaScript Tutorial',
    url: 'https://www.javascripttutorial.net',
    tags: ['es6', 'javascript', 'node.js', 'reactjs', 'react native']
};
for (const key in website) {
    if (Object.hasOwnProperty.call(website, key)) {
        const element = website[key];
        console.log(element);
    }
}
// method object
person.greet = function () {
    console.log('Hello!');
}
person.greet();
function greet1() {
    console.log('Hello, World!');
}
person.greet1 = greet1;
person.greet1();
// method shorthand
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, Bd!');
    }
};
person1.greet();
// The this value
let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person2.getFullName());


// 1) Data type Object properties
'use strict';
let dataObject = {};
Object.defineProperty(dataObject, 'name', {
    configurable: false,
    value: 'Sumon',
});
console.log(dataObject.name);
delete dataObject.name;
console.log(dataObject.name); // do not delete
// Object.defineProperty(dataObject, 'name', { // can't redefine
//     configurable: true,
// });
let dataObject1 = {};
dataObject1.name = 'Said';
dataObject1.age = 25;
for (const key in dataObject1) {
    if (Object.hasOwnProperty.call(dataObject1, key)) {
        const element = dataObject1[key];
        console.log(element);
    }
}
Object.defineProperty(dataObject1, 'name', {
    enumerable: false,
});
for (const key in dataObject1) {
    if (Object.hasOwnProperty.call(dataObject1, key)) {
        const element = dataObject1[key];
        console.log(element); //name not show
    }
}
// 2) Accessor type object properties
let accessorObject = {
    firstName: 'himel',
    lastName: 'arnika',
};
Object.defineProperty(accessorObject, 'fullName', {
    get:function () {
        return this.firstName +' '+ this.lastName;
    },
    set:function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
console.log(accessorObject.fullName);
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// JavaScript constructor functions And adding methods
function Person(firstName, lastName) {
     // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;
    // add method to fullName property
    this.fullName = function () {
        return this.firstName +' '+ this.lastName;
    };
}
person = new Person('Sonny', 'Pall');
console.log(person.fullName());
let person3 = new Person('Jane', "Due");
console.log(person3.fullName());
let person4 = new Person('James', 'Sone');
console.log(person4.fullName());
let person5 = new Person('Johnny', 'Pall');
console.log(person5.firstName);

function Person1(firstName, lastName) {
    console.log(new.target);
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
person = Person1("John", "Doe");
person = new Person1("John", "Doe");

function Person2(firstName, lastName) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }
    this.firstName = firstName;
    this.lastName = lastName;
}
// person = Person2("John", "Doe");
function Person3(firstName, lastName) {
    if (!new.target) {
        return new Person3(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
}
person = Person3("John", "Doe");
console.log(person.firstName);
console.log(Person3.prototype);

function getBrand(value) {
    console.log(value + this.brand);
}
let honda = {
    brand : 'Honda',
};
let audi = {
    brand : 'audi',
};
getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"
var x = { name: "John" };
var y = x;
console.log(x);
console.log(y);
y.name = "David";
console.log(y); // 'David'
console.log(x); // 'David'
