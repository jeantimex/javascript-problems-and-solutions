/**
 * Sparse Matrix Multiplication
 *
 * Given two sparse matrices A and B, return the result of AB.
 *
 * You may assume that A's column number is equal to B's row number.
 *
 * Example:
 *
 * Input:
 *
 * A = [
 *   [ 1, 0, 0],
 *   [-1, 0, 3]
 * ]
 *
 * B = [
 *   [ 7, 0, 0 ],
 *   [ 0, 0, 0 ],
 *   [ 0, 0, 1 ]
 * ]
 *
 * Output:
 *
 *      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
 * AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
 *                   | 0 0 1 |
 */

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const multiply = (A, B) => {
  const mA = A.length;
  const nA = A[0].length;
  const nB = B[0].length;

  const C = Array(mA)
    .fill()
    .map(() => Array(nB).fill(0));

  for (let i = 0; i < mA; i++) {
    for (let k = 0; k < nA; k++) {
      if (A[i][k] !== 0) {
        for (let j = 0; j < nB; j++) {
          if (B[k][j] != 0) {
            C[i][j] += A[i][k] * B[k][j];
          }
        }
      }
    }
  }

  return C;
};

export { multiply };
