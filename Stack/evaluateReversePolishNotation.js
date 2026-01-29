// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

function evalRPN(tokens) {
  const stack = [];
  
  for (let token of tokens) {
    if (['+', '-', '*', '/'].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(token));
    }
  }
  
  return stack[0];
}

// Test
console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 6
