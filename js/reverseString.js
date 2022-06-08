// const reverseString = (string) => {
//   return string.split("").reverse().join("");
// }

const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
};

module.exports = reverseString;
