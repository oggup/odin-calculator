let row1Left = [7, 8, 9];
let row2Left = [4, 5, 6];
let row3Left = [1, 2, 3];
let row4Left = [".", 0, "="];
let operatorOptions = ["÷", "x", "-", "+"];
let leftButtons = document.querySelector(".btn-left");
let operatorButtons = document.querySelector(".btn-right");

function createButtons(array, location) {
  array.forEach((option) => {
    let button = document.createElement("button");
    button.value = option;
    button.innerText = `${option}`;
    location.appendChild(button);
  });
}

createButtons(row1Left, document.querySelector(".btn-row1"));
createButtons(row2Left, document.querySelector(".btn-row2"));
createButtons(row3Left, document.querySelector(".btn-row3"));
createButtons(row4Left, document.querySelector(".btn-row4"));
createButtons(operatorOptions, operatorButtons);

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let clear = () => console.log("cleared");
let backSpace = () => console.log("delete");
let equals = () => console.log("equals");
