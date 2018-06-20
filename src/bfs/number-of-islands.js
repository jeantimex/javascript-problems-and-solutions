/**
 * Number of Islands
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 *
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * Output: 1
 * Example 2:
 *
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, m, n, i, j);
        count++;
      }
    }
  }

  return count;
};

const isSafe = (grid, m, n, x, y) => {
  if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') {
    return false;
  }

  return true;
};

const bfs = (grid, m, n, i, j) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [[i, j]];
  grid[i][j] = '0';

  while (queue.length > 0) {
    const p = queue.shift();

    for (let k = 0; k < 4; k++) {
      const x = p[0] + dx[k];
      const y = p[1] + dy[k];

      if (isSafe(grid, m, n, x, y)) {
        queue.push([x, y]);
        grid[x][y] = '0';
      }
    }
  }
};

export { numIslands };
