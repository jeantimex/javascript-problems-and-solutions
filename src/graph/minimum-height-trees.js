/**
 * For a undirected graph with tree characteristics, we can choose any node as the root.
 * The result graph is then a rooted tree. Among all possible rooted trees,
 * those with minimum height are called minimum height trees (MHTs). Given such a graph,
 * write a function to find all the MHTs and return a list of their root labels.
 *
 * Format
 * The graph contains n nodes which are labeled from 0 to n - 1. You will be given the
 * number n and a list of undirected edges (each edge is a pair of labels).
 *
 * You can assume that no duplicate edges will appear in edges. Since all edges are
 * undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
 *
 * Example 1:
 *
 * Given n = 4, edges = [[1, 0], [1, 2], [1, 3]]
 *
 *         0
 *         |
 *         1
 *        / \
 *       2   3
 *
 * return [1]
 *
 * Example 2:
 *
 * Given n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
 *
 *      0  1  2
 *       \ | /
 *         3
 *         |
 *         4
 *         |
 *         5
 *
 * return [3, 4]
 *
 * Note:
 *
 * (1) According to the definition of tree on Wikipedia: “a tree is an undirected graph
 * in which any two vertices are connected by exactly one path. In other words, any
 * connected graph without simple cycles is a tree.”
 *
 * (2) The height of a rooted tree is the number of edges on the longest downward path
 * between the root and a leaf.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = (n, edges) => {
  const adjList = buildGraph(n, edges);

  let min = Number.MAX_SAFE_INTEGER;
  let result = [];

  for (let i = 0; i < n; i++) {
    const height = getHeight(adjList, i);

    if (height < min) {
      result = [i];
      min = height;
    } else if (height === min) {
      result.push(i);
    }
  }

  return result;
};

const getHeight = (adjList, node) => {
  const queue = [node];
  const visited = new Set();
  visited.add(node);

  let level = 0;

  while (queue.length > 0) {
    level++;

    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const u = queue.shift();
      const neighbors = adjList.get(u);

      for (let j = 0; j < neighbors.length; j++) {
        const v = neighbors[j];

        if (!visited.has(v)) {
          queue.push(v);
          visited.add(v);
        }
      }
    }
  }

  return level;
};

const buildGraph = (n, edges) => {
  const adjList = new Map();

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];

    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  return adjList;
};

export default findMinHeightTrees;
