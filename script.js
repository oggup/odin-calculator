//initial values

let a = null;
let b = null;
let heldOperator = null;
let operations = {
  add: (a, b) => Number(a) + Number(b),
  multiply: (a, b) => Number(a) * Number(b),
  divide: (a, b) => Number(a) / Number(b),
  subtract: (a, b) => Number(a) - Number(b),
};

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

//create buttons with event listenors
function createButtons(array, location, clickFunction) {
  array.forEach((option) => {
    let button = document.createElement("button");
    button.value = option;
    button.innerText = `${option}`;
    button.addEventListener("click", clickFunction);
    location.appendChild(button);
  });
}

const numberClick = (e) => {
  bottomScreen.append(e.target.value);
  b = bottomScreen.innerText;
};

const operator = (e) => {
  a = Number(a) + Number(b);
  topScreen.innerText = a;
  bottomScreen.innerText = "";
};

createButtons(topButtons, document.querySelector(".btns-top"), numberClick);
createButtons(row1Left, document.querySelector(".btn-row1"), numberClick);
createButtons(row2Left, document.querySelector(".btn-row2"), numberClick);
createButtons(row3Left, document.querySelector(".btn-row3"), numberClick);
createButtons(row4Left, document.querySelector(".btn-row4"), numberClick);
createButtons(operatorOptions, operatorButtons, operator);

let backSpace = () => console.log("delete");
let equals = () => console.log("equals");

//use objects and keys to get value of operators: symbol//
//add:"+"make array to make buttons and what is shown on screen//
