const number = document.querySelectorAll(".num");
const viewport = document.querySelector(".viewport");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const allButtons = document.querySelectorAll(".num, .operator");

allButtons.forEach(button => button.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "rgb(138, 239, 124)";
}));
allButtons.forEach(button => button.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = "rgb(42, 33, 33)";
}));

number.forEach(number => number.addEventListener("click", e => {
    updateViewport(e.target.textContent)
}));

function updateViewport(string) {
    if (viewport.textContent=== "MATH ERROR") {
    viewport.textContent= string;
    } else {
    viewport.textContent += string;
    }
}

operator.forEach(operator => operator.addEventListener("click", e => {
    updateViewport(e.target.textContent);
}));

equal.addEventListener("click", calculate);

clear.addEventListener("click", () => viewport.textContent = "");

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

}
function isCharNumber(c) {
    return c >= '0' && c <= '9';
  }