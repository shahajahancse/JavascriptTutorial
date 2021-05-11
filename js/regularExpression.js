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

