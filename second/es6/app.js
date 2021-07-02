
import { message, text, setMessage, Person } from "./message.js";
import * as cal from "./cal.js";
import { minus } from "./cal.js";

const h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);

let p = document.createElement('p');
p.textContent = text;
document.body.appendChild(p);

console.log(setMessage(message));

console.log(cal.multiply());
console.log(cal.sum());
console.log(minus());

let person = new Person();
person.setName("Jane Doe");
console.log(person.getName());
person.name = "Joey Boe";
console.log(person.name);

// Using getter in an object literal
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};
meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);
