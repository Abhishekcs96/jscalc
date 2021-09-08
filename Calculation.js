// store all essential data to be displayed in an object-calculator
//operator 2 will check if operator 1 and the operator have been inputted first
const calculator = {
  display: "0",
  operand1: null,
  operator: null,
  operand2: false,
};
const inputdigit = (digit) => {
  let { display, operand2 } = calculator;
  
  if (operand2 === true) {
    calculator.display= digit;
    calculator.operand2 = false;
  } else {
    
    calculator.display = display === "0" ? digit : display + digit;
  }
  console.log(calculator)
};

const decimal = (dot) => {
  if (!calculator.display.includes(dot)) {
    calculator.display += dot;
  }
};

const operator1 = (operator11) => {

  const {operand1, display, operator} = calculator
  let value1 = parseFloat(display);
  console.log(value1)

  if (operator && calculator.operand2)  {
    calculator.operator = operator11;
    console.log(calculator);
    return;
  }

  
  if (operand1 === null && !isNaN(value1)) {
    
    calculator.operand1 = value1;
    console.log(calculator.operand1)
    
  }

  if (operator ) {
    const result = calculation(operand1, value1, operator);
    console.log(result)
    calculator.display = String(result);
    calculator.operand1 = result;
    console.log(calculator)
  }

  calculator.operand2 = true;
  calculator.operator = operator11;
  console.log(calculator);
};

function calculation(operand1, operand22, operator) {
  
  
  if (operator === '+') {
    return operand1+operand22
  }

  if (operator === '-') {
    return operand1-operand22
  }

  if (operator === '*') {
    return operand1*operand22
  }

  if (operator === '/') {
    return operand1/operand22
  }

  return operand22;
};

const Displayupdate = () => {
  const disp = document.querySelector(".calculator-screen");
  disp.value = calculator.display;
};

Displayupdate();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const tget = event.target;
  if (!tget.matches("button")) {
    return -1 ;
  }
  if (tget.classList.contains("operator")) {
    operator1(tget.value);
    Displayupdate();
    return
  }
  if (tget.classList.contains("decimal")) {
    decimal(tget.value);
    Displayupdate();
    return
  }
  if (tget.classList.contains("equals-sign")) {
    operator1(tget.value);
    Displayupdate();
    return
  }
  if (tget.classList.contains("all-clear")) {
    console.log("Allclear", tget.value);
  } 
  
  
    inputdigit(tget.value);
    Displayupdate();
  
});
