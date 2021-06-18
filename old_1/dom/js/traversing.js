
// Introduction to parentNode attributeIntroduction to parentNode attribute
var note = document.querySelector('.note');
console.log(note);

// Getting Child Elements of a Node in JavaScript
let content = document.getElementById("menu");
let firstChild = content.firstElementChild;
console.log(firstChild);
// Get the last child element
console.log(content.lastElementChild);
// Get all child elements
console.log(content.children);

// Get the next siblings
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);
// To get all the next siblings of an element,
while (nextSibling) {
    nextSibling = nextSibling.nextElementSibling;
    if (nextSibling !== null) {
        console.log(nextSibling);
    }
}
// Get the previous siblings
let previousSibling = current.previousElementSibling;
console.log(previousSibling);

// Get all siblings of an element
let getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);
console.log(siblingText);


// JavaScript CreateElement
// 1 Creating a new div add id and class
let div = document.createElement('div');
div.id = 'content';
div.className = "class-add";
div.innerHTML = '<p>createElement example</p>';
div.firstElementChild.className = "class-name";
document.body.appendChild(div);
// create a new heading and add it to the div
let h2 = document.createElement('h2');
h2.id = 'h2Id';
h2.className = 'h2-class';
h2.textContent = "Add h2 element to the div";
div.appendChild(h2);
// 2) Creating new list items ( li) example
let li = document.createElement('li');
li.textContent = 'demo 1';
li.id = 'demo1';
li.className = 'demo-1';
content.appendChild(li);
li = document.createElement("li");
li.textContent = 'demo 2';
li.id = 'demo2';
li.className = 'demo-2';
content.appendChild(li);
// 3) Creating a script element example
function loadJSAsync(url) {
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}
// loadJSAsync('js/dom.js');

// 1) Simple appendChild() example with method()
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
const menu = document.querySelector('#menu');
menu.appendChild(createMenuItem('demo 3'));
menu.appendChild(createMenuItem('demo 4'));
menu.appendChild(createMenuItem('demo 5'));
// 2) Moving a node within the document example
const firstList = document.querySelector('#firstList');  // get the first list
const everest = firstList.firstElementChild;   // take the first child element
const secondList = document.querySelector('#secondList');   // get the second list
secondList.appendChild(everest);
// Reading textContent from a node
note = document.getElementById("main");
console.log(note.textContent);
console.log(note.innerText);
