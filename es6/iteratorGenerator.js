// JavaScript Iterators
class Sequence {
  constructor (start = 0, end = Infinity, interval = 1 ) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        console.log("cleaning up...");
        return { value: undefined, done: true };
      }
    }
  }
};
let evenNumbers = new Sequence(2, 10, 2);
for (const num of evenNumbers) {
  console.log(num);
}
// while loop
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();
while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}
// cleaning up
let oddNumbers = new Sequence(1, 10, 2);
for (const num of oddNumbers) {
    if( num > 7 ) {
        break;
    }
    console.log(num);
}


// Introduction to JavaScript Generators
function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate();
console.log(gen);
result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
for (const g of gen) {
    console.log(g);
}
// More generator examples.
function* forever() {
    let index = 0;
    while (true) {
        yield index++;
    }
}
let f = forever();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2
// Using generators to implement iterators
class Sequences {
  constructor( start = 0, end = Infinity, interval = 1 ) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  // [Symbol.iterator]() {
  //   let counter = 0;
  //   let nextIndex = this.start;
  //   return {
  //     next: () => {
  //       if ( nextIndex <= this.Infinity ) {
  //         let result = { value: nextIndex, done: false };
  //         nextIndex += this.interval;
  //         counter ++;
  //         return result;
  //       }
  //       return { value: counter, done: true };
  //     }
  //   }
  // }
  * [Symbol.iterator]() {
    for( let index = this.start; index <= this.end; index += this.interval ) {
        yield index;
    }
  }
}
oddNumbers = new Sequences(1, 10, 2);
for (const num of oddNumbers) {
  console.log(num);
}
// Using a generator to implement the Bag data structure
class Bag {
    constructor() {
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    add(element) {
        this.elements.push(element);
    }
    * [Symbol.iterator]() {
        for (let element of this.elements) {
            yield element;
        }
    }
}

let bag = new Bag();

bag.add(1);
bag.add(2);
bag.add(3);

for (let e of bag) {
    console.log(e);
}
