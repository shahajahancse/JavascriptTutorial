
let counter = 120; // counter is a number
console.log(typeof counter); // "number"
counter = false;   // counter is now a boolean
console.log(typeof counter); // "boolean"
counter = "Hi";   // counter is now a string
console.log(typeof counter); // "string"
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // true
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
console.log('a'/2); // NaN;
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
console.log('I\'m also a string');
console.log('ok');
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false
console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false
console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
console.log(Symbol() == Symbol()); // false
let s2 = Symbol("event.save");
console.log(s2.toString()); // Symbol(event.save)
// object
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.address.country);
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'
// unary operator
let f = false,
    t = true;
console.log(+f); // 0
console.log(+t); // 1
// increment / decrement
let dan = 8;
++dan;
console.log(dan); // 9
let a = 10;
a += 5;
console.log(a);
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

// Introduction to JavaScript ternary operator
let age = 16;
console.log(age > 16 ? 'yes' : 'no');
var locked = 2;
console.log(locked != 1 ? 1 : 2);
// multiple JavaScript ternary operators
var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);
// JavaScript do-while statement example
 let count = 1;
 do {
     console.log('count is: ' + count);
     count++;
 } while (count < 4);


//  Strings
let str = new String("JavaScript String Type");
console.log(str.valueOf());
console.log(str.toString());
console.log(str.toLocaleString());
console.log('literal string'.toUpperCase());
console.log(str.substr(0, 10)); // "JavaScript"
console.log(str.substr(11,6)); // "String"
console.log(str.substring(4, 10)); // "Script"
// Replacing substrings
str = "the baby kicks the ball";
// replace "the" with "a"
let newStr = str.replace(/the/g, 'a');
console.log(newStr); // "a baby kicks a ball"
console.log(str); // "the baby kicks the ball"
// Padding a String to a Certain Length with Another String
str = '1234';
console.log(str.padStart(8, '0')); // "00001234"
console.log(str.padEnd(6, '*'));
// JavaScript split() examples
str = "JavaScript String split()";
console.log(str.split(' '));
console.log(str.split(' ', 2)); //limited number of substrings
// Splitting a string using a regular expression example
let paragraph = "Good Morning! How are you? This is John. John is my friend.";
str = paragraph.split(/[!,?,.]/);
console.log(str);
str = paragraph.split(/([!,?,.])/); //the regular expression contains capturing parentheses ()
console.log(str);
console.log(paragraph.substring(0, 12)); //Extracting a substring from the beginning
console.log(contact.email.substring(12)); // Extracting a substring to the end
console.log(contact.email.substring(contact.email.indexOf('@')+1)); //Extracting domain from the email
// String slice() method example
console.log(contact.email.slice(0, contact.email.indexOf('@')));
console.log(contact.email.slice(14));

