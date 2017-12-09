/**
 * Combination Sum II
 *
 * Given a collection of candidate numbers (C) and a target number (T),
 * find all unique combinations in C where the candidate numbers sums to T.
 *
 * Each number in C may only be used once in the combination.
 *
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 * A solution set is:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const results = [];
  candidates.sort((a, b) => a - b);
  backtracking(candidates, target, 0, [], results);
  return results;
};

const backtracking = (candidates, target, start, solution, results) => {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    results.push(solution.slice());
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    solution.push(candidates[i]);
    backtracking(candidates, target - candidates[i], i + 1, solution, results);
    solution.pop();
  }
};

export default combinationSum;
