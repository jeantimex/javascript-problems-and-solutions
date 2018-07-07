/**
 * Diagonal Traverse
 *
 * Given a matrix of M x N elements (M rows, N columns),
 * return all elements of the matrix in diagonal order as shown in the below image.
 *
 * Example:
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 *
 * Output:  [1,2,4,7,5,3,6,8,9]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];
  const dir = [[-1, 1], [1, -1]];

  for (let i = 0, j = 0, d = 0, k = 0; k < m * n; k++) {
    result.push(matrix[i][j]);

    i += dir[d][0];
    j += dir[d][1];

    if (j >= n) {
      i += 2;
      j = n - 1;
      d = 1 - d;
    }

    if (i >= m) {
      i = m - 1;
      j += 2;
      d = 1 - d;
    }

    if (i < 0) {
      i = 0;
      d = 1 - d;
    }

    if (j < 0) {
      j = 0;
      d = 1 - d;
    }
  }

  return result;
};

export { findDiagonalOrder };
