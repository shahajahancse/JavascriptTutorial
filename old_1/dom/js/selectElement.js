
var p = document.getElementById('message');
console.log(p);
// Introduction to JavaScript getElementsByName() method
var btn = document.getElementById("btnRate");
btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            alert(`You rated : ${rate.value}`);
        }
    })
});
// Introduction to JavaScript getElementsByTagName() method
var count = document.getElementById("btnCount");
count.addEventListener('click', () => {
    let elementLength = document.getElementsByTagName('h2');
    alert(`Number of elements : ${elementLength.length}`);
});
// Introduction to the getElementsByClassName() method
var items = document.getElementById("items");
var elements = items.getElementsByClassName('item');
var data = [].map.call(elements, (item) => item.value);
console.log(data);

var firstItem = document.getElementsByClassName("firstItem");
data = [].map.call(firstItem, (item) => item.textContent);
console.log(data);

// Introduction to JavaScript querySelector() and querySelectorAll() methods
// 1) Universal selector
var element = document.querySelector('*');
console.log('ok');
console.log(element);
var elements = document.querySelectorAll('*');
console.log('all');
console.log(elements);
// 2) Type selector
var firstHeading = document.querySelector('h1');
console.log('heading');
console.log(firstHeading);
var second = document.querySelectorAll('h2');
console.log('second');
console.log(second);
// 3) Class selector
var note = document.querySelector('.menu-item');
console.log(note);
var notes = document.querySelectorAll('.menu-item');
console.log('ok');
console.log(notes);
// 4) ID Selector
var btnCount = document.querySelector("#btnCount");
console.log(btnCount);
// 5) Attribute selector
let autoplay = document.querySelector("[autoplay]");
console.log(autoplay);
let autoplays = document.querySelectorAll("[autoplay]");
console.log(autoplays);
// Grouping selectors
var elements = document.querySelector("section h3");
console.log(elements);

