/**
 * Permutations
 *
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * For example,
 * [1,2,3] have the following permutations:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const results = [];
  backtracking(nums, {}, [], results);
  return results;
};

const backtracking = (nums, used, solution, results) => {
  if (solution.length === nums.length) {
    results.push(solution.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }

    solution.push(nums[i]);
    used[i] = true;
    backtracking(nums, used, solution, results);
    solution.pop();
    used[i] = false;
  }
};

export default permute;
