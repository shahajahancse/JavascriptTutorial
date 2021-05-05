// Introduction to the factory functions.
let john = {
    firstName : 'John',
    lastName : 'Due',
    getFullName () {
        return this.firstName +' '+ this.lastName;
    },
};
console.log(john.getFullName());
// create another similar object called jane, as a duplicate
let jane = {
    firstName: 'Jane',
    lastName: 'Due',
    getFullName (){
        return this.firstName +' '+ this.lastName;
    },
};
console.log(jane.getFullName());
// To avoid copying the same code all over again and again, develop a function that creates the person object.
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName (){
            return this.firstName +' '+ this.lastName;
        },
    };
};
john = createPerson('John', 'Due');
jane = createPerson('Jane', 'Due');
console.log(john.getFullName());
console.log(jane.getFullName());

