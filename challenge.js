function balancedBrackets(expr) {
  //your code here
  let stack = [];

  for(let i = 0; i < expr.length; i++)
  {
      let x = expr[i];

      if (x == '(' || x == '[' || x == '{')
      {
          stack.push(x);
          continue;
      }

      if (stack.length == 0)
          return false;
            
      let check;
      switch (x){
      case ')':
          check = stack.pop();
          if (check == '{' || check == '[')
              return false;
          break;

      case '}':
          check = stack.pop();
          if (check == '(' || check == '[')
              return false;
          break;

      case ']':
          check = stack.pop();
          if (check == '(' || check == '{')
              return false;
          break;
      }
  }

  // Check Empty Stack
  return (stack.length == 0);
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
