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
