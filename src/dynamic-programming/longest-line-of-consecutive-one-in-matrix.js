/**
 * Longest Line of Consecutive One in Matrix
 *
 * Given a 01 matrix M, find the longest line of consecutive one in the matrix.
 * The line could be horizontal, vertical, diagonal or anti-diagonal.
 *
 * Example:
 *
 * Input:
 * [[0,1,1,0],
 *  [0,1,1,0],
 *  [0,0,0,1]]
 * Output: 3
 *
 * Hint: The number of elements in the given matrix will not exceed 10,000.
 */

/**
 * @param {number[][]} M
 * @return {number}
 */
const longestLine = M => {
  if (M.length === 0) {
    return 0;
  }

  const m = M.length;
  const n = M[0].length;
  const dp = [];

  for (let i = 0; i < 4; i++) {
    dp[i] = Array(m)
      .fill()
      .map(() => Array(n).fill(0));
  }

  let ones = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        dp[0][i][j] = j > 0 ? dp[0][i][j - 1] + 1 : 1;
        dp[1][i][j] = i > 0 ? dp[1][i - 1][j] + 1 : 1;
        dp[2][i][j] = i > 0 && j > 0 ? dp[2][i - 1][j - 1] + 1 : 1;
        dp[3][i][j] = i > 0 && j < n - 1 ? dp[3][i - 1][j + 1] + 1 : 1;
        ones = Math.max(ones, Math.max(Math.max(dp[0][i][j], dp[1][i][j]), Math.max(dp[2][i][j], dp[3][i][j])));
      }
    }
  }

  return ones;
};

export { longestLine };
