/**
 * Target Sum
 *
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
 * Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 *
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 *
 * Example 1:
 *
 * Input: nums is [1, 1, 1, 1, 1], S is 3.
 * Output: 5
 *
 * Explanation:
 *
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 *
 * Note:
 * The length of the given array is positive and will not exceed 20.
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/**
 * Solution I: Backtracking Prints All Results
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays_I = (nums, target) => {
  const result = [];
  backtracking(nums, target, 0, 0, [], result);
  return result.length;
};

const backtracking = (nums, target, index, sum, solution, result) => {
  if (index === nums.length) {
    if (sum === target) {
      result.push(solution.slice());
    }
    return;
  }

  solution.push(nums[index]);
  backtracking(nums, target, index + 1, sum + nums[index], solution, result);
  solution.pop();

  solution.push(-nums[index]);
  backtracking(nums, target, index + 1, sum - nums[index], solution, result);
  solution.pop();
};

/**
 * Solution II: DFS Only Prints Total Count
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays_II = (nums, target) => {
  const dfs = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        result++;
      }
      return;
    }

    dfs(nums, target, index + 1, sum + nums[index]);
    dfs(nums, target, index + 1, sum - nums[index]);
  };

  let result = 0;
  dfs(nums, target, 0, 0);
  return result;
};

/**
 * Solution III: Top-down Recursion
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays_III = (nums, target) => {
  return count(nums, nums.length, target);
};

const count = (nums, m, target) => {
  if (m === 0) {
    return target === 0 ? 1 : 0;
  }

  return count(nums, m - 1, target - nums[m - 1]) + count(nums, m - 1, target + nums[m - 1]);
};

/**
 * Solution IV: Dynamic Programming
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays_IV = (nums, target) => {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }

  // sanity check
  if (target < -sum || target > sum) {
    return 0;
  }

  // dp[i][j] represents the number of ways for first i-th element to reach a sum j
  // formula: dp[i][j] = dp[i-1][j+nums[i]] + dp[i-1][j-nums[i]
  const dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(2 * sum + 1).fill(0));

  // initialize
  dp[0][0 + sum] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < 2 * sum + 1; j++) {
      if (j + nums[i - 1] < 2 * sum + 1) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]];
      }

      if (j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][target + sum];
};

export { findTargetSumWays_I, findTargetSumWays_II, findTargetSumWays_III, findTargetSumWays_IV };
