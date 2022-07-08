//initial values
let a = null;
let b = null;
let heldOperator = null;
//click functions
const numberClick = (e) => {
  if (a !== null && heldOperator === null) {
    topScreen.innerText = null;
    a = null;
  }
  console.log(heldOperator);
  bottomScreen.append(e.target.value);
  b = bottomScreen.innerText;
};
const calculate = () => {
  if (a !== null && b !== null) {
    let result =
      heldOperator === "+"
        ? Number(a) + Number(b)
        : heldOperator === "x"
        ? Number(a) * Number(b)
        : heldOperator === "÷"
        ? b > 0
          ? Number(a) / Number(b)
          : "ERROR: CAN'T DIVIDE BY ZERO"
        : heldOperator === "-"
        ? Number(a) - Number(b)
        : false;
    bottomScreen.innerText = null;
    console.log(a, heldOperator, b, "=", result);
    a = result;
    topScreen.innerText = a;
    heldOperator = null;
  }
};

const backSpace = () => {
  console.log("backspace");
};
const clear = () => {
  console.log("clear");
  a = null;
  b = null;
  heldOperator = null;
  topScreen.innerText = a;
  bottomScreen.innerText = b;
};
const operatorClick = (e) => {
  if (a === null) {
    a = b;
    checkOp(e.target.value);
  } else if (b === null) {
    checkOp(e.target.value);
  } else {
    b = null;
    calculate();
    heldOperator = e.target.value;
    topScreen.innerText = `${a} ${heldOperator}`;
    bottomScreen.innerText = null;
  }
};
const checkOp = (operator) => {
  heldOperator = operator;
  topScreen.innerText = `${a} ${heldOperator}`;
  bottomScreen.innerText = null;
  b = null;
};
//dom locations
let topScreen = document.querySelector(".top-screen");
let bottomScreen = document.querySelector(".bottom-screen");
let leftButtons = document.querySelector(".btn-left");
let operatorButtons = document.querySelector(".btn-right");
//buttons
let topButtons = [
  { function: clear, value: "Clear" },
  { function: backSpace, value: "Backspace" },
];
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
createButtons(topButtons, document.querySelector(".btns-top"));
createButtons(row1Left, document.querySelector(".btn-row1"), numberClick);
createButtons(row2Left, document.querySelector(".btn-row2"), numberClick);
createButtons(row3Left, document.querySelector(".btn-row3"), numberClick);
createButtons(row4Left, document.querySelector(".btn-row4"));
createButtons(operations, operatorButtons);
