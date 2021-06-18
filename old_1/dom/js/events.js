// Introduction to JavaScript events
let btn = document.querySelector('#btn');
function display() {
    alert("It was clicked");
    console.log(event.type);
}
btn.addEventListener('click',display);
// preventDefault();
let link = document.querySelector('a');
link.addEventListener('click', function (event) {
    console.log('clicked');
    event.preventDefault();
})
// stopPropagation()
btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});
document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});

// Handling Events in JavaScript
// 1) HTML event handler attributes
function showLog() {
    console.log('Thank you.');
    console.log(this.value);
}
// 2) DOM Level 0 event handlers
btn.onclick = function() {
    alert(this.id);
};
// 3) DOM Level 2 event handlers addEventListener & removeEventListener
// remove the event listener
btn.removeEventListener("click", display);

// JavaScript Page Load Events
// Handling JavaScript page load events
addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});
addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});
addEventListener('unload', (event) => {
    // send analytic data
});


// The image’s load event
let logo = document.querySelector('#logo');
logo.addEventListener('load', (event) => {
    console.log('Logo has been loaded');
});
logo.src = "https://i.fbcd.co/products/original/b5b93c139fc3ed4c8fcdaf0e4c518f1565b34c24a90e0a382210100ede7bce9d.jpg";

// Introduction to JavaScript keyboard events
let textBox = document.getElementById("message");
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key}, code=${event.code}`);
});

// JavaScript focus event examples
const pwd = document.querySelector('input[type="password"]');
pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});
pwd.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});

// Introduction to JavaScript Event Delegation
let menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
        default:
            console.log('No item clicked');
            break;
    }
});


// JavaScript custom event example
 function highlight(elem) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;
    // create the event
    let event = new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    });
    // dispatch the event
    elem.dispatchEvent(event);
}
// Select the div element
let div = document.querySelector('.note');
// Add border style
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}
// Listen to the highlight event
div.addEventListener('highlight', function (e) {
    addBorder(this);
    // examine the background
    console.log(e.detail);
});
// highlight div element
highlight(div);


// Introduction to the JavaScript MutationObserver API
// Observing changes to child elements
let list = document.getElementById('menu'); // selecting the list
// selecting buttons
let btnAdd = document.querySelector('#btnAdd');
let btnRemove = document.querySelector('#btnRemove');
let btnStart = document.querySelector('#btnStart');
let btnStop = document.querySelector("#btnStop");
btnStop.disabled = true;
// Second, declare a log() function that will be used as a callback for the MutationObserver:
function log(mutations) {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            console.log(mutation);
        }
    }
}
// Third, create a new MutationObserver object:
let observer = new MutationObserver(log);
// Fourth, start observing the DOM changes to the child nodes
btnStart.addEventListener('click', function () {
    observer.observe(list, {
        childList: true
    });
    btnStart.disabled = true;
    btnStop.disabled = false;
});
// Fifth, add a new list item when the add button is clicked:
let counter = 1;
btnAdd.addEventListener('click', function () {
    // create a new item element
    let item = document.createElement('li');
    item.textContent = `Item ${counter++}`;
    // append it to the child nodes of list
    list.appendChild(item);
});
// Sixth, remove the last child of the list
btnRemove.addEventListener('click', function () {
    list.lastElementChild ?
        list.removeChild(list.lastElementChild) :
        console.log('No more child node to remove');
});
// Finally, stop observing DOM changes when the Stop Observing button is clicked
btnStop.addEventListener('click', function () {
    observer.disconnect();
    // set button states
    btnStart.disabled = false;
    btnStop.disabled = true;
});
// Or, Put it all together:
// (function () {
//     // selecting the list
//     let list = document.querySelector('#language');
//     // selecting the buttons
//     let btnAdd = document.querySelector('#btnAdd');
//     let btnRemove = document.querySelector('#btnRemove');
//     let btnStart = document.querySelector('#btnStart');
//     // disable the stop button
//     let btnStop = document.querySelector('#btnStop');
//     btnStop.disabled = true;

//     function log(mutations) {
//         for (let mutation of mutations) {
//             if (mutation.type === 'childList') {
//                 console.log(mutation);
//             }
//         }
//     }

//     let observer = new MutationObserver(log);
//     btnStart.addEventListener('click', function () {
//         observer.observe(list, {
//             childList: true
//         });

//         btnStart.disabled = true;
//         btnStop.disabled = false;
//     });

//     btnStop.addEventListener('click', function () {
//         observer.disconnect();
//         // Set the button state
//         btnStart.disabled = false;
//         btnStop.disabled = true;
//     });

//     let counter = 1;
//     btnAdd.addEventListener('click', function () {
//         // create a new item element
//         let item = document.createElement('li');
//         item.textContent = `Item ${counter++}`;
//         // append it to the child nodes of list
//         list.appendChild(item);
//     });

//     btnRemove.addEventListener('click', function () {
//         list.lastElementChild ?
//             list.removeChild(list.lastElementChild) :
//             console.log('No more child node to remove');
//     });
// })();
