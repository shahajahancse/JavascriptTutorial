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

