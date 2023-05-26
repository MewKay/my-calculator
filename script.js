let numberA;
let numberB;
let operator;
let numberToDisplay = "";
let displaySection = document.querySelector(".display");
let digitButtons = document.querySelector(".digits").querySelectorAll("*");
let operatorButtons = document.querySelector(".operators").querySelectorAll("*");

digitButtons.forEach(digitButton => digitButton.addEventListener("click", displayDigit));

operatorButtons.forEach(operatorButton => {
  if(!operatorButton.classList.contains("clear") && !operatorButton.classList.contains("equal"))
    operatorButton.addEventListener("click", handleOperation)
});

function displayDigit() {
  numberToDisplay += this.textContent;
  displaySection.textContent = numberToDisplay;
}

function handleOperation() {
  displaySection.textContent = "";
  numberA = +numberToDisplay;
  numberToDisplay = ""; 
  operator = this.textContent;
}

function add(numberA, numberB){
  return numberA+numberB;
}

function substract(numberA,numberB){
  return numberA-numberB;
}

function multiply(numberA,numberB){
  return numberA*numberB;
}

function divide(numberA,numberB){
  return numberA/numberB;
}

function operate(numberA,numberB,operator){
 if(!operator) return;

 if(operator === "+") return add(numberA,numberB);
 else if (operator === "-") return substract(numberA,numberB);
 else if (operator === "*") return multiply(numberA,numberB);
 else if (operator === "/") return divide(numberA,numberB);
}
