// To add an element to the end of an array, by push()
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
console.log(seas);

// To add an element to the beginning of an array, by unshift()
seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.unshift("Red Sea");
console.log(seas);

// Removing an element from the end of an array, by pop()
const lastElement = seas.pop();
console.log(lastElement);

// Removing an element from the beginning of an array, by shift()
const firstElement = seas.shift();
console.log(firstElement);

// Finding an index of an element in the array, by indexOf()
let index = seas.indexOf('North Sea');
console.log(index); // 2

//  Check if an value is an array  Array.isArray()
console.log(Array.isArray(seas)); // true

// Introduction to the stack data structure & push()
let stack = [];
stack.push(1);
console.log(stack); // [1]
stack.push(2);
console.log(stack); // [1,2]
stack.push(3);
console.log(stack); // [1,2,3]
stack.push(4);
console.log(stack); // [1,2,3,4]
stack.push(5);
console.log(stack); // [1,2,3,4,5]

// Introduction to the stack data structure & pop()
console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];
console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];
console.log(stack.pop()); //  3
console.log(stack); // [1,2];
console.log(stack.pop()); //  2
console.log(stack); // [1];
console.log(stack.pop()); //  1
console.log(stack); // []; -> empty
console.log(stack.pop()); //  undefined

// Reverse a string using a JavaScript stack
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    console.log(stack);
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
        // console.log(stack.pop());
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ
