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
