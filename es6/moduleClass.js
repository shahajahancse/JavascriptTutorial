// import { message, setMessage, sum, multiply, result} from "./message.js";
// call all export
import * as all from "./message.js";
import { sum as total } from "./math.js";

const h1 = document.createElement('h1');
h1.textContent = all.message;
document.body.appendChild(h1);

console.log(all.message); // 'ES6 Modules.'
all.setMessage('Hello');
console.log(all.message); // 'Hello'

all.sum();
console.log(all.result); // 30
all.multiply();
console.log(all.result); // 200

console.log(total(20, 30));
// export { sum as add } from "./math.js";


// Classes to ES6 // Classes prior to ES6 revisited
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
var john = new Person('John Due');
console.log(john.getName());
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
/* ES6 class declaration */
class Persons {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
john = new Persons('John Due');
let name = john.getName();
console.log(name); // "John Doe"
console.log(typeof Persons); // function
console.log(john instanceof Persons); // true
console.log(john instanceof Object); // true

