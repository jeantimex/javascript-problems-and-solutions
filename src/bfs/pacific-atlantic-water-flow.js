/**
 * Pacific Atlantic Water Flow
 *
 * Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
 * the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
 *
 * Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
 *
 * Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
 *
 * Note:
 * The order of returned grid coordinates does not matter.
 * Both m and n are less than 150.
 * Example:
 *
 * Given the following 5x5 matrix:
 *
 *   Pacific ~   ~   ~   ~   ~
 *        ~  1   2   2   3  (5) *
 *        ~  3   2   3  (4) (4) *
 *        ~  2   4  (5)  3   1  *
 *        ~ (6) (7)  1   4   5  *
 *        ~ (5)  1   1   2   4  *
 *           *   *   *   *   * Atlantic
 *
 * Return:
 *
 * [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = matrix => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const pacific = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const atlantic = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  const pacificQueue = [];
  const atlanticQueue = [];

  const res = [];

  // left and right borders
  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, n - 1]);
    pacific[i][0] = true;
    atlantic[i][n - 1] = true;
  }

  // top and bottom borders
  for (let j = 0; j < n; j++) {
    pacificQueue.push([0, j]);
    atlanticQueue.push([m - 1, j]);
    pacific[0][j] = true;
    atlantic[m - 1][j] = true;
  }

  // perform bfs for both pacific and atlantic
  bfs(matrix, pacific, pacificQueue);
  bfs(matrix, atlantic, atlanticQueue);

  // get final result
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const bfs = (matrix, ocean, queue) => {
  const m = matrix.length;
  const n = matrix[0].length;

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let [dx, dy] of dirs) {
      const x = i + dx;
      const y = j + dy;

      if (x < 0 || x >= m || y < 0 || y >= n) {
        continue; // outside of the matrix
      }
      if (ocean[x][y]) {
        continue; // visited already
      }
      if (matrix[x][y] < matrix[i][j]) {
        continue; // sea level is not enough
      }

      ocean[x][y] = true;
      queue.push([x, y]);
    }
  }
};

export { pacificAtlantic };
