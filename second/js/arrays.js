// reverse string
function reverse(str) {
    let stack = Array();
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    console.log(stack);
    // pop letter from the stack
    let reverseStr = "";
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('Javascript Stack')); // kcatS tpircSavaJ

// To  delete elements in an array, you pass two arguments into the splice() method // Ex Array.splice(position,num);
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]
// insert one or more elements into an array by the splice() method with the second argument is zero. // Array.splice(position,0,new_element_1,new_element_2,...);
let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
// Replacing elements using JavaScript Array splice() method
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 2, "Python", "Ruby","Go");
console.log(languages);  // ["C", "Python", "Java", "JavaScript"]

// Copy a portion of an array by slice() method
colors = ['red','green','blue','yellow','purple'];
var rgb = colors.slice(0,3);
console.log(rgb); // ["red", "green", "blue"]
// Convert array-like objects into arrays
function toArray() {
  return Array.prototype.slice.call(arguments);
}
var classification = toArray("jak", "joy", "roni");
console.log(classification); //  ["jak", "joy", "roni"]

// JavaScript Array every() method examples
let numbers = [1, 3, 5];
let isEven = numbers.every(function (e) {
    return e % 2 == 0;
});
console.log(isEven); //false
let isOdd = numbers.every(function (e) {
    return Math.abs(e % 2) == 1;
});
console.log(isOdd); // true
let range = {
    min: 0,
    mas: 10
};
range = {
    min: 0,
    max: 10
};
let isInRange = numbers.every(function (e) {
    return e >= this.min && e <= this.max;
}, range);
console.log(isInRange); //true

// Sorting an array
numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);
// Sorting an array of strings
let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort();
console.log(animals);
animals.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});
console.log(animals);
numbers.sort( function( a , b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(numbers);
let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals);
// Sorting an array of objects by a specified property
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
// Sorting objects by a numeric property
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
console.table(employees);
// Sorting objects by a string property
employees.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});
console.table(employees);
// Sorting objects by the date property
employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});
console.table(employees);

// JavaScript Array filter() method examples
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);
//  same as
bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);
// More JavaScript Array filter() method examples
cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));

function isInRanges(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}
let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
range = {
    lower: 1,
    upper: 10
};
let numberInRange = data.filter(isInRanges, range);
console.log(numberInRange); // [10, 1, 5]

// JavaScript Array map() method
let circles = [10, 30, 50];
let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);
// same as
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
areas = circles.map(circleArea);
console.log(areas);
// JavaScript Array map() examples
numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results);


numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); //6
// same as
um = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log(sum); // 6
// more example reduce()
let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
];
let total = shoppingCart.reduce(function (acc, curr) {
    return acc + curr.qty * curr.price;
},0);
console.log(total);
