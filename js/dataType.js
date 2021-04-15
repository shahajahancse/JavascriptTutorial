/* //  undefined data type
let undefine;
console.log(undefine);        // undefined
console.log(typeof undefine); // undefined
console.log(typeof undeclaredVar); // undefined

let obj = null;
console.log(typeof obj); // object

if (obj != null) {
    console.log('ok');
} else {
    console.log('not ok');
}

console.log(null == undefined); // true */

/* let oct = 060; // octal for 48
console.log(oct);
let d = 090; // 90
console.log(d);

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
console.log('a'/2); //NaN value

let inProgress = true;
let completed = false;
console.log(typeof inProgress); // boolean
 */

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

let s2 = Symbol("event.save");
console.log(s2.toString()); // Symbol(event.save)

const click = Symbol("click");
console.log(click);

let contact = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

console.log(contact.firstName);
console.log(contact.address.city);
