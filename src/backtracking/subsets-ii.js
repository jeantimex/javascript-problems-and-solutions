/**
 * Subsets II
 *
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * For example,
 * If nums = [1,2,2], a solution is:
 *
 * [
 *   [2],
 *   [1],
 *   [1,2,2],
 *   [2,2],
 *   [1,2],
 *   []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
  const results = [];
  nums.sort((a, b) => a - b);
  backtracking(nums, 0, [], results);
  return results;
};

const backtracking = (nums, start, solution, results) => {
  results.push(solution.slice());

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue; // avoid duplicates
    }

    solution.push(nums[i]);
    backtracking(nums, i + 1, solution, results);
    solution.pop();
  }
};

export default subsetsWithDup;
