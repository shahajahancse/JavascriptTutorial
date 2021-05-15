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




