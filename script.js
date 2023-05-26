let numberA;
let numberB;
let operator;
let numberToDisplay = "";
let displaySection = document.querySelector(".display");
let digits = document.querySelectorAll(".digits");

digits.forEach(digit => digit.addEventListener("click", function (e) {
  display(e.target);
}));

function display(digitButton) {
  numberToDisplay += digitButton.textContent;
  displaySection.textContent = numberToDisplay;
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
  add(numberA,numberB);
}
