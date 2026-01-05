/**
 * Combination Sum IV
 *
 * Given an integer array with all positive numbers and no duplicates,
 * find the number of possible combinations that add up to a positive integer target.
 *
 * Example:
 *
 * nums = [1, 2, 3]
 * target = 4
 *
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 *
 * Note that different sequences are counted as different combinations.
 *
 * Therefore the output is 7.
 *
 * Follow up:
 * What if negative numbers are allowed in the given array?
 * How does it change the problem?
 * What limitation we need to add to the question to allow negative numbers?
 */

/**
 * Recursion Solution
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  if (target == 0) {
    return 1;
  }

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (target >= nums[i]) {
      res += combinationSum4(nums, target - nums[i]);
    }
  }

  return res;
};

/**
 * Dynamic Programming Solution
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4_II = (nums, target) => {
  const dp = Array(target + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

export { combinationSum4, combinationSum4_II };
