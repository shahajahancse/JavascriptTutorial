export let message = 'ES6 Modules.';
export function setMessage(msg) {
  message = msg;
}

export let a = 10,
           b = 20,
           result = 0;
export function sum() {
  result = a + b;
  return result;
}
export function multiply() {
  result = a * b;
  return result;
}
