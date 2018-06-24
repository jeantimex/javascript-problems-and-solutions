/**
 * Basic Calculator
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers  * and empty spaces .
 *
 * The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and  * empty spaces . The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, *  2147483647].
 *
 * Some examples:
 *
 * "1 + 1" = 2
 * " 6-4 / 2 " = 4
 * "2*(5+5*2)/3+(6/2+8)" = 21
 * "(2+6* 3+5- (3*14/7+2)*5)+3"=-12
 *
 * Do not use the eval built-in library function.
 */

/**
 * @param {string} s
 * @return {number}
 */
const calculate = s => {
  // Stack for numbers: 'values'
  const values = [];
  // Stack for Operators: 'ops'
  const ops = [];

  for (let i = 0; i < s.length; i++) {
    // Current token is a whitespace, skip it
    if (s[i] === ' ') {
      continue;
    }

    // Current token is a number, push it to stack for numbers
    if (s[i] >= '0' && s[i] <= '9') {
      let buffer = '';
      // There may be more than one digits in number
      while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        buffer += s[i++];
      }
      values.push(parseInt(buffer));
      i--; // important
    }
    // Current token is an opening brace, push it to 'ops'
    else if (s[i] === '(') {
      ops.push(s[i]);
    }
    // Closing brace encountered, solve entire brace
    else if (s[i] === ')') {
      while (ops[ops.length - 1] !== '(') {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      ops.pop();
    }
    // Current token is an operator.
    else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') {
      // While top of 'ops' has same or greater precedence to current
      // token, which is an operator. Apply operator on top of 'ops'
      // to top two elements in values stack
      while (ops.length && hasPrecedence(s[i], ops[ops.length - 1])) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      // Push current token to 'ops'.
      ops.push(s[i]);
    }
  }

  // Entire expression has been parsed at this point, apply remaining
  // ops to remaining values
  while (ops.length) {
    values.push(applyOp(ops.pop(), values.pop(), values.pop()));
  }

  // Top of 'values' contains result, return it
  return values.pop();
};

// Returns true if 'op2' has higher or same precedence as 'op1',
// otherwise returns false.
const hasPrecedence = (op1, op2) => {
  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
};

// A utility method to apply an operator 'op' on operands 'a'
// and 'b'. Return the result.
const applyOp = (op, b, a) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw 'Cannot divide by zero';
      }
      return Math.floor(a / b);
  }
  return 0;
};

export { calculate };
