
// Deleting elements using JavaScript Array’s splice() method
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);  // items delete
console.log(scores);

// Inserting elements using JavaScript Array splice() method
let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");  // items insert
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);  // ["red", "yellow", "pink", "green", "purple", "blue"]

// Replacing elements using JavaScript Array splice() method
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 2, "Python","Php", "Go"); // delete 2 items & insert 3 item
console.log(languages);  // ["C", "Python", "Php", "Go", "JavaScript"]

// Introduction to JavaScript Array sort() method
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);

// array.sort(comparefunction)
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
// ES6
numbers.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
// short hands
numbers.sort((a, b) => a - b);
console.log(numbers);

// Sorting an array of strings
let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort();
console.log(animals);
// desc ordering
animals.sort((a,b) => {
    if (a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(animals);

// sorting array with mixed cases
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];
// ASC order
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals);
// desc order
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? -1 : 1;
});
console.log(mixedCaseAnimals);

// Sorting an array of strings with non-ASCII characters
let animaux = ["zèbre", "abeille", "écureuil", "chat"];
animaux.sort();
console.log(animaux); // wrong to non-ASCII
// compare to non-ASCII
animaux.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(animaux);

// Sorting an array of numbers
scores = [9, 80, 10, 20, 5, 70];
// sort numbers in ascending order
scores.sort((a, b) => a - b);
console.log(scores);
// descending order
scores.sort((a, b) => b - a);
console.log(scores);

// Sorting an array of objects by a specified property
let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// Sorting objects by a numeric property
// sort by salary
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
console.table(employees);
// Sorting objects by a string property
// sort ny name
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


// Optimizing JavaScript Array sort() method
let rivers = ["Nile", "Amazon", "Congo", "Mississippi", "Rio-Grande"];
rivers.sort(function (a, b) {
  console.log(a, b);
  return a.length - b.length;
});
  console.log("Rivers Name : " + rivers);


