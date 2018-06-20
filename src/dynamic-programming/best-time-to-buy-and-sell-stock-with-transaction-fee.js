/**
 * Best Time to Buy and Sell Stock with Transaction Fee
 *
 * Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i;
 * and a non-negative integer fee representing a transaction fee.
 *
 * You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
 * You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)
 *
 * Return the maximum profit you can make.
 *
 * Example 1:
 * Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * Output: 8
 *
 * Explanation: The maximum profit can be achieved by:
 *
 * Buying at prices[0] = 1
 * Selling at prices[3] = 8
 * Buying at prices[4] = 4
 * Selling at prices[5] = 9
 *
 * The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 *
 * Note:
 *
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000.
 *
 * At the end of the i-th day, we maintain cash, the maximum profit we could have if we did not have a share of stock,
 * and hold, the maximum profit we could have if we owned a share of stock.
 *
 * To transition from the i-th day to the i+1-th day,
 *
 *
 * we either sell our stock:
 * cash = max(cash, hold + prices[i] - fee)
 *
 * or buy a stock:
 * hold = max(hold, cash - prices[i]).
 *
 * At the end, we want to return cash. We can transform cash first without using temporary variables because
 * selling and buying on the same day can't be better than just continuing to hold the stock.
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  // cash: 手头的现金，即总的赚的金额，同时也是未持股时的现金额
  // hold: 手中有持股时的现金，即总金额减去手中股票的买入价
  let cash = 0;
  let hold = -prices[0];

  for (let price of prices) {
    // 如果卖出持股比未持股赚，则卖出
    cash = Math.max(cash, hold + price - fee);
    // hold 其实代表买入的最低价
    hold = Math.max(hold, cash - price);
  }

  return cash;
};
