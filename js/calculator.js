const calculator = {
  addition: (num1, num2) => num1 + num2,

  subtraction: (num1, num2) => num1 - num2,

  multiplication: (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
    return num1 * num2;
  },

  division: (num1, num2) => {
    if (num1 === 0) {
      return 0;
    } if (num2 === 0) {
      return 'cannot divide by zero';
    } if (num1 === 0 && num2 === 0) {
      return 'cannot divide by zero';
    }
    return num1 / num2;
  },
};

module.exports = calculator;