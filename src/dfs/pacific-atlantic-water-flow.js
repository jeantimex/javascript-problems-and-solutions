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

  const res = [];

  // left and right borders
  for (let i = 0; i < m; i++) {
    dfs(matrix, pacific, i, 0, Number.MIN_SAFE_INTEGER);
    dfs(matrix, atlantic, i, n - 1, Number.MIN_SAFE_INTEGER);
  }

  // top and bottom borders
  for (let j = 0; j < n; j++) {
    dfs(matrix, pacific, 0, j, Number.MIN_SAFE_INTEGER);
    dfs(matrix, atlantic, m - 1, j, Number.MIN_SAFE_INTEGER);
  }

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

const dfs = (matrix, ocean, x, y, height) => {
  console.log(ocean);
  const m = matrix.length;
  const n = matrix[0].length;

  if (x < 0 || x >= m || y < 0 || y >= n) {
    return; // outside of the matrix
  }

  if (ocean[x][y]) {
    return; // visited already
  }

  if (matrix[x][y] < height) {
    return; // sea level is not enough
  }

  ocean[x][y] = true; // can flow to the ocean from (x, y)

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let [dx, dy] of dirs) {
    dfs(matrix, ocean, x + dx, y + dy, matrix[x][y]);
  }
};

export { pacificAtlantic };
