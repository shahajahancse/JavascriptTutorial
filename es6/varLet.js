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
