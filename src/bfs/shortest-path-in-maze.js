/**
 * Shortest Path in Maze
 *
 * Given a matrix represents a maze, X is the starting point, Y is the destination,
 * # is wall, now you can walk in four directions: up, down, left, right, what is
 * the minimum steps to get to Y from X?
 *
 * For example, we have the following maze:
 *
 *     . X . # . .
 *     . . . . # .
 *     . # . . . .
 *     . # # . . .
 *     . # Y . . .
 *     . . . . . #
 *
 * the minimum steps to reach Y from X is 7.
 *
 * Time complexity: O(mn)
 */

/**
 * @param {string[][]} maze
 * @param {number[]} px
 */
const shortestPath = (maze, px) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const m = maze.length;
  const n = maze[0].length;

  const queue = [px, null];
  const visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  visited[px[0]][px[1]] = true;

  let steps = 0;

  while (queue.length > 0) {
    const p = queue.shift();

    if (p) {
      if (maze[p[0]][p[1]] === 'Y') {
        return steps;
      }

      for (let d = 0; d < 4; d++) {
        const x = p[0] + dx[d];
        const y = p[1] + dy[d];

        if (isSafe(maze, m, n, visited, x, y)) {
          queue.push([x, y]);
          visited[x][y] = true;
        }
      }
    } else {
      steps++;

      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }

  return -1;
};

const isSafe = (maze, m, n, visited, x, y) =>
  !(x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || maze[x][y] === '#');

export { shortestPath };
