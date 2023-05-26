let numberA;
let numberB;
let operator;
let numberToDisplay = "";
let displaySection = document.querySelector(".display");
let digitButtons = document.querySelector(".digits").querySelectorAll("*");
let operatorButtons = document.querySelector(".operators").querySelectorAll("*");
let equalButton = document.querySelector(".equal");

digitButtons.forEach(digitButton => digitButton.addEventListener("click", displayDigit));

operatorButtons.forEach(operatorButton => {
  if(!operatorButton.classList.contains("clear") && !operatorButton.classList.contains("equal"))
    operatorButton.addEventListener("click", operationEvent);
});

equalButton.addEventListener("click", equalEvent);

function displayDigit() {
  numberToDisplay += this.textContent;
  displaySection.textContent = numberToDisplay;
}

function operationEvent() {
  if(!numberA) {
    displaySection.textContent = "";
    numberA = +numberToDisplay;
    numberToDisplay = ""; 
    operator = this.textContent;
  }

  numberB = +numberToDisplay;
  numberA = operate(numberA,numberB,operator);
  operator = this.textContent;
  displaySection.textContent = numberA;
  numberToDisplay = "";
}

function equalEvent() {
  displaySection.textContent= "";
  numberB = +numberToDisplay;
  displaySection.textContent = operate(numberA,numberB,operator);
  numberA = 0;
  numberB = 0;
  numberToDisplay = "";
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
