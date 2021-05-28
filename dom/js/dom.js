// The window object is the Global object
var counter = 1;
showCounter = () => console.log(counter);
console.log(window.counter);
window.showCounter();
// The window object exposes the browser’s functionality
// 1 Window size
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// 2 Open a new window, Resize a window  &  Move a window
let features = "height=600,width=800";
let url = "http://localhost:5500/hello.html";
let jsWindow = window.open(url, "hello", features);
jsWindow.resizeTo(600, 300);
jsWindow.moveTo(300, 100);
// same as moveTo() and moveBy()
//  Close a window
setTimeout(() => {
    jsWindow.close();
}, 3000);


// Introduction to JavaScript confirm() method
let result = confirm('Are you sure you want to delete?');
let message = result ? 'You clicked the OK button' : 'You clicked the Cancel button';
alert(message);

// Introduction to JavaScript prompt() method
let lang = prompt("What is your favorite programming language?");
let feedback = lang.toLowerCase() === "javascript" ? `It's great!` : `It's ${lang}`;
alert(feedback);

let ageStr = prompt('How old are you?');
let age = Number(ageStr);
feedback = age >= 16 ?
    `You're eligible to join.` :
    `You must be at least 16 year old to join.`;
alert(feedback);


// Introduction to JavaScript setInterval()
let intervalID;
function toggleColor() {
    let e = document.getElementById('flashtext');
    e.style.color = e.style.color == 'red' ? 'blue' : 'red';
}
function start() {
    intervalID = setInterval(toggleColor, 1000);
}
function stop() {
    clearInterval(intervalID);
}




// URLSearchParams() methods
const urlParams = new URLSearchParams("?type=list&page=20");
for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}
// keys(), values() & entries()
for (const key of urlParams.keys()) {
    console.log(key);
}
for (const value of urlParams.values()) {
    console.log(value);
}
for (const entry of urlParams.entries()) {
    console.log(entry);
}
// Check if a query string parameter exists
console.log(urlParams.has("page"));
console.log(urlParams.has('Jak'));
