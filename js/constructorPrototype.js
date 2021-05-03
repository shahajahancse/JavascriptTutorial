function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return this.firstName +' '+ this.lastName;
}
p1 = new Person ('John', 'Due');
console.log(p1.getFullName());

// JavaScript prototypal inheritance and __proto__
let person = {
  name: "John Doe",
  greet: function () {
    return "Hi, I'm " + this.name;
  },
};
console.log(person instanceof Object);
