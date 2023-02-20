const defaultResult = 0;
let currentResult = defaultResult;

//userInput을 숫자로 제공
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//중복되는 코드를 따로 함수로 뺌
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;

  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  /* 
    value를 받아오면 문자열로 오기 때문에 숫자로 바꿔줘야 한다.
    1. parseInt/parseFloat -> parseInt(userInput.value)
    2. + -> 문자열 앞에 +가 붙으면 숫자로 전환 가능함.

    숫자를 문자열로 변환해주는 것 .toString
    currentResult.toString()
  */
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;

  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;

  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;

  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
