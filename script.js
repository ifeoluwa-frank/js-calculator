"use strict";

// Input Button
let result = document.querySelector(".result-value");

// Number Buttons
const btn9 = document.querySelector(".button-9");
const btn8 = document.querySelector(".button-8");
const btn7 = document.querySelector(".button-7");
const btn6 = document.querySelector(".button-6");
const btn5 = document.querySelector(".button-5");
const btn4 = document.querySelector(".button-4");
const btn3 = document.querySelector(".button-3");
const btn2 = document.querySelector(".button-2");
const btn1 = document.querySelector(".button-1");
const btn0 = document.querySelector(".button-0");
const btnDecimal = document.querySelector(".button-decimal");

// Operator buttons
const btnPlus = document.querySelector(".button-plus");
const btnMinus = document.querySelector(".button-minus");
const btnDivide = document.querySelector(".button-divide");
const btnMultiply = document.querySelector(".button-times");
const btnEquals = document.querySelector(".button-equals");

// Assigning values
let currentValue = "";

function calculate() {
  btn9.addEventListener("click", function () {
    currentValue += "9";
    result.value = currentValue;
  });

  btn8.addEventListener("click", function () {
    currentValue += "8";
    result.value = currentValue;
  });

  btn7.addEventListener("click", function () {
    currentValue += "7";
    result.value = currentValue;
  });

  btn6.addEventListener("click", function () {
    currentValue += "6";
    result.value = currentValue;
  });

  btn5.addEventListener("click", function () {
    currentValue += "5";
    result.value = currentValue;
  });

  btn4.addEventListener("click", function () {
    currentValue += "4";
    result.value = currentValue;
  });

  btn3.addEventListener("click", function () {
    currentValue += "3";
    result.value = currentValue;
  });

  btn2.addEventListener("click", function () {
    currentValue += "2";
    result.value = currentValue;
  });

  btn1.addEventListener("click", function () {
    currentValue += "1";
    result.value = currentValue;
  });

  btn0.addEventListener("click", function () {
    currentValue += "0";
    result.value = currentValue;
  });

  btnPlus.addEventListener("click", function () {
    currentValue += "+";
    result.value = currentValue;
  });

  btnMinus.addEventListener("click", function () {
    currentValue += "-";
    result.value = currentValue;
  });

  btnDivide.addEventListener("click", function () {
    currentValue += "/";
    result.value = currentValue;
  });

  btnMultiply.addEventListener("click", function () {
    currentValue += "*";
    result.value = currentValue;
  });

  btnDecimal.addEventListener("click", function () {
    currentValue += ".";
    result.value = currentValue;
  });

  function hasDecimal(calcResult) {
    return calcResult !== Math.floor(calcResult);
  }

  btnEquals.addEventListener("click", function () {
    let calcResult = eval(result.value);

    if (hasDecimal(calcResult)) {
      result.value = calcResult;
    } else {
      result.value = Math.round(calcResult);
    }
  });
}

calculate();
