/**
 * Best Time to Buy and Sell Stock III
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 *
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 *
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 *              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
 *
 * Example 2:
 *
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 *              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
 *              engaging multiple transactions at the same time. You must sell before buying again.
 *
 * Example 3:
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

/**
 * Solution I
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_I = prices => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;

  const left = Array(n).fill(0);
  const right = Array(n).fill(0);

  let profit = 0;

  for (let i = 1, min = prices[0]; i < n; i++) {
    left[i] = Math.max(left[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  for (let i = n - 2, max = prices[n - 1]; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], max - prices[i]);
    max = Math.max(max, prices[i]);

    profit = Math.max(profit, left[i] + right[i]);
  }

  return profit;
};

/**
 * Solution II
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_II = prices => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  let hold1 = Number.MIN_SAFE_INTEGER;
  let hold2 = Number.MIN_SAFE_INTEGER;
  let release1 = 0;
  let release2 = 0;

  // Assume we only have 0 money at first
  for (let i = 0; i < prices.length; i++) {
    // The maximum if we've just sold 2nd stock so far
    release2 = Math.max(release2, hold2 + prices[i]);
    // The maximum if we've just buy 2nd stock so far
    hold2 = Math.max(hold2, release1 - prices[i]);
    // The maximum if we've just sold 1nd stock so far
    release1 = Math.max(release1, hold1 + prices[i]);
    // The maximum if we've just buy 1st stock so far
    hold1 = Math.max(hold1, -prices[i]);
  }

  // Since release1 is initiated as 0, so release2 will always higher than release1
  return release2;
};

export { maxProfit_I, maxProfit_II };
