let ranks = ['A', 'B', 'C', 'D'];
for (let i = 0; i < ranks.length; i++) {
  const element = ranks[i];
  console.log(element);
}
//  same as
for (let rank of ranks) {
  console.log(rank);
}
// another iteration
class Sequence {
  constructor (start = 0, end = Infinity, interval = 1) {
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
          let result = { value:nextIndex, done:false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        console.log(`cleaning up...`);
        return { value: undefined, done: true };
      }
    }
  }
}
let oddNumbers = new Sequence(1, 10, 2);
for (const num of oddNumbers) {
  if ( num > 7 ) {
    break;
  }
  console.log(num);
}


function foo() {
  console.log("I");
  console.log("cannot");
  console.log("pause");
}
foo();
function* generate() {
  console.log("invoked 1st time");
  yield 1;
  console.log("invoked 2nd time");
  yield 2;
}
let gens = generate();
let gen = generate();
console.log(gen);
let result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
for (const g of gens) {
    console.log(g);
}

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
