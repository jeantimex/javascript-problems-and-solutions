/**
 * House Robber II
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
 * stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two
 * adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of
 * money you can rob tonight without alerting the police.
 *
 * Example 1:
 *
 * Input: [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
 *              because they are adjacent houses.
 * Example 2:
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *              Total amount you can rob = 1 + 3 = 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if (!nums || nums.length == 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    return Math.max(helper(nums, 0, nums.length - 2), helper(nums, 1, nums.length - 1));
  }
};

const helper = (nums, start, end) => {
  const n = end - start + 1;
  const dp = Array(n + 1).fill(0);

  dp[1] = nums[start];

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[start + i - 1] + dp[i - 2]);
  }

  return dp[n];
};

export { rob };
