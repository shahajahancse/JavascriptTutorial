// Introduction to the JavaScript DocumentFragment interface
let languages = ["JS", "TypeScript", "Elm", "Dart", "Scala"];
let langEl = document.querySelector('#language');
let fragment = new DocumentFragment();
languages.forEach((language)=>{
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
});
langEl.appendChild(fragment);

// Introduction to JavaScript insertBefore() method
let menu = document.querySelector("#language");
//Create a new li note
let li = document.createElement('li');
li.textContent = "Home";
// insert a new node before the first list item
menu.insertBefore(li, menu.firstElementChild);
// JavaScript insertAfter
let service = document.querySelector("#menu");
li.textContent = "Service";
// insert a new node after the first list item
service.insertBefore(li, service.firstElementChild.nextSibling);

// Introduction to JavaScript append() method
let app = document.querySelector('#app');
let langs = ["TypeScript", "HTML", "CSS"];
let notes = langs.map((lang)=>{
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
})
app.append(...notes);
// 2) Using the append() method to append text to an element example
app.append("append() Text Demo");
console.log(app.textContent);

// 1) Using the prepend() method to prepend an element example
nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});
app.prepend(...nodes);



