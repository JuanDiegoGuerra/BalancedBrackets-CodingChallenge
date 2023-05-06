function balancedBrackets(expr) {
  //your code here

}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
