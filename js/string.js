
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

// Locating substrings
let ts = "This is a string";
console.log(ts.indexOf('is', 3)); //5
console.log(ts.lastIndexOf("is")); // 5

// Removing whitespace characters
let rawString = ' Hi   ';
let strippedString = rawString.trim();
console.log(strippedString); // "Hi"
console.log(rawString.trimStart());
console.log(rawString.trimEnd());

// Changing cases
let greeting = 'Hello';
console.log(greeting.toLowerCase()); // Or used toLocaleLowerCase ()  // 'hello'
console.log(greeting.toUpperCase()); // Or toLocaleUpperCase()  // 'HELLO';

//  comparing string
console.log('A'.localeCompare('B')); // -1
console.log('B'.localeCompare('B')); // 0
console.log('C'.localeCompare('B')); // 1

// Matching patterns to used match()
let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]); // "1"
// array return to used match()
matches = expr.match(/\d+/g);
console.log("Array : " +matches);
matches.forEach(function (m) {
  console.log(m);
});

// search patterns by search(), like match()
let ser = "This is a test of search()";
let pos = ser.search(/is/);
console.log(pos); // 2

// Replacing substrings by replace()
let re = "the baby kicks the ball";
// replace "the" with "a"
let newStr = re.replace(/the/g, "a");
console.log(newStr); // "a baby kicks a ball"
console.log(re); // "the baby kicks the ball"
