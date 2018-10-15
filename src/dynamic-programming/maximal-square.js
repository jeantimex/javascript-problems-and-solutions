/**
 * Maximal Square
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * Example:
 *
 * Input:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * Output: 4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  // dp(i, j) represents the length of the square
  // whose lower-right corner is located at (i, j)
  // dp(i, j) = min{ dp(i-1, j-1), dp(i-1, j), dp(i, j-1) }
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  // return the area
  return max * max;
};

export { maximalSquare };
