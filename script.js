const number = document.querySelectorAll(".num");
const viewport = document.querySelector(".viewport");
const operator = document.querySelectorAll(".operator");

number.forEach(number => number.addEventListener("click", e => {
    updateViewport(e.target.textContent)
}));

function updateViewport(string) {
    viewport.textContent += string;
}
