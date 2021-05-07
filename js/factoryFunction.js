// Introduction to the factory functions.
let john = {
    firstName : 'John',
    lastName : 'Due',
    getFullName () {
        return this.firstName +' '+ this.lastName;
    },
};
console.log(john.getFullName());
// create another similar object called jane, as a duplicate
let jane = {
    firstName: 'Jane',
    lastName: 'Due',
    getFullName (){
        return this.firstName +' '+ this.lastName;
    },
};
console.log(jane.getFullName());
// To avoid copying the same code all over again and again, develop a function that creates the person object.
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName (){
            return this.firstName +' '+ this.lastName;
        },
    };
};
john = createPerson('John', 'Due');
jane = createPerson('Jane', 'Due');
console.log(john.getFullName());
console.log(jane.getFullName());
// remove duplicate method
const behavior = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
john = createPerson("John", "Doe"),
jane = createPerson("Jane", "Doe");
john.getFullName = behavior.getFullName;
jane.getFullName = behavior.getFullName;
console.log(john.getFullName());
console.log(jane.getFullName());


const behaviors = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Introduction to JavaScript for...in loop
let person = {
  firstName: "John",
  lastName: "Due",
  ssn: "299-24-2351",
};
for (var prop in person) {
  console.log(prop +" : "+ person[prop]);
}
// The for...in loop & inheritance
var decoration = {
  color: "red",
};
var circle = Object.create(decoration);
circle.radius = 10;
for (var prop in circle) {
  console.log(prop +" : "+ circle[prop]);
}
// checking the own properties of an object, use the hasOwnProperty() method.
for(var prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
// The for...in loop and Array
const items = [10, 20, 30];
let total = 0;
for(const item in items) {
  total += items[item];
}
console.log(total);

Array.prototype.foo = 100;
total = 0;
for(var prop in items) {
  total += items[prop];
}
console.log(total);

// Introduction to JavaScript enumerable properties
const jak = {
  firstName: 'John',
  lastName: 'Due',
};
jak.age = 35;
for(const prop in jak) {
  console.log(prop);
}
Object.defineProperty(jak, "ssn", {
  enumerable: false,
  value: "123-456-7890",
});
for (const key in jak) {
  console.log(jak[key]);
}
// ES6
console.log(jak.propertyIsEnumerable('firstName')); // => true
console.log(jak.propertyIsEnumerable('lastName')); // => true
console.log(jak.propertyIsEnumerable('age')); // => true
console.log(jak.propertyIsEnumerable('ssn')); // => false
