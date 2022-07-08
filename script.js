//initial values
let a = null;
let b = null;
let heldOperator = null;
//click functions
const numberClick = (e) => {
  bottomScreen.append(e.target.value);
  b = bottomScreen.innerText;
};
const calculate = (operator, a, b) => {
  console.log("we here");
};
const operatorClick = (e) => {
  let operator = operations.filter((f) => {
    if (f.value === e.target.value) {
      return f;
    }
  });
  a = b;
  topScreen.innerText = `${a}  ${operator[0].value}`;
  bottomScreen.innerText = "";
};
//dom locations
let topScreen = document.querySelector(".top-screen");
let bottomScreen = document.querySelector(".bottom-screen");
let leftButtons = document.querySelector(".btn-left");
let operatorButtons = document.querySelector(".btn-right");
//buttons
let topButtons = ["Clear", "Backspace"];
let row1Left = [7, 8, 9];
let row2Left = [4, 5, 6];
let row3Left = [1, 2, 3];
let row4Left = [
  { function: numberClick, value: "." },
  { function: numberClick, value: "0" },
  { function: calculate, value: "=" },
];
let operations = [
  {
    function: operatorClick,
    value: "+",
  },
  { function: operatorClick, value: "x" },
  { function: operatorClick, value: "÷" },
  { function: operatorClick, value: "-" },
];
//create buttons with event listeners
function createButtons(array, location, clickFunction) {
  array.forEach((option) => {
    let button = document.createElement("button");
    option.value ? (button.value = option.value) : (button.value = option);
    button.innerText = button.value;
    clickFunction
      ? button.addEventListener("click", clickFunction)
      : button.addEventListener("click", option.function);
    location.appendChild(button);
  });
}
//buttons being created
createButtons(topButtons, document.querySelector(".btns-top"), numberClick);
createButtons(row1Left, document.querySelector(".btn-row1"), numberClick);
createButtons(row2Left, document.querySelector(".btn-row2"), numberClick);
createButtons(row3Left, document.querySelector(".btn-row3"), numberClick);
createButtons(row4Left, document.querySelector(".btn-row4"));
createButtons(operations, operatorButtons);
