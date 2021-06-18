// Creating a proxy object
const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
}
const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}
const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

const getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}
const getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    }
});
console.log(getFullNameProxy(user)); //



class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
let args = ['John', 'Doe'];
let john = Reflect.construct(
    Person,
    args
);
console.log(john instanceof Person);
console.log(john.fullName); // John Doe

let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
console.log(result);
// or
result = Reflect.apply(Math.max, Math, [10, 20, 30]);
console.log(result);
