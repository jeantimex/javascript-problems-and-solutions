/**
 * Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const results = [];
  backtracking(n, 0, 0, '', results);
  return results;
};

const backtracking = (n, left, right, solution, results) => {
  if (left === n && right === n) {
    results.push(solution);
    return;
  }

  if (left < n) {
    backtracking(n, left + 1, right, solution + '(', results);
  }

  if (right < left) {
    backtracking(n, left, right + 1, solution + ')', results);
  }
};

export default generateParenthesis;
