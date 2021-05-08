// JavaScript pass by value or pass by reference
function square (x) {
    x = x * x;
    return x;
}
var y = 10;
var result = square(y);
console.log(y); // 10 no change
console.log(result); // 100
// Passing by value of object
function turnOn(machine) {
    machine.isOn = true;
}
var computer = {
    isOn: false,
};
turnOn(computer);
console.log(computer.isOn);
function nameOn(machine) {
    machine = {
        isOn: true,
    };
}
computer = {
    isOn: false,
};
nameOn(computer);
console.log(computer.isOn);




