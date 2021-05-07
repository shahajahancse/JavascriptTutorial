// Understanding Own Properties of an Object in JavaScript
const person = {
  firstName: "John",
  lastName: "Doe",
};
const employee = Object.create(person, {
    job: {
        value: 'Js Developer',
        enumerable: true,
    },
});
console.log(employee.hasOwnProperty('job'));
console.log(employee.hasOwnProperty("lastName"));
console.log(employee.hasOwnProperty("lastName"));
console.log(employee.hasOwnProperty('ssn'));

// the differences between primitive and reference values.
let x = 10;
console.log(typeof(x)); // number
let str = 'JS';
console.log(typeof(str)); // string
let rgb = ['red','green','blue'];
console.log(rgb instanceof Array); // true
// Copying primitive values
var a = 10;
var b = a;
console.log(b); // 10;
// Copying reference values
x = { name: "John" };
var y = x;
console.log(y.name);
y.name = "David";
console.log(x.name); // 'David'
console.log(y.name);
