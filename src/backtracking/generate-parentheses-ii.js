/**
 * Generate Parentheses II
 *
 * Given n pairs of round brackets(parentheses), m pairs of square brackets and k pairs of curly brackets,
 * write a function to generate all the combinations of well-formed brackets.
 *
 * Note: All of the brackets must be used.
 *
 * For example, given n = 1, m = 1, k = 1, a solution set is:
 *
 * [
 *   "()[]{}",
 *   "()[{}]",
 *   "(){[]}",
 *   "(){}[]",
 *   "([]){}",
 *   "([]{})",
 *   "([{}])",
 *   "({[]})",
 *   "({})[]",
 *   "({}[])",
 *   "[()]{}",
 *   "[(){}]",
 *   "[({})]",
 *   "[](){}",
 *   "[]({})",
 *   "[]{()}",
 *   "[]{}()",
 *   "[{()}]",
 *   "[{}()]",
 *   "[{}]()",
 *   "{()[]}",
 *   "{()}[]",
 *   "{([])}",
 *   "{[()]}",
 *   "{[]()}",
 *   "{[]}()",
 *   "{}()[]",
 *   "{}([])",
 *   "{}[()]",
 *   "{}[]()"
 * ]
 */

import Stack from 'common/stack';

/**
 * @param {number} n - n pairs of round brackets
 * @param {number} m - m pairs of square brackets
 * @param {number} k - k pairs of curly brackets
 *
 * @return {string[]}
 */
const generateBrackets = (n, m, k) => {
  const lb = ['(', '[', '{'];
  const rb = [')', ']', '}'];

  const backtracking = (total, left, right, stack, solution) => {
    if (total.join('') === left.join('') && total.join('') === right.join('') && solution) {
      results.push(solution);
      return;
    }

    for (let i = 0; i < 3; i++) {
      // Add left brackets
      if (left[i] < total[i]) {
        stack.push(lb[i]);
        left[i]++;

        backtracking(total, left, right, stack, solution + lb[i]);

        stack.pop();
        left[i]--;
      }

      // Add right brackets
      if (right[i] < left[i] && stack.peek() === lb[i]) {
        stack.pop();
        right[i]++;

        backtracking(total, left, right, stack, solution + rb[i]);

        stack.push(lb[i]);
        right[i]--;
      }
    }
  };

  const results = [];
  backtracking([n, m, k], [0, 0, 0], [0, 0, 0], new Stack(), '');
  return results;
};

export default generateBrackets;
