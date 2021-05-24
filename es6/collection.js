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


// Introduction to JavaScript Map object
let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };
let userRoles = new Map();
console.log(typeof(userRoles)); // object
console.log(userRoles instanceof Map); // true
// Add elements to a Map
userRoles.set(john, "admin");
userRoles.set(lily, 'editor')
          .set(peter, 'subscriber');
// Initialize a map with an iterable object
userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);
// Get an element from a map by key
console.log(userRoles.get(john)); // admin
let foo = {name: 'Foo'};
console.log(userRoles.get(foo)); //undefined
// Check the existence of an element by key
console.log(userRoles.has(foo)); // false
console.log(userRoles.has(lily)); // true
// Get the number of elements in the map
console.log(userRoles.size); // 3
// Iterate over map keys
for (let user of userRoles.keys()) {
    console.log(user.name);
}
// John Doe
// Lily Bush
// Peter Drucker
// Iterate over map values
for (let role of userRoles.values()) {
    console.log(role);
}
// admin
// editor
// subscriber
// Iterate over map elements
for (let elem of userRoles.entries()) {
    console.log(`${elem[0].name}: ${elem[1]}`);
}
// John Doe: admin
// Lily Bush: editor
// Peter Drucker: subscriber
// or
for (let [user, role] of userRoles.entries()) {
  console.log(`${user.name}: ${role}`);
}
// or
userRoles.forEach((role, user) =>
    console.log(`${user.name}: ${role}`)
);
// Convert map keys or values to a array
var keys = [...userRoles.keys()];
console.log(keys);

roles = [...userRoles.values()];
console.log(roles);
// Delete an element by key
userRoles.delete(john);
console.log(userRoles.size); // 0
// Delete all elements in the map
userRoles.clear();
console.log(userRoles.size); // 0
