let numberBtns = document.querySelector(".btns-left");
let operationButtons = document.querySelector(".btns-right");
const operatorOptions = ["+", "-", "x", "÷", "="];
//number buttons 1-9 with value
for (let i = 1; i < 10; i++) {
  let button = document.createElement("button");
  
  button.innerText = i;
  button.setAttribute("value", i);
  numberBtns.style.gridTemplateColumns = `repeat(3,1fr)`;
  numberBtns.style.gridTemplateRows = `repeat(3,20px)`;
  numberBtns.appendChild(button).classList.add("btn-number");
}
//numbers for functions

operatorOptions.forEach((option) => {
  let button = document.createElement("button");
  button.innerText = `${option}`;
  operationButtons.appendChild(button).classList.add("btn-operator");
});

//clear button, delete button
