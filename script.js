const number = document.querySelectorAll(".num");
const viewport = document.querySelector(".viewport");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const decimal = document.querySelector("#decimal");
const allButtons = document.querySelectorAll(".num, .operator, #decimal");

allButtons.forEach(button => button.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "rgb(138, 239, 124)";
}));
allButtons.forEach(button => button.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "rgb(42, 33, 33)";
}));

number.forEach(number => number.addEventListener("click", e => {
    updateViewport(e.target.textContent)
}));

decimal.addEventListener("click", e => updateViewport(e.target.textContent));

operator.forEach(operator => operator.addEventListener("click", e => {
    updateViewport(e.target.textContent);
}));

equal.addEventListener("click", calculate);

clear.addEventListener("click", () => viewport.textContent = "");

function updateViewport(string) {
    if (viewport.textContent=== "MATH ERROR") {
    viewport.textContent= string;
    } else {
    viewport.textContent += string;
    }
}
back.addEventListener("click", () => {
    let string = viewport.textContent.split("");
    string.splice((string.length -1), 1)
    viewport.textContent = string.join("");
});

function calculate() {
    let equation = viewport.textContent;
    if (!isCharNumber(equation[0]) || !isCharNumber(equation[equation.length - 1])) {
        viewport.textContent= "MATH ERROR";
    }
    doMath(equation);

}
function isCharNumber(c) {
    return c >= '0' && c <= '9';
}

function doMath(string) {
    for (let i = 0; i <= string.length; i++) {
        switch (string[i]) {
            case "/":
                return divide(listify("/", string));
            case "*":
                return multiply(listify("*", string));
            case "-":
                return subtract(listify("-", string));
            case "+":
                return add(listify("+", string));
            case "%":
                return modulo(listify("%", string));
        }
    }
    function listify(sym, str) {
        let array = str.split(sym);
        let a = parseInt(array[0]);
        let b = parseInt(array[1]);

        if (array[0].includes(".")) {
            a = parseFloat(array[0])
        }
        if (array[1].includes(".")) {
            a = parseFloat(array[1])
        }
        return [a, b];
    }
}

function divide(array) {
    let a = array[0];
    let b = array[1];
    viewport.textContent = a / b;
}

function multiply(array) {
    let a = array[0];
    let b = array[1];
    viewport.textContent = a * b;
}

function subtract(array) {
    let a = array[0];
    let b = array[1];
    viewport.textContent = a - b;
}

function add(array) {
    let a = array[0];
    let b = array[1];
    viewport.textContent = a + b;
}

function modulo(array) {
    let a = array[0];
    let b = array[1];
    viewport.textContent = a % b;
}