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
 * BFS Solution
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

  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (queue.length > 0) {
    const curr = queue.shift();

    for (let dir of dirs) {
      const x = curr[0] + dir[0];
      const y = curr[1] + dir[1];

      if (x >= 0 && x < m && y >= 0 && y < n) {
        if (dist[x][y] > dist[curr[0]][curr[1]] + 1) {
          dist[x][y] = dist[curr[0]][curr[1]] + 1;
          queue.push([x, y]);
        }
      }
    }
  }

  return dist;
};

export { updateMatrix };
