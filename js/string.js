
let name = "John";
let message = `Hello ${name}`;
console.log(message);

// string length cont
let str = "Hello";
console.log(str.length);  // 13

// access the first character of the string,
console.log(str[0]); // "H"
// access the last character of the string
console.log(str[str.length -1]); // "o"

//Concatenating strings via + operator
str = str +' '+ name;
console.log(str); // "Hello John"

// If you want to assemble a string piece by piece,
let className = "btn";
className += " btn-primary";
className += " none";
console.log(className);
