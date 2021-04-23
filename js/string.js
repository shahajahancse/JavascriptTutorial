
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

let st = new String("JavaScript String Type");
console.log(st.length); // 22
console.log(st.valueOf());
console.log(st.toString());
console.log(st.toLocaleString());
console.log(st.charAt(1)); // J

// Concatenating strings by concat()
let firstName = 'John';
let fullName = firstName.concat(' Doe');
console.log('concatenating by concat() : ' + fullName); // "John Doe"
console.log(firstName); // "John"

// Concatenating strings by operator (+)
fullName = firstName + ' Doe';
console.log('concatenating by operator (+) : ' + fullName); // "John Doe"

// Extracting substrings
let subst = "JavaScript String";
console.log(subst.substr(0, 10)); // "JavaScript"
console.log(subst.substr(11, 6)); // "String"

let ts = "This is a string";
console.log(ts.indexOf('is', 3)); //5
console.log(ts.lastIndexOf("is")); // 5
