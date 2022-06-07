const stringLength = (string) => {
   if (string.lemgth < 1 || string.length > 10) {
     return 'This is an Error'
   }
   return string.length
}


module.exports = stringLength
