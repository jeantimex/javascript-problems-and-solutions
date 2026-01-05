/**
 * Expression Add Operators
 *
 * Given a string that contains only digits 0-9 and a target value,
 * return all possibilities to add binary operators (not unary) +, -,
 * or * between the digits so they evaluate to the target value.
 *
 * Example 1:
 *
 * Input: num = "123", target = 6
 * Output: ["1+2+3", "1*2*3"]
 *
 * Example 2:
 *
 * Input: num = "232", target = 8
 * Output: ["2*3+2", "2+3*2"]
 *
 * Example 3:
 *
 * Input: num = "105", target = 5
 * Output: ["1*0+5","10-5"]
 *
 * Example 4:
 *
 * Input: num = "00", target = 0
 * Output: ["0+0", "0-0", "0*0"]
 *
 * Example 5:
 *
 * Input: num = "3456237490", target = 9191
 * Output: []
 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
const addOperators = (num, target) => {
  const result = [];
  backtracking(num, target, 0, 0, 0, '', result);
  return result;
};

const backtracking = (num, target, start, total, last, solution, result) => {
  if (start === num.length) {
    if (total === target) {
      result.push(solution);
    }
    return;
  }

  for (let i = start; i < num.length; i++) {
    // for example, input is "105", we don't need answer like "1*05"
    if (i > start && num[start] === '0') {
      break;
    }

    const curr = parseInt(num.substring(start, i + 1));

    if (start === 0) {
      // this is the first number
      backtracking(num, target, i + 1, total + curr, curr, solution + curr, result);
    } else {
      // not the first number, let's add operators
      backtracking(num, target, i + 1, total + curr, curr, solution + '+' + curr, result);
      backtracking(num, target, i + 1, total - curr, -curr, solution + '-' + curr, result);
      backtracking(num, target, i + 1, total - last + last * curr, last * curr, solution + '*' + curr, result);
    }
  }
};

export { addOperators };
