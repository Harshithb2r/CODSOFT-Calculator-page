let currentInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  currentInput += ' ' + op + ' ';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = '';
  updateDisplay();
}

function calculate() {
  const parts = currentInput.split(' ');
  const num1 = parseFloat(parts[0]);
  const op = parts[1];
  const num2 = parseFloat(parts[2]);
  
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = '';
  }
  
  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
