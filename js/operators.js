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

