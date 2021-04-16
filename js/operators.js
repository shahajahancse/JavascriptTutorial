let eligible = false,
    required = true;

console.log("eligible is true : "  + !eligible);  //true
console.log('required is false : ' +!required);  // false

console.log('!undefined is true: ' +!undefined); // true
console.log('!null is true :' +!null); // true
console.log('!20 is false : ' +!20); //false
console.log('!0 is true : ' +!0); //true
console.log('!NaN is true : ' +!NaN); //true
console.log('!obj is false : ' +!{}); // false
console.log('empty string is true : ' +!''); //true
console.log('!empty is false :' +!'OK'); //false
console.log('!false is true :' +!false); //true
console.log('!true is false :' +!true); //false

console.log(eligible || required); // true
