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


