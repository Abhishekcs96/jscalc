// store all essential data to be displayed in calculator-object
//operator 2 will check if operator 1 and the operator have been inputted first
const calculator = {
  display: "0",
  operand1: null,
  operator: null,
  operand2: false,
};
const calclear = {};
Object.assign(calclear, calculator); //for future purposes (all-clear functionality)

const inputdigit = (digit) => {               
  let { display, operand2 } = calculator;

  if (operand2 === true) {
    calculator.display = digit;
    calculator.operand2 = false;
  } else {
    calculator.display = display === "0" ? digit : display + digit;
  }
  console.log(calculator);
};

const decimal = (dot) => {
  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
  }
};

const operator1 = (operator11) => {
  const { operand1, display, operator } = calculator;

  let value1 = parseFloat(display);
  console.log(value1);

  if (operator && calculator.operand2) {
    calculator.display += operator11;
    calculator.operator = operator11;
    console.log(calculator);
    return;
  }

  if (operand1 === null && !isNaN(value1)) {
    calculator.display += operator11;

    calculator.operand1 = value1;
    console.log(calculator.operand1);
  }

  if (operator == "+" || "-" || "*" || "/") {
    calculator.display += operator11;
    const result = calculation(operand1, value1, operator);
    const properresult = parseFloat(result.toFixed(3));
    calculator.display = properresult;
    calculator.operand1 = properresult;
    console.log(calculator);
  }

  calculator.operand2 = true;
  calculator.operator = operator11;
  console.log(calculator);
};

const specops = (operator11) => {
  const { operand1, display, operator } = calculator;
  let value1 = parseFloat(display);
  console.log(value1);

  if (operand1 === null && !isNaN(value1)) {
    calculator.operand1 = value1;
    console.log(calculator.operand1);
  }
  calculator.operand1 = value1;

  if (operator && !calculator.operand2) {
    calculator.operator = operator11;
    console.log(calculator);
    return;
  }

  if (operator == "x^2" || "root(x)" || "1/x") {
    const result = calculation2(value1, operator11);
    const properresult = parseFloat(result.toFixed(3));
    calculator.display = properresult;
    calculator.operand1 = properresult;
  }

  calculator.operand2 = false;
  calculator.operator = operator11;
};

const calculation2 = (operand1, operator11) => {
  if (operator11 == "x^2") {
    console.log(operand1, operator11);
    console.log(Math.pow(operand1, 2));
    return Math.pow(operand1, 2);
  }
  if (operator11 == "root(x)") {
    console.log(Math.sqrt(operand1));
    return Math.sqrt(operand1);
  }
  if (operator11 == "1/x") {
    console.log(1 / operand1);
    return 1 / operand1;
  }
};

const calculation = (operand1, operand22, operator) => {
  if (operator == "+") {
    return operand1 + operand22;
  }

  if (operator == "-") {
    return operand1 - operand22;
  }

  if (operator == "*") {
    return operand1 * operand22;
  }

  if (operator == "/") {
    return operand1 / operand22;
  }

  return operand22;
};

const allclear = () => {
  for (let key in calculator) {
    calculator[key] = calclear[key];
  }
};

const Displayupdate = () => {
  const disp = document.querySelector(".screen");
  disp.value = calculator.display;
};

const keys = document.querySelector(".keys");
keys.addEventListener("click", (event) => {
  const tget = event.target;
  if (!tget.matches("button")) {
    return;
  }
  if (tget.classList.contains("operator")) {
    operator1(tget.value);
    Displayupdate();
    return;
  }
  if (tget.classList.contains("decimal")) {
    decimal(tget.value);
    Displayupdate();
    return;
  }
  if (tget.classList.contains("equals-sign")) {
    operator1(tget.value);
    Displayupdate();
    return;
  }
  if (tget.classList.contains("specops")) {
    specops(tget.value);
    Displayupdate();
    return;
  }
  if (tget.classList.contains("all-clear")) {
    allclear();
    Displayupdate();
    return;
  }

  inputdigit(tget.value);
  Displayupdate();
});
