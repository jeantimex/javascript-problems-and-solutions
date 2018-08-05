/**
 * Coin Change
 *
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * Recursion
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  // base case
  if (amount == 0) {
    return 0;
  }

  // initialize result
  let res = Infinity;

  // try every coin that has smaller value than amount
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      const count = coinChange(coins, amount - coins[i]);
      if (count !== -1) {
        res = Math.min(res, count + 1);
      }
    }
  }

  return res === Infinity ? -1 : res;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange_DP = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);

  // base case
  dp[0] = 0;

  // try every coin that has smaller value than amount
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const count = dp[i - coins[j]];
        if (count !== Infinity) {
          dp[i] = Math.min(dp[i], count + 1);
        }
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

export { coinChange, coinChange_DP };
