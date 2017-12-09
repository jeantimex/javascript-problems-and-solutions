/**
 * Combinations
 *
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * For example,
 * If n = 4 and k = 2, a solution is:
 *
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const results = [];
  backtracking(n, k, 1, [], results);
  return results;
};

const backtracking = (n, k, start, solution, results) => {
  if (solution.length === k) {
    return results.push(solution.slice());
  }

  for (let i = start; i <= n; i++) {
    solution.push(i);
    backtracking(n, k, i + 1, solution, results);
    solution.pop();
  }
};

export default combine;
