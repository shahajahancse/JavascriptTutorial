// element.attributes
let input = document.querySelector("#userName");
for (let attr of input.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}

// Attribute-property synchronization
let tabIndex = document.getElementById('tabIndex');
tabIndex.setAttribute("tabindex", 2);
console.log(tabIndex.tabIndex);  // 2
tabIndex.setAttribute('tabindex', 3); // property -> attribute
console.log(tabIndex.getAttribute("tabIndex")); // 3
tabIndex.setAttribute('value','guest'); // attribute -> property: OK
console.log(tabIndex.value); // guest
// property -> attribute: doesn't change
tabIndex.value = "admin";
console.log(tabIndex.getAttribute('value')); // guest
tabIndex.setAttribute('value','admin'); // but change
console.log(tabIndex.getAttribute('value')); //admin

// DOM properties are typed
let checkbox = document.querySelector('#chkAccept');
console.log(checkbox.checked); //true
let password = document.querySelector('#password');
let styleAttr = password.getAttribute('style');
console.log(styleAttr);
console.dir(password.style); // object CSSStyleDeclaration
// The data-* attributes
let bar = document.querySelector("#main");
console.log(bar.dataset);  // [object DOMStringMap] {  progress: "pending", value: "10%" }

// JavaScript setAttribute() example
let userName = document.querySelector("#userName");
if (userName) {
  userName.setAttribute('name', 'name');
  userName.setAttribute('disabled', "")
}

// JavaScript getAttribute() example
let js = document.querySelector("#js");
if (js) {
  let target = js.getAttribute('target');
  console.log(target); // _blank
}
if (js) {
  let title = js.getAttribute("title");
  console.log(title); //null
}

// JavaScript removeAttribute() example
if (userName) {
  userName.removeAttribute('disabled');
}

// JavaScript hasAttribute() example
if (userName) {
  let disabled = userName.hasAttribute("disabled");
  console.log(disabled);
}
if (js) {
  let target = js.hasAttribute('target');
  console.log(target);
}
