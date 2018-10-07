/**
 * Max Area of Island
 *
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are
 * surrounded by water.
 *
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
 *
 * Example 1:
 *
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *  [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *  [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *  [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 *
 * Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 *
 * [[0,0,0,0,0,0,0,0]]
 *
 * Given the above grid, return 0.
 *
 * Note: The length of each dimension in the given grid does not exceed 50.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
  const m = grid.length;
  const n = grid[0].length;

  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(grid, i, j);
        max = Math.max(max, area);
      }
    }
  }

  return max;
};

const dfs = (grid, i, j) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  grid[i][j] = 0; // Mark as visited

  let count = 1;

  // Try all the directions
  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];

    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) {
      continue;
    }

    count += dfs(grid, x, y);
  }

  return count;
};

export { maxAreaOfIsland };
