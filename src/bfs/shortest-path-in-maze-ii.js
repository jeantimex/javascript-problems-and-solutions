/**
 * Shortest Path in Maze II
 * 
 * Given a matrix represents a maze, X is the starting point, Y is the destination,
 * # is wall, you can walk in four directions: up, down, left, right.
 
 * Now you are allowed to break at most k walls, what is the minimum steps to get
 * to Y from X?
 * 
 * For example, we have the following maze, and you can break at most 3 walls.
 * 
 *     . X . # . .
 *     . # . . # .
 *     . # . . . .
 *     . # # . . .
 *     . Y . . . .
 *     . . . . . #
 * 
 * the minimum steps to reach Y from X is 4.
 * 
 * Normally we run BFS in a flat level, the idea is to run the BFS in a k-level matrix.
 * Each level is connected thru the wall, there are k levels, each time when we break a wall,
 * we go to the next level, and we can continue to perform BFS from that point. One challenging
 * part is that we need to use a 3-dimensional array to help us check whether a point is visited.
 * 
 * Time complexity: O(mnk)
 * note, if k is constant, then time complexity is O(mn)
 */

/**
 * @param {string[][]} maze
 * @param {number[]} px
 * @param {number} k
 */
const shortestPath = (maze, px, k) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const m = maze.length;
  const n = maze[0].length;

  // Push {x, y, z} to the queue
  // z is 0 by default, represents the layer where no wall is broken
  const queue = [[...px, 0], null];

  // Create a { m x n x k } three-dimension array to track whether the spot is visited
  const visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n);
    for (let j = 0; j < n; j++) {
      visited[i][j] = Array(k).fill(false);
    }
  }

  // X is visited
  visited[px[0]][px[1]][0] = true;

  let steps = 0;

  while (queue.length > 0) {
    const p = queue.shift();

    if (p) {
      if (maze[p[0]][p[1]] === 'Y') {
        return steps; // Found Y, return the steps
      }

      // Try 4 directions
      for (let d = 0; d < 4; d++) {
        const x = p[0] + dx[d];
        const y = p[1] + dy[d];
        const z = getLayer(maze, m, n, k, visited, x, y, p[2]);

        if (z >= 0) {
          queue.push([x, y, z]);
          visited[x][y][z] = true;
        }
      }
    } else {
      // One BFS level is finished, step + 1
      steps++;

      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }

  return -1;
};

/**
 * if it's not a wall, same level will be returned
 * if it's a wall can be broken, level + 1
 * otherwise return -1, meaning we cannot go that way
 */
const getLayer = (maze, m, n, k, visited, x, y, z) => {
  if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y][z]) {
    return -1;
  }

  if (maze[x][y] === '#') {
    // if we have broken more than k walls, return -1
    return z < k ? z + 1 : -1;
  }

  return z;
};

export { shortestPath };
