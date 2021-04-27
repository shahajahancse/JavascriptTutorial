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
