/* let eligible = false,
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
 */

//  switch statement

var day = 3;
var dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Tuesday

var year = 2016;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}

console.log(dayCount); // 29

let count = 1;
while (count < 10) {
  console.log('while loop : ' +count);
  count += 2;
}

// create an array of five random number between 1 and 10
let rands = [];
let counts = 0;
const size = 5;

while (counts < size) {
  // rands.push(Math.round(Math.random() * 10));
  rands.push(Math.round(Math.random() * 10));
  counts++;
  console.log("The current size of the array is : " + counts);
}

console.log('Random array :' +rands);

//  do while loop
let coun = 0;
do {
  coun++;
  console.log("count is :" + coun);
} while (coun < 10);


// generate secret number is a random integer between 1 and 12
const MIN = 1;
const MAX = 12;
let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
    // get the integer
    number = parseInt(input);
    // increase the number of guesses
    guesses++;
    // check input number with the secret number
    // provide hint if needed
    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if(number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);


// initialize j variable
let j = 1;
for (;;) {
    // terminate the loop if j is greater than 10;
    if (j > 10) {
        break;
    }
    console.log(j);
    // increase the counter j
    j += 2;
}

