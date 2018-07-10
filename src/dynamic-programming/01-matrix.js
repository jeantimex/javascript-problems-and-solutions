/**
 * 01 Matrix
 *
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 * Example 1:
 * Input:
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 * Output:
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 * Example 2:
 *
 * Input:
 *
 * 0 0 0
 * 0 1 0
 * 1 1 1
 *
 * Output:
 *
 * 0 0 0
 * 0 1 0
 * 1 2 1
 *
 * Note:
 *
 * - The number of elements of the given matrix will not exceed 10,000.
 * - There are at least one 0 in the given matrix.
 * - The cells are adjacent in only four directions: up, down, left and right.
 */

/**
 * Dynamic Programming Solution
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  const dist = Array(m)
    .fill()
    .map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        if (i > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
        }
        if (j > 0) {
          dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
        }
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        if (i < m - 1) {
          dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
        }
        if (j < n - 1) {
          dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
        }
      }
    }
  }

  return dist;
};

export { updateMatrix };
