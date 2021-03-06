// to calculate the total of elements of the array.
let numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('Sum is : ' + sum);  // 6

//  same work by reduce()
sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log('Sum is : ' + sum); // 6
// More JavaScript Array’s reduce() examples
let shoppingCart = [
  { product: "phone", qty: 1, price: 699, },
  { product: "Screen Protector", qty: 1, price: 9.98, },
  { product: "Memory Card", qty: 2, price: 20.99, },
];
let total = shoppingCart.reduce(function (acc, curr) {
  return acc + curr.qty * curr.price;
}, 0);
console.log("Total is : " + total);

// JavaScript Array reduceRight() method
sum = numbers.reduceRight(function (acc, curr) {
  console.log("acc: ", acc, "curr:", curr);
  return acc + curr;
});
console.log('reduce Right : ' + sum);

// Introduction to JavaScript Array map() method
// Typically, use a for loop to iterate over the elements, transform each individual one, and push the results into a new array.
let circles = [10, 30, 50];
let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i]);
  areas.push(area);
}
console.log(areas);
//  Same as map() And Syntax  ES5.
function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
areas = circles.map(circleArea);
console.log(areas);
// shorter, pass in the map() method an anonymous function.
areas = circles.map(function (radius) {
  return Math.floor(Math.PI * radius * radius);
});
console.log(areas);
// Amd ES6 Syntax used
areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
console.log(areas);
// More JavaScript Array map() examples
numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results);

// Introduction to JavaScript Array forEach() method.
// Typically, to execute a function on every element of an array, use a for loop statement.
let ranks = ["A", "B", "C"];
for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}
// Same as to forEach()
ranks.forEach(function (e) {
  console.log(e);
});
// More JavaScript Array forEach() method example.
// The following illustrates Counter constructor function:
function Counter() {
  this.count = 0;
  let self = this;
  return {
    increase: function () {
      self.count++;
    },
    current: function () {
      return self.count;
    },
    reset: function () {
      self.count = 0;
    },
  };
}

var counter = new Counter();
numbers = [1, 2, 3];
sum = 0;
numbers.forEach(function (e) {
    sum += e;
    this.increase();
}, counter);
console.log(sum); // 6
console.log(counter.current()); // 3

// JavaScript Array join() method examples.
// 1) Using the JavaScript Array join() method to join CSS classes.
const cssClasses = ["btn", "btn-primary", "btn-active"];
const btnClass = cssClasses.join(" ");
console.log(btnClass);
// 2) Using the JavaScript Array join() method to replace all occurrences of a string.
const title = "JavaScript array join example";
const url = title.split(" ").join("-").toLowerCase();
console.log(url);

// Introduction to JavaScript multidimensional array.
let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
console.table(activities);
console.log(activities[0][1]); // 9
// Adding elements to the JavaScript multidimensional array.
// add a new element at the end of the multidimensional array, you use the push() method.
activities.push(["Study", 2]);
console.table(activities);
// To insert an element in the middle of the array splice() method. Inserts an element in the second position of the activities array:
activities.splice(1, 0, ["Programming", 2]);
console.table(activities);
// This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = percentage + "%";
});
console.table(activities);
// Removing elements from the JavaScript multidimensional array
// the following statement removes the last element of the activities array.
activities.pop();
console.table(activities);
// Similarly, remove the elements from the inner array of the multidimensional array by using the pop() method.
activities.forEach((activity) => {
  activity.pop(2);
});
console.table(activities);
// Iterating over elements of the JavaScript multidimensional array.
// To iterate a multidimensional array, you use a nested for loop as in the following example.
// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    var innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}
// Or you can use the forEach() method twice:
activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data);
  });
});

