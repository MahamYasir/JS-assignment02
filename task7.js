var firstNum = Number(prompt("Enter first number"));
var secondNum = Number(prompt("Enter second number"));
var operator = prompt("Select and enter any operator from +,-,*,/,%");

var summation = firstNum + secondNum
var subtraction = firstNum - secondNum
var multiplication = firstNum * secondNum
var division = firstNum / secondNum
var modulus = firstNum % secondNum

if (operator === "+") {
    alert("Result = " + summation);
} 
else if (operator === "-") {
    alert("Result = " + subtraction);
  }
else if (operator === "*") {
    alert ("Result = " + multiplication);
} 
else if (operator === "/") {
    alert ("Result = " + division);
} 
else if (operator === "%") {
    alert ("Result = " + modulus);
} 