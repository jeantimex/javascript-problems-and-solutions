/**
 * Matrix Chain Multiplication
 *
 * Given a sequence of matrices, find the most efficient way to multiply these matrices together.
 * The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.
 *
 * We have many options to multiply a chain of matrices because matrix multiplication is associative.
 * In other words, no matter how we parenthesize the product, the result will be the same.
 *
 * For example, if we had four matrices A, B, C, and D, we would have:
 *
 *     (ABC)D = (AB)(CD) = A(BCD) = ....
 * However, the order in which we parenthesize the product affects the number of simple arithmetic operations
 * needed to compute the product, or the efficiency.
 *
 * For example, suppose A is a 10 × 30 matrix, B is a 30 × 5 matrix, and C is a 5 × 60 matrix. Then,
 *
 *     (AB)C = (10×30×5) + (10×5×60) = 1500 + 3000 = 4500 operations
 *     A(BC) = (30×5×60) + (10×30×60) = 9000 + 18000 = 27000 operations.
 * Clearly the first parenthesization requires less number of operations.
 *
 * Given an array p[] which represents the chain of matrices such that the ith matrix Ai is of dimension p[i-1] x p[i].
 * We need to write a function MatrixChainOrder() that should return the minimum number of multiplications needed to multiply the chain.
 *
 *   Input: p[] = {40, 20, 30, 10, 30}
 *   Output: 26000
 *   There are 4 matrices of dimensions 40x20, 20x30, 30x10 and 10x30.
 *   Let the input 4 matrices be A, B, C and D.  The minimum number of
 *   multiplications are obtained by putting parenthesis in following way
 *   (A(BC))D --> 20*30*10 + 40*20*10 + 40*10*30
 *
 *   Input: p[] = {10, 20, 30, 40, 30}
 *   Output: 30000
 *   There are 4 matrices of dimensions 10x20, 20x30, 30x40 and 40x30.
 *   Let the input 4 matrices be A, B, C and D.  The minimum number of
 *   multiplications are obtained by putting parenthesis in following way
 *   ((AB)C)D --> 10*20*30 + 10*30*40 + 10*40*30
 *
 *   Input: p[] = {10, 20, 30}
 *   Output: 6000
 *   There are only two matrices of dimensions 10x20 and 20x30. So there
 *   is only one way to multiply the matrices, cost of which is 10*20*30
 */

/**
 * Recursion
 *
 * @param {number[]} p
 * @return {number}
 */
const matrixChainOrderR = p => {
  return helper(p, 1, p.length - 1);
};

const helper = (p, i, j) => {
  if (i === j) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  // [1, 2, 3, 4]
  //     i  k  j
  // (1, 2) * (2, 3) * (3, 4)

  for (let k = i; k < j; k++) {
    const count = helper(p, i, k) + p[i - 1] * p[k] * p[j] + helper(p, k + 1, j);
    min = Math.min(min, count);
  }

  return min;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} p
 * @return {number}
 */
const matrixChainOrder = p => {
  const n = p.length;
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  // dp[i,j] = Minimum number of scalar multiplications needed
  // to compute the matrix A[i]A[i+1]...A[j] = A[i..j] where
  // dimension of A[i] is p[i-1] x p[i]

  for (let len = 2; len < n; len++) {
    for (let i = 1; i + len - 1 <= n - 1; i++) {
      const j = i + len - 1;

      dp[i][j] = Number.MAX_SAFE_INTEGER;

      for (let k = i; k < j; k++) {
        const count = dp[i][k] + p[i - 1] * p[k] * p[j] + dp[k + 1][j];
        dp[i][j] = Math.min(dp[i][j], count);
      }
    }
  }

  return dp[1][n - 1];
};

export { matrixChainOrderR, matrixChainOrder };
