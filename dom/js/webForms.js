// Put it all together: signup form
// First, develop the error() function
function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}
// Second, develop the success() function
function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}
// Third, develop the requireValue() function
function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}
// The signup form has the email field, therefore, we develop the function validateEmail()
function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}
// Fourth, select the signup form by its id using the getElementById() method:
const form = document.getElementById("signup");
// Fifth, select the form elements and initialize an array of objects,
// get name and email elements
const name = form.elements[0];
const email = form.elements[1];
const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email,message: 'Email is required'}
];
// Sixth, in the submit event handler checking
form.addEventListener('submit', (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});


// JavaScript Radio Button
let btn = document.querySelector('#btn');
// handle click button
btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue) {
        console.log(selectedValue);
    }
};

// Checking if a checkbox is checked
function getCheckboxValue(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}
btn = document.getElementById('box');
btn.addEventListener('click', (event) => {
    console.log(getCheckboxValue("color"));
});

// Check / Uncheck all checkboxes
function check(checked = true) {
    const cbs = document.querySelectorAll('input[name="color"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}

const btns = document.querySelector("#boxs");
btns.onclick = checkAll;

function checkAll() {
    check();
    // reassign click event handler
    this.onclick = uncheckAll;
}
function uncheckAll() {
    check(false);
    // reassign click event handler
    this.onclick = checkAll;
}

btn = document.querySelector('#select');
const sb = document.querySelector('#framework')
btn.onclick = (event) => {
    event.preventDefault();
    // show the selected index
    console.log(sb.selectedIndex);
    const selectedValues = [].filter
      .call(sb.options, (option) => option.selected)
      .map((option) => option.text);
    console.log(selectedValues);
};
