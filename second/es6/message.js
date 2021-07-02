
export let message = "ES6 Modules";
export let text = "hi";
// foo.js
export function foo() {
   console.log('foo');
}

// greeting.js
export function setMessage(msg) {
  return message = msg;
}

export class Person {
    constructor(name) {
        this.name = name;
        this._name = name;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        // newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
