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
