let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistory = document.querySelector('.input-history');
let inputHistoryButton = document.querySelector('.input-history-button');
let inputHistoryList = document.querySelector('.input-history-list');
let onInputHistoryItemClick = function (event) {
  let target = event.target;
  let content = target.textContent;
  let parts = content.split('=');
  let equation = parts[0];
  let result = parts[1];
  inputEquation.textContent = equation;
  input.value = result;
  inputHistory.classList.remove('open');
};
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;
  }

  let div = document.createElement('div');
  let equation = inputValue;
  div.textContent = `${equation}=${result}`;
  inputHistoryList.appendChild(div);

  input.value = result;
};
let clearInput = function () {
  input.value = '';
  inputEquation.textContent = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};

let isLastCharacterAnOperator = function (value) {
  let lastCharacter = value.substr(-1);
  let operators = ['+', '-', '*', '/', '.'];

  let result = operators.includes(lastCharacter);
  return result;
};

let disableOperatorButtons = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let button = operatorButtons[i];
    button.disabled = disabled;
  }
};

let processCalculatorAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;
    let newValue = inputValue + action;

    input.value = newValue;
  }

  let isOperator = isLastCharacterAnOperator(input.value);

  if (isOperator) {
    disableOperatorButtons(true);
  } else {
    disableOperatorButtons(false);
  }
};
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;
  processCalculatorAction(action);
};

for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}

let onBodyKeyUp = function (event) {
  let key = event.key;
  let action;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Backspace') {
    action = 'DEL';
  } else if (key === 'Escape') {
    action = 'AC';
  } else {
    action = key;
  }
  let acceptedKeys = [];

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    let buttonText = currentButton.textContent;

    acceptedKeys.push(buttonText);
  }

  if (acceptedKeys.includes(action)) {
    processCalculatorAction(action);
  }
  console.log(event.key);
};

document.body.addEventListener('keyup', onBodyKeyUp);

let onInputHistoryButtonClicked = function (event) {
  if (inputHistory.classList.contains('open')) {
    inputHistory.classList.remove('open');
  } else {
    inputHistory.classList.add('open');
  }
};

inputHistoryButton.addEventListener('click', onInputHistoryButtonClicked);
