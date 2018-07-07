/**
 * Guess Number Higher or Lower II
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.
 *
 * However, when you guess a particular number x, and you guess wrong, you pay $x.
 * You win the game when you guess the  * number I picked.
 *
 * Example:
 *
 * n = 10, I pick 8.
 *
 * First round:  You guess 5, I tell you that it's higher. You pay $5.
 * Second round: You guess 7, I tell you that it's higher. You pay $7.
 * Third round:  You guess 9, I tell you that it's lower. You pay $9.
 *
 * Game over. 8 is the number I picked.
 *
 * You end up paying $5 + $7 + $9 = $21.
 *
 * Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.
 */

/**
 * Recursion
 *
 * @param {number} n
 * @return {number}
 */
const getMoneyAmountR = n => {
  return helper(1, n);
};

const helper = (start, end) => {
  if (start >= end) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = start; i <= end; i++) {
    const val = i + Math.max(helper(start, i - 1), helper(i + 1, end));
    min = Math.min(min, val);
  }

  return min;
};

/**
 * Dynamic Programming
 *
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = n => {
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;

      dp[start][end] = Number.MAX_SAFE_INTEGER;

      for (let i = start; i <= end; i++) {
        const val = i + Math.max(dp[start][i - 1], dp[i + 1][end]);
        dp[start][end] = Math.min(dp[start][end], val);
      }
    }
  }

  return dp[1][n];
};

export { getMoneyAmountR, getMoneyAmount };
