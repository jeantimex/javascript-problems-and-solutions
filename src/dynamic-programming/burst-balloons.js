/**
 * Burst Balloons
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums.
 * You are asked to burst all the balloons.
 * If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
 * Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.
 *
 * Find the maximum coins you can collect by bursting the balloons wisely.
 *
 * Note:
 *
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * Example:
 *
 * Input: [3,1,5,8]
 * Output: 167
 * Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
 *              coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 */

/**
 * Recursion
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxCoinsR = nums => {
  return helper([1, ...nums, 1], 1, nums.length);
};

const helper = (nums, start, end) => {
  if (start > end) {
    return 0;
  }

  let max = 0;

  for (let i = start; i <= end; i++) {
    const val = helper(nums, start, i - 1) + nums[i] * nums[start - 1] * nums[end + 1] + helper(nums, i + 1, end);
    max = Math.max(val, max);
  }

  return max;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  // Initialize dp[n + 2][n + 2] and fill with 0
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));
  // Add 1 to both front and end to help calculation
  nums = [1, ...nums, 1];

  for (let len = 1; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;
      // From here it's the same as our recursive solution
      for (let i = start; i <= end; i++) {
        const val = dp[start][i - 1] + nums[i] * nums[start - 1] * nums[end + 1] + dp[i + 1][end];
        dp[start][end] = Math.max(val, dp[start][end]);
      }
    }
  }

  return dp[1][n];
};

export { maxCoinsR, maxCoins };
