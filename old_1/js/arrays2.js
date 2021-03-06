let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) {
    result = false;
    break;
  }
}
console.log(result);

// every()
result = numbers.every(function (e) {
  return e > 0;
});
console.log(result);
// the ES6 arrow functions, the code can be even shorter
result = numbers.every((e) => e > 0);
console.log(result);
// array elements are the even numbers.
let isEven = numbers.every(function (e) {
  return e % 2 == 0;
});
console.log(isEven);
//array elements are the odd numbers.
let isOdd = numbers.every(function (e) {
  return Math.abs(e % 2) == 1;
});
console.log(isOdd);
// range specified by the min and max of the range object.
let range = {
  min: 0,
  max: 10,
};
let isInRange = numbers.every(function (e) {
  return e >= this.min && e <= this.max;
}, range);
// every() method on an empty array, the method will always return true for any condition.
let gtZero = [].every((e) => e > 0); // any condition
let ltZero = [].every((e) => e < 0); // any condition
console.log("gtZero:", gtZero);
console.log("ltZero:", ltZero);

// the following array has at least one element less than 5, typically use a for loop, like this:
let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = false;
for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}
console.log(lessThanFive);
// some()
lessThanFive = marks.some(function (e) {
    return e < 5;
});
console.log(lessThanFive);
// the ES6 arrow functions, the code can be even shorter
lessThanFive = marks.some((e) => e < 5);
console.log(lessThanFive);
// Check if an element exists in the array
function exists(value, array) {
    return array.some((e) => e === value);
}
console.log(exists(4, marks));
console.log(exists(11, marks));
// Check if an array has one element that is in a range
result = marks.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);
console.log(result);
// Caution: Empty arrays, All time return false
result = [].some((e) => e > 0);
console.log(result); //false
result = [].some((e) => e <= 0);
console.log(result); //false


// Introduction to JavaScript array filter() method
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
// big City filter() by for loop
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population > 3000000) {
    bigCities.push(cities[i]);
  }
}
console.log(bigCities);
// The following example returns the same result  by filter()
bigCities = cities.filter(function (e) {
  return e.population > 3000000;
});
console.log(bigCities);
// ES6
bigCities = cities.filter((city) => city.population > 3000000);
console.log(bigCities);

// how to chain the three methods: filter(),sort(), and map();
cities
  .filter((city) => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map((city) => console.log(city.name + ":" + city.population));

// callback() function using the this keyword.
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
