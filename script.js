//initial values
let a = null;
let b = null;
let heldOperator = null;
let operations = [
  {
    function: (a, b) => Number(a) + Number(b),
    value: "+",
  },
  { function: (a, b) => Number(a) * Number(b), value: "x" },
  { function: (a, b) => Number(a) / Number(b), value: "÷ " },
  { function: (a, b) => Number(a) - Number(b), value: "-" },
];

//buttons
let topButtons = ["Clear", "Backspace"];
let row1Left = [7, 8, 9];
let row2Left = [4, 5, 6];
let row3Left = [1, 2, 3];
let row4Left = [".", 0, "="];
let operatorOptions = ["÷", "x", "-", "+"];

//dom locations
let topScreen = document.querySelector(".top-screen");
let bottomScreen = document.querySelector(".bottom-screen");
let leftButtons = document.querySelector(".btn-left");
let operatorButtons = document.querySelector(".btn-right");

//create buttons with event listeners
function createButtons(array, location, clickFunction) {
  array.forEach((option) => {
    let button = document.createElement("button");
    option.value
      ? (button.value = option.value) &&
        button.setAttribute("operator", option.function)
      : (button.value = option);
    button.innerText = button.value;
    button.addEventListener("click", clickFunction);
    location.appendChild(button);
  });
}
//click functions
const numberClick = (e) => {
  bottomScreen.append(e.target.value);
  b = bottomScreen.innerText;
  console.log(e.target)
  console.log("b", b)
};

const operator = (e) => {
  console.log(e.target);
  a = Number(a) + Number(b);
  topScreen.innerText = a;
  bottomScreen.innerText = "";
};

//function that returns operation if operation = button operation
//find operation that is equal

//buttons being created
createButtons(topButtons, document.querySelector(".btns-top"), numberClick);
createButtons(row1Left, document.querySelector(".btn-row1"), numberClick);
createButtons(row2Left, document.querySelector(".btn-row2"), numberClick);
createButtons(row3Left, document.querySelector(".btn-row3"), numberClick);
createButtons(row4Left, document.querySelector(".btn-row4"), numberClick);
createButtons(operations, operatorButtons, operator);
