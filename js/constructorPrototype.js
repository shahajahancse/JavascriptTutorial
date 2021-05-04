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
console.log(person.toString());
console.log(person.__proto__);
let teacher = {
  teach: function (subject) {
    return "I can teach " + subject;
  },
};
teacher.__proto__ = person;
console.log(teacher.name);
console.log(teacher.greet());
// A standard way to implement prototypal inheritance in ES5
teacher = Object.create(person);
teacher.name = "Jane Doe";
teacher.teach = function (subject) {
  return "I can teach " + subject;
};
// Or
// let teacher = Object.create(person, {
//   name: { value: "John Doe" },
//   teach: {
//     value: function (subject) {
//       return "I can teach " + subject;
//     },
//   },
// });
console.log(Object.getPrototypeOf(teacher) === person);

