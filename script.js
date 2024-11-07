//access the DOM elements of the calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

//define expression and result variable
let expression = '';
let result = '';

//define event handler for button clicks
function buttonClick (event) {
    //get values from the clicked button
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;

    console.log(target, action, value);
}