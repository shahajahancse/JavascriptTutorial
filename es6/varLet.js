// var keyword
for(var i = 0; i < 5; i++){
    console.log(`Inside the loop : ${i}`);
}
console.log('Outside the loop : ' +i);
// let keyword
for (let l = 0; l < 5; l++) {
    console.log('Inside the loop : ' +l);
}
// console.log('Outside the loop : ' +l);  //varLet.js:10 Uncaught ReferenceError: l is not defined
// Creating global properties
var vcount = 1;
console.log(window.vcount); //1
let lcount = 1;
console.log(window.lcount); //undefined
// Re-declaration
var vcount = 10;
//let lcount = 10; //// Uncaught SyntaxError: Identifier 'lcount' has already been declared

//The basic syntax of JavaScript template literals
let str = 'Template literal in ES6.';
console.log(str);
console.log(str.length); //24
console.log(typeof str); //string
let anotherStr = `Here's a template literal`;
console.log(anotherStr);
let strWithBacktick = `Template literals use backticks \` insead of quotes`;
console.log(strWithBacktick);
// Multiline strings
var msg = 'multiline \n\ string';
console.log(msg);
var p = `This text
can
span multiple lines`;
console.log(p);
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript Template Literals in ES6',
    body: 'Content of the post will be here....',
    tags: ['es6', 'template literals', 'JavaScript'],
};

// Object property initializer shorthand
function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}
let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};
console.log(machine[name]); // server
console.log(machine['machine hours']); // 10000

let server = {
  name: "Server",
  restart() {
    console.log(`The ${this.name} is restarting!`);
  },
  "starting up"() {
    console.log(`The ${this.name} is starting up!`);
  },
};
server["starting up"]();
server['restart']();

// to handle JavaScript default parameters in ES6
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say();
function says(message = 'hi') {
    console.log(message);
}
says(); //hi
says(undefined); //hi
says('Hello'); //Hello
// More JavaScript default parameter examples.
function put(toy, toyBox = []) {
    toyBox.push(toy);
    console.log(toyBox);
}
put('cat'); // cat
put('teddy bear'); // teddy bear
function date(d = toDay()) {
    console.log(d);
}
function toDay() {
    return new Date().toLocaleDateString("en-US");
}
date();
// We can use this feature to make arguments are mandatory. If the caller doesn’t pass any argument, we throw an error:
function requiredArg() {
   throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
   console.log(x + y);
}
// add(10); // error
add(10,20); // OK
// Using other parameters in default values
function adds(x = 1, y = x, z = x + y) {
    console.log(x + y + z);
}
adds();
let taxRate = () => 0.1;
let getPrice = function (price, tax = price * taxRate()) {
    console.log(price + tax);
}
getPrice(100);

// Introduction to JavaScript rest parameters
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    console.log(total);
    // same as work
    total = 0;
    for (const a in args) {
        total = args[a] + total;
    }
    console.log(total);
}
sum(1, 2, 3);
function sums(...args) {
    return args.filter(e => typeof e === 'number').reduce((prev, curr)=> prev + curr);
}
let result = sums(10, "Hi", null, undefined, 20);
console.log(result);
// es5
function sumss() {
    return Array.prototype.filter.call(arguments, e => typeof e === 'number').reduce((prev, curr) => prev + curr);
}
result = sums(10, "Hi", null, undefined, 20);
console.log(result);
// Javascript rest parameters and Arrow function
const combine = (...args) => {
    return args.reduce((prev, curr) => prev +' '+ curr);
}
console.log(combine("JavaScript", "Rest", "Parameters"));

// Introduction to the JavaScript spread operator
const odd = [1, 3, 5];
const combined = [2, 4, 6, 8, ...odd];
console.log(combined);
function f(a, b, ...arr) {
    console.log(arr);
}
f(1,2,3,4,5,6,7);
// The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere:
let combineds = [...odd, 2, 4, 6];
console.log(combineds);
// Or
combineds = [8, ...odd, 6, 10];
console.log(combineds);
// Array’s push() method
var rivers = ["Nile", "Ganges", "Yangte"];
var moreRivers = ["Danube", "Amazon"];
Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);
// JavaScript spread operator and array manipulation
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]
// Copying an array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]
// JavaScript spread operator and strings
let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// A Quick Look at Octal and Binary Literals in ES6
// es5
let a = 051;
console.log(a); // 41
// es6
let c = 0o51;
console.log(c); // 41
// let d = 0o58;
// console.log(d); // SyntaxError
// Binary literals
// es5
let e = parseInt('111',2);
console.log(e); // 7
// es6
f = 0b111;
console.log(f); // 7

// Introduction to JavaScript Array destructuring
function getScores() {
    return [70, 80, 90];
}
scores = getScores();
let x = scores[0];
let y = scores[1];
let z = scores[2];
// same as es6
let [ab, bc, ca] = getScores();
console.log(ab); // 70
console.log(bc); // 80
console.log(ca); // 90
// Array Destructuring Assignment and Rest syntax
function Scores() {
    return [70, 80, 90, 100];
}
let [s, t, ...args] = Scores();
console.log(s);
console.log(t);
console.log(args);
// Nested array destructuring.
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}
let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();
console.log(firstName);
console.log(lastName);
console.log(color1, color2, color3); // Red Green Blue
// Array Destructuring Assignment Applications
function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
let [ssums, average, difference] = stat(20, 10);
console.log(ssums, average, difference); // 30, 15, 10

// Introduction to the JavaScript for...of loop
let forOf = [60, 70, 80];
for (const a of forOf) {
    console.log(a);
}
let colors = ["Red", "Green", "Blue"];
for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`);
}
// In-place object destructuring with for…of
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];
let sumas = 0;
for (const {score} of ratings) {
    sumas += score;
}
console.log(`Total scores: ${sumas}`); // 14
// Iterating over strings
let stra = "abc";
for (let c of stra) {
  console.log(c);
}
// Iterating over Map objects
let colorsa = new Map();
colorsa.set("red", "#ff0000");
colorsa.set("green", "#00ff00");
colorsa.set("blue", "#0000ff");
for (let color of colorsa) {
  console.log(color);
}
//  Iterating over Set objects
let nums = new Set([1, 2, 3]);
for (let num of nums) {
  console.log(num);
}
