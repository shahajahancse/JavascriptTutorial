// To add an element to the end of an array, by push()
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
console.log(seas);

// To add an element to the beginning of an array, by unshift()
seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.unshift("Red Sea");
console.log(seas);

// Removing an element from the end of an array, by pop()
const lastElement = seas.pop();
console.log(lastElement);

// Removing an element from the beginning of an array, by shift()
const firstElement = seas.shift();
console.log(firstElement);

// Finding an index of an element in the array, by indexOf()
let index = seas.indexOf('North Sea');
console.log(index); // 2

//  Check if an value is an array  Array.isArray()
console.log(Array.isArray(seas)); // true
