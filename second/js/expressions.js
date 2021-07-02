// Introduction to JavaScript try...catch statement
function test(){
  try {
    return 1;
  } catch(error) {
    return 2;
  } finally {
    return 3;
  }
}
console.log(test());

let connection = {
    open: function () {
        console.log('open a connection');
    },
    close: function () {
        console.log('close the connection');
    }
};

try {
    connection.open();
} catch (error) {
    console.log(error.message);
} finally {
    connection.close();
}

let message = 'Hi, are you there? hi, HI...';
let re = /hi/gi;
let matches = [];
let match;
do {
    match = re.exec(message);
    if(match) {
      matches.push(match);
    }
} while(match != null)
console.dir(matches);

let str = "Are you Ok? Yes, I'm OK";
let result = str.match(/OK/gi);
console.log(result);

result = str.replace(/OK/gi, "fine");
console.log(result);

let phone = "+1-(408)-555-0105";
re = /\d/gi;
let num = phone.match(re).join("");
console.log(num);

str = `1st line
2nd line
3rd line`;
re = /^\d/gm;
matches = str.match(re).join("");
console.log(matches);

str = "How cats, rats, and bats became Halloween animals";
re = /[cbr]ats/g;
results = str.match(re).join(" ");
console.log(results);

result = "It is 🍎".match(/[🍎🍅🍓]/);
console.log(result);

str = '🍎🍅🍓';
for(let i=0; i<str.length; i++) {
    console.log(str.charCodeAt(i));
}

result = "It is 🍎".match(/[🍎🍅🍓]/u).join("");
console.log(result);

str = "ECMAScript 2020";
re = /\d{4}/;
result = str.match(re).join("");
console.log(result);

str = "The official name of ES11 is ES2020";
re = /\d{2,4}/g;
result = str.match(re);
console.log(result);


function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
console.log(sum(1, 2, 3));

const combine = (...args) => {
	return args.reduce(function (prev, curr) {
		return prev + " " + curr;
	});
};
message = combine("JavaScript", "Rest", "Parameters");
console.log(message); // JavaScript Rest Parameters

var rivers = ["Nile", "Ganges", "Yangtze"];
var moreRivers = ["Danube", "Amazon"];
Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};
console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000

let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};
server['starting up']();
server.restart();


// JavaScript for of loop examples
let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score);
}
let colors = ['Red', 'Green', 'Blue'];
for (let color of colors) {
    console.log(color);
}
for (let [index, color] of colors.entries()) {
  console.log(`${index + " " + color}`);
}

// 2) In-place object destructuring with for…of
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];
for (const row of ratings) {
    console.log(row.user +" "+ row.score);
}
// with index
for (const [index,row] of ratings.entries()) {
  console.log(`${index+1 +" "+ row.user + " " + row.score}`);
}
// 3) Iterating over strings
str = 'abc';
for (let c of str) {
    console.log(c);
}
// 3) Iterating over Map objects
colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');
for (let color of colors) {
    console.log(color);
}
// 4) Iterating over Set objects
let nums = new Set([1, 2, 3]);
for (let num of nums) {
    console.log(num);
}

// JavaScript template literals
str = `Template literal in ES6`;
console.log(str);// Template literal in ES6
console.log(str.length); // 23
console.log(typeof str);// string

let anotherStr = `Here's a template literal`;
let strWithBacktick = `Template literals use backtick \` instead of quotes`;
console.log(anotherStr);
console.log(strWithBacktick);

var msg = 'Multiline \n\
string';
console.log(msg);
//Multiline
//string
msg = ["This text", "can", "span multiple lines"].join("\n");
console.log(msg);

// JavaScript Array destructuring
function getScores() {
   return [70, 80, 90];
}
let [x, y, z] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

function getScore() {
   return [70, 80, 90, 100];
}
[x, y, z] = getScore();
console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
// Array Destructuring Assignment and Rest syntax
[z, y ,...args] = getScore();
console.log(z); // 70
console.log(y); // 80
console.log(args); // [90, 100]

let a, b;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

function getItems() {
    return [10, 20];
}
let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log(thirdItem); // 0

a, b;
[a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2
// Nested array destructuring
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}
let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();
console.log(color1, color2, color3); // Red Green Blue
console.log(firstName);
// Functions that return multiple values
function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
[sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10


// JavaScript object destructuring assignment
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
// Setting default values
person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstNamed, lastNamed, middleName = 'a', currentAge: age = 18 } = person;
console.log(middleName); // a
console.log(age); // 28
