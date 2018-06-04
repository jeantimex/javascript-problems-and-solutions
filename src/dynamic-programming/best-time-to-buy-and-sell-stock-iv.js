/**
 * Best Time to Buy and Sell Stock IV
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete at most k transactions.
 *
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *
 * Example 1:
 *
 * Input: [2,4,1], k = 2
 * Output: 2
 *
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
 *
 * Example 2:
 *
 * Input: [3,2,6,5,0,3], k = 2
 * Output: 7
 *
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
 *              Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 */

/**
 * Solution I
 * Time Complexity: O(kn^2)
 *
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_I = (k, prices) => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;
  const dp = Array(k + 1);

  for (let i = 0; i <= k; i++) {
    dp[i] = Array(n).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1, max = 0; j < n; j++) {
      for (let m = 0; m < j; m++) {
        max = Math.max(max, dp[i - 1][m] + prices[j] - prices[m]);
      }

      dp[i][j] = Math.max(max, dp[i][j - 1]);
    }
  }

  return dp[k][n - 1];
};

/**
 * Solution II
 * Time Complexity: O(kn)
 *
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_II = (k, prices) => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;
  const dp = Array(k + 1);

  for (let i = 0; i <= k; i++) {
    dp[i] = Array(n).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1, maxProfit = dp[i - 1][0] - prices[0]; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], maxProfit + prices[j]);
      maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j]);
    }
  }

  return dp[k][n - 1];
};

export { maxProfit_I, maxProfit_II };
