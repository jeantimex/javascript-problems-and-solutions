/**
 * Coin Change 2
 *
 * You are given coins of different denominations and a total amount of money.
 * Write a function to compute the number of combinations that make up that amount.
 * You may assume that you have infinite number of each kind of coin.
 *
 * Note: You can assume that
 *
 * 0 <= amount <= 5000
 * 1 <= coin <= 5000
 * the number of coins is less than 500
 * the answer is guaranteed to fit into signed 32-bit integer
 *
 *
 * Example 1:
 *
 * Input: amount = 5, coins = [1, 2, 5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 *
 * Example 2:
 *
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 *
 * Example 3:
 *
 * Input: amount = 10, coins = [10]
 * Output: 1
 */

/**
 * Recursion
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  return count(coins, coins.length, amount);
};

const count = (coins, n, amount) => {
  // if amount is 0 then there is 1 solution: do not include any coin
  if (amount == 0) {
    return 1;
  }

  // if amount is less than 0 then no solution exists
  if (amount < 0) {
    return 0;
  }

  // if there are no coins and amount is greater than 0, then no solution exist
  if (n <= 0 && amount > 0) {
    return 0;
  }

  // count is sum of solutions (i) including coins[n-1] (ii) excluding coins[n-1]
  return count(coins, n - 1, amount) + count(coins, n, amount - coins[n - 1]);
};

/**
 * Dynamic Programming
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change_DP = (amount, coins) => {
  const dp = Array(amount + 1).fill(0);

  // if amount is 0 then there is 1 solution: do not include any coin
  dp[0] = 1;

  // pick all coins one by one and update the dp[]
  // values after the index greater than or equal to the value of the picked coin
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

export { change, change_DP };
