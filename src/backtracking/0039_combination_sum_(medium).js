/**
 * Combination Sum
 *
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T),
 * find all unique combinations in C where the candidate numbers sums to T.
 *
 * The same repeated number may be chosen from C unlimited number of times.
 *
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [2, 3, 6, 7] and target 7,
 * A solution set is:
 * [
 *   [7],
 *   [2, 2, 3]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const results = [];
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
    solution.push(candidates[i]);
    backtracking(candidates, target - candidates[i], i, solution, results);
    solution.pop();
  }
};

export default combinationSum;
