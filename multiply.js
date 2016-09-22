function multiply (number) {
  function secondFunction(secondNumber) {
    return number * secondNumber;
  }
  return secondFunction;
}

console.log((multiply(4))(6));