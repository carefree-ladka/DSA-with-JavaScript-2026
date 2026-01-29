const printNaturalNumbers = (n) => {
  if (n <= 0) return;

  printNaturalNumbers(n - 1);
  console.log(n);
};

const printNaturalNumbersReverse = (n) => {
  if (n >= 50) return;

  printNaturalNumbersReverse(n + 1);
  console.log(n);
};

printNaturalNumbers(5);
printNaturalNumbersReverse(0);
