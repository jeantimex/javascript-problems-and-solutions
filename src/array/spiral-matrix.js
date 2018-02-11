/**
 * Spiral Matrix
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * For example,
 * Given the following matrix:
 *
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  const result = [];

  if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
    return result;
  }

  let m = matrix.length;
  let n = matrix[0].length;
  const layers = Math.ceil(Math.min(m, n) / 2);

  for (let k = 0; k < layers; k++, m -= 2, n -= 2) {
    if (m <= 0 || n <= 0) {
      break;
    }

    if (m === 1) {
      // only has one row
      for (let j = 0; j < n; j++) {
        result.push(matrix[k][k + j]);
      }
    } else if (n === 1) {
      // only has one column
      for (let i = 0; i < m; i++) {
        result.push(matrix[k + i][k]);
      }
    } else {
      // top
      for (let j = 0; j < n - 1; j++) {
        result.push(matrix[k][k + j]);
      }
      // right
      for (let i = 0; i < m - 1; i++) {
        result.push(matrix[k + i][k + n - 1]);
      }
      // bottom
      for (let j = n - 1; j > 0; j--) {
        result.push(matrix[k + m - 1][k + j]);
      }
      // left
      for (let i = m - 1; i > 0; i--) {
        result.push(matrix[k + i][k]);
      }
    }
  }

  return result;
};
