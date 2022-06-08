const calculator =  {
  addition: (num1, num2) => num1 + num2,

  subtraction: (num1, num2) => num1 - num2,

  multiplication: (num1, num2) => {
    if(num1 === 0 || num2 === 0) {
      return 0
    } else {
      return num1 * num2
    }
  },

  division: (num1, num2) => {
    if(num1 == 0) {
      return 0;
    } else if(num2 === 0){
      return 'cannot divide by zero'
    } else if(num1 === 0 && num2 === 0){
      return 'cannot divide by zero'
    } else {
      return num1 / num2
    }  
  }   
}

module.exports = calculator;