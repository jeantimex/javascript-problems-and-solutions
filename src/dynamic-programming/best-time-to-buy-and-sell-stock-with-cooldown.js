/**
 * Best Time to Buy and Sell Stock with Cooldown
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like
 * (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 *
 * You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
 * Example:
 *
 * Input: [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 * The possible states are as follows:
 *
 *                    rest <--> rest
 *                   /  /\
 *              buy /     \
 *                \/       \
 *     rest <--> hold ----> sold
 *                    sell
 *
 * sold[i] = hold[i - 1] + prices[i]
 * hold[i] = max(hold[i - 1], rest[i - 1] - prices[i])
 * rest[i] = max(rest[i - 1], sold[i - 1])
 *
 * init: rest[0] = sold[0] = 0, hold[0] = -∞
 * ans: max(rest[i], sold[i])
 *
 * Time complexity: O(n)
 * Space complexity O(n) -> O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let sold = 0;
  let hold = Number.MIN_SAFE_INTEGER;
  let rest = 0;

  for (let price of prices) {
    let preSold = sold;

    sold = hold + price;
    hold = Math.max(hold, rest - price);
    rest = Math.max(rest, preSold);
  }

  return Math.max(sold, rest);
};

export { maxProfit };
