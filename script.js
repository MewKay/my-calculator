let numberA;
let numberB;
let operator;
let numberToDisplay = "";
let displaySection = document.querySelector(".display");
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators");

digits.forEach(digit => digit.addEventListener("click", function (e) {
  displayDigit(e.target);
}));

operators.forEach(operator => {
  if(!operator.classList.contains("clear") && !operator.classList.contains("equal"))
    operator.addEventListener("click", function (e) {
      handleOperation(e.target);
    })
});

function displayDigit(digitButton) {
  numberToDisplay += digitButton.textContent;
  displaySection.textContent = numberToDisplay;
}

function handleOperation(operatorButton) {
  displaySection.textContent = "";
  numberA = +numberToDisplay;
  numberToDisplay = ""; 
  operator = operatorButton.textContent;
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
