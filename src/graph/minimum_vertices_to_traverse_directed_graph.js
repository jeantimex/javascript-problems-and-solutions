/**
 * Minimum Vertices to Traverse Directed Graph
 */

/**
 * @param {number[][]} edges
 * @param {number} n
 * @return {number[]}
 */
const getMinimumVertices = (edges, n) => {
  // Initialize the adj list
  const nodes = new Map();
  for (let i = 0; i < n; i++) {
    nodes.set(i, new Set());
  }

  // Add the graph nodes
  for (let [u, v] of edges) {
    nodes.get(u).add(v);
  }

  const visited = new Set();
  const result = new Set();
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      result.add(i);
      visited.add(i);
      search(nodes, i, i, visited, new Set(), result);
    }
  }

  return Array.from(result);
};

const search = (nodes, curr, start, visited, currVisited, result) => {
  currVisited.add(curr);
  visited.add(curr);

  for (let next of nodes.get(curr)) {
    if (result.has(next) && next !== start) {
      result.delete(next);
    }

    if (!currVisited.has(next)) {
      search(nodes, next, start, visited, currVisited, result);
    }
  }
};

export { getMinimumVertices };
