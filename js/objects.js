
// Introduction to the JavaScript objects.
let person = {
    firstName: 'John',
    lastName: 'Due',
};
// Accessing properties by dot (.) notation.
console.log(person.firstName);
// 2) Array-like notation ( [])
console.log(person['lastName']);
// When a property name contains spaces,
let address = {
  "building no": 3960,
  street: "North 1st street",
  state: "CA",
  country: "USA",
};
console.log(address["building no"]);
// Modifying the value of a property
person.firstName = 'Jon';
console.log(person);
// Adding a new property to an object
person.age = 26;
console.log(person);
// Deleting a property of an object.
delete person.age;
console.log(person);
// checking if a property exists in an object, you use the in operator:
let employee = {
  firstName : 'John',
  lastName  : 'Due',
  employeeId : 1
};
console.log('employeeId' in employee);
console.log('ssn' in employee);
// Iterating over properties of an object using for...in loop.
let website = {
  title: "JavaScript Tutorial",
  url: "https://www.javascripttutorial.net",
  tags: ["es6", "javascript", "node.js", "reactjs", "react native"],
};
for (const key in website) {
  console.log(key);
}
// Methods
person.greet = function ()  {
  console.log('Hello');
}
person.greet();
// es6
person.green = () => console.log('Hi');
person.green();
// Method shorthand
person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
};
person.greet();
// es6
person = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    console.log("Hello, World!");
  },
};

person.greet();
// this keywords
person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName());

