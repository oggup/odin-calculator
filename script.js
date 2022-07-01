let numberBtns = document.querySelector(".btns-left");
let operationButtons = document.querySelector(".btns-right");
const operatorOptions = ["÷", "x", "-", "+"];
let bottomButtons = [".", 0, "="];
//number buttons 1-9 with value
for (let i = 9; i > 0; i--) {
  let button = document.createElement("button");
  button.innerText = i;
  button.setAttribute("value", i);
  numberBtns.style.gridTemplateColumns = `repeat(3,1fr)`;
  numberBtns.style.gridTemplateRows = `repeat(3,20px)`;
  numberBtns.appendChild(button);
}
//numbers for functions
operatorOptions.forEach((option) => {
  let button = document.createElement("button");
  button.innerText = `${option}`;
  operationButtons.appendChild(button).classList.add("btn-operator");
});

//clear button, delete button,0

// let operatorOptions = [add, subtract, multiply, divide, clear, backSpace, equals];
// function operator(operator) {
    
//   return operator();
// }

bottomButtons.forEach((option) => {
  let button = document.createElement("button");
  button.innerText = `${option}`;
  //   button.setAttribute("value", option);
  console.log(button);
  numberBtns.appendChild(button);
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let clear = () => console.log("cleared");
let backSpace = () => console.log("delete");
let equals = () => console.log("equals");

function createButtons(array){
    array.forEach((option)=>{
        let button=document.createElement("button");
        button.innerText= `${option}`;
    })
}