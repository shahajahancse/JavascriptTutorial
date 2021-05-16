// import { message, setMessage, sum, multiply, result} from "./message.js";
// call all export
import * as all from "./message.js";
import { sum as total } from "./math.js";

const h1 = document.createElement('h1');
h1.textContent = all.message;
document.body.appendChild(h1);

console.log(all.message); // 'ES6 Modules.'
all.setMessage('Hello');
console.log(all.message); // 'Hello'

all.sum();
console.log(all.result); // 30
all.multiply();
console.log(all.result); // 200

console.log(total(20, 30));
// export { sum as add } from "./math.js";



