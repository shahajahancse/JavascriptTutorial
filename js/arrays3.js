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
console.log(sum);
