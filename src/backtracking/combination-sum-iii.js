/**
 * Combination Sum III
 *
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 *
 * Example 1:
 *
 * Input: k = 3, n = 7
 *
 * Output:
 *
 * [[1,2,4]]
 *
 * Example 2:
 *
 * Input: k = 3, n = 9
 *
 * Output:
 *
 * [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum = (k, n) => {
  const results = [];
  backtracking(k, n, 1, [], results);
  return results;
};

const backtracking = (k, n, start, solution, results) => {
  if (k < 0 || n < 0) {
    return;
  }

  if (k === 0 && n === 0) {
    results.push(solution.slice());
    return;
  }

  for (let i = start; i <= 9; i++) {
    solution.push(i);
    backtracking(k - 1, n - i, i + 1, solution, results);
    solution.pop();
  }
};

export default combinationSum;
