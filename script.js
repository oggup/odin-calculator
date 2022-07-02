let topButtons = ["Clear", "Backspace"];
let row1Left = [7, 8, 9];
let row2Left = [4, 5, 6];
let row3Left = [1, 2, 3];
let row4Left = [".", 0, "="];
let operatorOptions = ["÷", "x", "-", "+"];
let leftButtons = document.querySelector(".btn-left");
let operatorButtons = document.querySelector(".btn-right");
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let clear = () => console.log("cleared");
let backSpace = () => console.log("delete");
let equals = () => console.log("equals");

const log = (e) => {
  document.querySelector(".bottom-screen").append(e.target.value);
};
const operator = (e) => {
  console.log(e.target.value);
  heldValue = document.querySelector(".bottom-screen").innerText;
  document;
  //   e.target.value === "+"? add(heldValue, nextValue):
  document.querySelector(".top-screen").append(heldValue);
  console.log(heldValue);
  document.querySelector(".bottom-screen").innerText = "";
};

function createButtons(array, location, clickFunction) {
  array.forEach((option) => {
    let button = document.createElement("button");
    button.value = option;
    button.innerText = `${option}`;
    button.addEventListener("click", clickFunction);
    location.appendChild(button);
  });
}

createButtons(topButtons, document.querySelector(".btns-top"), log);
createButtons(row1Left, document.querySelector(".btn-row1"), log);
createButtons(row2Left, document.querySelector(".btn-row2"), log);
createButtons(row3Left, document.querySelector(".btn-row3"), log);
createButtons(row4Left, document.querySelector(".btn-row4"), log);
createButtons(operatorOptions, operatorButtons, operator);
