"use strict";

const ac = document.querySelector(".ac");
const screenValue = document.querySelector(".screen-value");
const firstValue = document.querySelector(".first-value");
const remove = document.querySelector(".remove");
const divide = document.querySelector(".op-divide");
const multiply = document.querySelector(".op-multiply");
const minus = document.querySelector(".op-minus");
const plus = document.querySelector(".op-plus");
const equals = document.querySelector(".key-equals");

let arr = [];
let num1 = null;
let num2 = null;
let operator = null;
let result = null;

function updateScreen() {
  screenValue.textContent = arr.join("") || result || 0;
  firstValue.textContent =
    (num1 !== null ? num1 : "") + (operator ? operator : "");
}

function calculate() {
  num2 = arr.length ? Number(arr.join("")) : num1;
  if (num1 === null) {
    num1 = num2;
  } else if (operator) {
    switch (operator) {
      case "+":
        num1 = num1 + num2;
        break;
      case "-":
        num1 = num1 - num2;
        break;
      case "x":
        num1 = num1 * num2;
        break;
      case "/":
        num1 = num2 === 0 ? "Error" : num1 / num2;
        break;
    }
  }
  result = num1;
  arr = [];
  operator = null;
  updateScreen();
}

function setOperator(op) {
  if (arr.length) {
    if (num1 === null) {
      num1 = Number(arr.join(""));
    } else {
      calculate();
    }
  }
  operator = op;
  arr = [];
  updateScreen();
}

function removeLast() {
  arr.pop();
  updateScreen();
}

function resetAll() {
  arr = [];
  num1 = null;
  num2 = null;
  result = null;
  operator = null;
  updateScreen();
}

window.onclick = function (e) {
  const target = e.target.classList;
  switch (true) {
    case target.contains("key-0"):
      arr.push(0);
      break;
    case target.contains("key-1"):
      arr.push(1);
      break;
    case target.contains("key-2"):
      arr.push(2);
      break;
    case target.contains("key-3"):
      arr.push(3);
      break;
    case target.contains("key-4"):
      arr.push(4);
      break;
    case target.contains("key-5"):
      arr.push(5);
      break;
    case target.contains("key-6"):
      arr.push(6);
      break;
    case target.contains("key-7"):
      arr.push(7);
      break;
    case target.contains("key-8"):
      arr.push(8);
      break;
    case target.contains("key-9"):
      arr.push(9);
      break;
    case target.contains("key-dot"):
      if (!arr.includes(".")) arr.push(".");
      break;
    case target.contains("op-plus"):
      setOperator("+");
      break;
    case target.contains("op-minus"):
      setOperator("-");
      break;
    case target.contains("op-multiply"):
      setOperator("x");
      break;
    case target.contains("op-divide"):
      setOperator("/");
      break;
    case target.contains("key-equals"):
      calculate();
      break;
    case target.contains("op-remove"):
      removeLast();
      break;
    case target.contains("op-ac"):
      resetAll();
      break;
  }
  updateScreen();
};

//on keyboard
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "0":
      arr.push(0);
      break;
    case "1":
      arr.push(1);
      break;
    case "2":
      arr.push(2);
      break;
    case "3":
      arr.push(3);
      break;
    case "4":
      arr.push(4);
      break;
    case "5":
      arr.push(5);
      break;
    case "6":
      arr.push(6);
      break;
    case "7":
      arr.push(7);
      break;
    case "8":
      arr.push(8);
      break;
    case "9":
      arr.push(9);
      break;
    case ".":
      if (!arr.includes(".")) arr.push(".");
      break;
    case "Enter":
      calculate();
      break;
    case "Backspace":
    case "Delete":
      removeLast();
      break;
    case "Escape":
      resetAll();
      break;
    case "+":
      setOperator("+");
      break;
    case "-":
      setOperator("-");
      break;
    case "*":
      setOperator("x");
      break;
    case "/":
      setOperator("/");
      break;
  }

  updateScreen();
});

resetAll();
