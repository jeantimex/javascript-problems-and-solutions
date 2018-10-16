/**
 * House Robber
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
 * stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of
 * money you can rob tonight without alerting the police.
 *
 * Example 1:
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *              Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *              Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * O(1) Space Solution
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if (!nums) {
    return 0;
  }

  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let v1 = nums[0];
  let v2 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const v = Math.max(v1 + nums[i], v2);
    v1 = v2;
    v2 = v;
  }

  return v2;
};

/**
 * O(n) Space Solution
 * @param {number[]} nums
 * @return {number}
 */
const robII = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  const dp = Array(n + 1).fill(0);

  dp[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    // dp[i - 1], do not rob the i-th house, take whatever we had
    // dp[i - 2], rob the i-th house, make sure we skip i-1th house
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[n];
};

export { rob, robII };
