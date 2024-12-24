// Get the display element and buttons
const display = document.getElementById("display");

let currentInput = "";
let previousInput = "";
let operator = "";

// Function to update the display
function updateDisplay() {
  if (operator) {
    display.value = `${previousInput} ${operator} ${currentInput}`;
  } else {
    display.value = currentInput || previousInput || "0";
  }
}

// Handle number input
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Handle operator input
function setOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

// Perform the calculation
function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}

// Delete the last character from the display
function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  updateDisplay();
}

// Add event listeners to buttons
document.getElementById("btn-0").addEventListener("click", () => appendNumber("0"));
document.getElementById("btn-1").addEventListener("click", () => appendNumber("1"));
document.getElementById("btn-2").addEventListener("click", () => appendNumber("2"));
document.getElementById("btn-3").addEventListener("click", () => appendNumber("3"));
document.getElementById("btn-4").addEventListener("click", () => appendNumber("4"));
document.getElementById("btn-5").addEventListener("click", () => appendNumber("5"));
document.getElementById("btn-6").addEventListener("click", () => appendNumber("6"));
document.getElementById("btn-7").addEventListener("click", () => appendNumber("7"));
document.getElementById("btn-8").addEventListener("click", () => appendNumber("8"));
document.getElementById("btn-9").addEventListener("click", () => appendNumber("9"));

document.getElementById("btn-add").addEventListener("click", () => setOperator("+"));
document.getElementById("btn-subtract").addEventListener("click", () => setOperator("-"));
document.getElementById("btn-multiply").addEventListener("click", () => setOperator("*"));
document.getElementById("btn-divide").addEventListener("click", () => setOperator("/"));

document.getElementById("btn-equal").addEventListener("click", calculate);
document.getElementById("btn-clear").addEventListener("click", clearDisplay);
document.getElementById("btn-delete").addEventListener("click", deleteLastCharacter);
