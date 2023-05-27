let numberA;
let numberB;
let operator;
let numberToDisplay = "";
let displaySection = document.querySelector(".display");
let digitButtons = document.querySelector(".digits").querySelectorAll("button");
let operatorButtons = document.querySelector(".operators").querySelectorAll("button");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");

digitButtons.forEach(digitButton => digitButton.addEventListener("click", displayDigit));

operatorButtons.forEach(operatorButton => {
  if(!operatorButton.classList.contains("clear") && !operatorButton.classList.contains("equal"))
    operatorButton.addEventListener("click", operationEvent);
});

equalButton.addEventListener("click", equalEvent);

clearButton.addEventListener("click", clearAll);

function displayDigit() {
  if((numberA && !operator) || numberToDisplay === "0") {
    numberToDisplay="";
    numberA = 0;
  }
  numberToDisplay += this.textContent;
  displaySection.textContent = numberToDisplay;
}

function operationEvent() {
  if(!numberA || !operator) {
    numberA = +numberToDisplay;
    operator = this.textContent;
    numberToDisplay = "";
    return;
  }

  operationHandler()
  operator = this.textContent;
  numberToDisplay = "";
}

function equalEvent() {
  if (!operator || !numberToDisplay) return;

  operationHandler();
  numberToDisplay = numberA.toString();
  operator = "";
  numberB = 0;
}

function operationHandler() {
  if(operator === "/" && numberToDisplay === "0") {
    clearAll();
    displaySection.textContent = "Not gonna happen dude.";
    return;
  }

  numberB = +numberToDisplay;
  numberA = operate(numberA, numberB, operator);
  numberA = roundToDecimal(numberA,4);
  displaySection.textContent = numberA;
}

function clearAll() {
  numberA = 0;
  numberB = 0;
  operator = "";
  numberToDisplay = "";
  displaySection.textContent = "0";
}

function roundToDecimal(numberToRound,decimalPlaces){
  return +numberToRound.toFixed(decimalPlaces);
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
