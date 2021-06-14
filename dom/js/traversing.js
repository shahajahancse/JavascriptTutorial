
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
console.log(siblingText)



