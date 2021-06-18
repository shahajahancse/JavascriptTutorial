console.log("Hello, World!");
var message;
function say() {
  var messages = "Hi";
  return messages;
}
console.log(message);

// alert("Hello, World!, I am learning JavaScript");
var variables = "JavaScript Variables";
console.log(variables);

// global variable
var message = "Hello";
function say() {
  // local variable
  var message = "Hi";
  console.log(message); // which message?
}
say(); // Hi
console.log(message); // Hello

// global variable
var message1 = "Hello1";
function says() {
  // local variable
  message1 = "Hi1";
  console.log(message1); // which message?
}
says(); // Hi
console.log(message1); // Hi

var a = 20,
  b = 10;
{
  let tmp = a;
  a = b;
  b = tmp;
}
console.log(tmp); // ReferenceError
