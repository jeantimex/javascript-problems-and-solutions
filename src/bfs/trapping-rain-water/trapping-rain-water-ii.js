/**
 * Trapping Rain Water II
 *
 * Given an m x n matrix of positive integers representing the height of each unit cell
 * in a 2D elevation map, compute the volume of water it is able to trap after raining.
 *
 * Note:
 *
 * Both m and n are less than 110. The height of each unit cell is greater than 0 and is
 * less than 20,000.
 *
 * Example:
 *
 * Given the following 3x6 height map:
 * [
 *   [1,4,3,1,3,2],
 *   [3,2,1,3,2,4],
 *   [2,3,3,2,3,1]
 * ]
 *
 * Return 4.
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {number[][]} heights
 * @return {number}
 */
const trapRainWater = heights => {
  // Sanity check
  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return 0;
  }

  const m = heights.length;
  const n = heights[0].length;

  const queue = new PriorityQueue({ comparator: (a, b) => a.height - b.height });

  const visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  // Initially, add all the Cells which are on borders to the queue.
  for (let i = 0; i < m; i++) {
    visited[i][0] = true;
    visited[i][n - 1] = true;
    queue.offer(new Cell(i, 0, heights[i][0]));
    queue.offer(new Cell(i, n - 1, heights[i][n - 1]));
  }

  for (let j = 0; j < n; j++) {
    visited[0][j] = true;
    visited[m - 1][j] = true;
    queue.offer(new Cell(0, j, heights[0][j]));
    queue.offer(new Cell(m - 1, j, heights[m - 1][j]));
  }

  // From the borders, pick the shortest cell visited and check its neighbors:
  // If the neighbor is shorter, collect the water it can trap and update its
  // height as its height plus the water trapped.
  // Add all its neighbors to the queue.
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let res = 0;
  while (!queue.isEmpty()) {
    const cell = queue.poll();

    for (let dir of dirs) {
      const row = cell.row + dir[0];
      const col = cell.col + dir[1];

      if (row >= 0 && row < m && col >= 0 && col < n && !visited[row][col]) {
        visited[row][col] = true;
        res += Math.max(0, cell.height - heights[row][col]);
        queue.offer(new Cell(row, col, Math.max(heights[row][col], cell.height)));
      }
    }
  }

  return res;
};

export { trapRainWater };
