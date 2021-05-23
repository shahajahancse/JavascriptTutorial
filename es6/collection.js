// Introduction to the JavaScript Set object
let chars = new Set(["a", "a", "b", "c", "c"]);
console.log(chars);
console.log(typeof chars);
let result = chars instanceof Set;
console.log(result);
//Get the size of a Set
let size = chars.size;
console.log(size);//  3
// Add elements to a Set
chars.add("d");
console.log(chars);
// or
chars.add("e").add("f");
console.log(chars);
// Check if a value is in the Set
let exist = chars.has('a');
console.log(exist);// true
// Remove elements from a set
chars.delete('f');
console.log(chars); // Set {"a", "b", "c", "d", "e"}
// delete all element
chars.clear();
console.log(chars); // Set{}
// Looping the elements of a JavaScript Set
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');
for (let role of roles) {
    console.log(role);
}

for (let [key, value] of roles.entries()) {
    console.log(key === value);
}
// Invoke a callback function on each element of a set
roles.forEach((role) => console.log(role.toUpperCase()));
// WeakSets
let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server');
}





