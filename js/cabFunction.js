// Introduction to the JavaScript call() method.
function show() {
  console.log("Show function");
  console.log(this);
}
console.log(show instanceof Function); //true
show();
show.call();
function add(a, b) {
  return a + b;
}
let result = add.call(this, 10, 20);
console.log(result);
var greeting = 'Hi';
var messenger = {
  greeting: 'Hello',
};
function say(name) {
  console.log(this.greeting +' '+ name);
}
say.call(this, 'John');
say.call(messenger, "John");
// Using the JavaScript call() method to chain constructors for an object.
function Box(height, width) {
  this.height = height;
  this.width = width;
}
function Widget(height, width, color) {
  this.color = color;
  Box.call(this, height, width);
}
let widget = new Widget('red', 100, 200);
function getOddNumbers() {
  const args = Array.prototype.slice.call(arguments);
  return args.filter((num) => num % 2);
}
let oddNumbers = getOddNumbers(10, 3, 4, 7, 4, 1, 5, 9);
console.log(oddNumbers);
















