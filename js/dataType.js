//  undefined data type
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

console.log(null == undefined); // true
