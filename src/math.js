function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Can't divide by Zero";
  return num1 / num2;
}

module.exports = { add, divide };
