// Introduction to regular expressions in JavaScript
let re = /hi/i;
let result = re.test('Hi John');
console.log(result); //true

re = new RegExp('hi','i');
result = re.test('HI John');
console.log(result); // true

let message = "Hi, are you there? hi, HI...";
re = /hi/gi;
let matches = [];
let match;
do {
  match = re.exec(message);
  if (match) {
    matches.push(match);
  }
} while (match != null);
console.dir(matches);
// Searching strings
let str = "Are you Ok? Yes, I'm OK";
result = str.match(/OK/gi);
console.log(result);  //["Ok", "OK"]
// Replacing strings
str = "Are you OK? Yes, I'm OK.";
result = str.replace(/OK/gi, "fine");
console.log(result);

// Introduction to the character classes
let phone = "+1-(408)-555-0105";
re = /\d/g;
let numbers = phone.match(re);
let phoneNo = numbers.join("");
console.log(phoneNo);
// Or short, chain system.
console.log('+1-(408)-555-0105'.match(/\d/g).join(''));
str = "O2 is oxygen";
re = /\w\d/g;
console.log(str.match(re));

str = "ES6 Tutorial";
re = /ES\d/g;
console.log(str.match(re));
// Inverse Classes
phone = "+1-(408)-555-0105";
re = /\D/g;
console.log(phone.replace(re, ""));

// The caret & dollar anchor match of the text.
let isValid = /^\d\d:\d\d$/.test('12:05');
console.log(isValid);  //true
let valid = /^\d\d:\d\d$/.test("12:105");
console.log(valid); //false
// Multiline mode of anchors ^ and $: the m flag.
str = `1st line
2nd line
3rd line`;
  re = /^\d/gm;
matches = str.match(re);
console.log(matches);

// Regular Expression: Sets and Ranges
str = 'How cats, bats and rats become Halloween animals';
re = /[cbr]ats/g;
result = str.match(re);
console.log(result);

result = "It is 🍎".match(/[🍎🍅🍓]/u);
console.log(result);

// use the word boundary in regular expressions.
console.log('Hello, JS!'.match(/\bJS\b/)); //true
console.log('Hello, JSscript!'.match(/\bJS\b/)); // null
console.log('Hello, JSscript!'.match(/JS/)); // ["JS"]
console.log('Hello, JS!'.match(/JS/)); // ["JS"]
console.log("ES 2015".match(/\b\d\d\d\d\b/));
str = "I start coding JS at 05:30 AM";
re = /\b\d\d:\d\d\b/;
result = str.match(re);
console.log(result);

// use quantifiers to match a number of instances of a character, group, or character class in a string.
// er = /\d{4}/ = /\d{4}/;
str = "The official name of ES11 is ES2020";
re = /\d{2,4}/g; // The range matches a character or character class from n to m times.
result = str.match(re);
console.log(result);

numbers = "+1-(408)-555-0105".match(/\d{1,}/g);
console.log(numbers);
// Same as
phone = "+1-(408)-555-0105";
result = phone.match(/\d+/g);
console.log(result);
// The quantifier ?
str = "Is this color or colour?";
result = str.match(/colou?r/g);
console.log(result);
// The quantifier *
str = "JavaScript is not Java";
re = /Java\w*/g;
results = str.match(re);
console.log(results);
// Whole numbers:/^\d+$/
// Decimal numbers:/^\d*.\d+$/
// Whole numbers and decimal numbers:/^\d*(.\d+)?$/
// Negative, positive whole numbers & decimal numbers:/^-?\d*(.\d+)?$/
