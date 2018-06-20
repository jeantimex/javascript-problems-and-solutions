/**
 * Redundant Connection II
 *
 * In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root)
 * for which all other nodes are descendants of this node, plus every node has exactly one parent,
 * except for the root node which has no parents.
 *
 * The given input is a directed graph that started as a rooted tree with N nodes (with distinct
 * values 1, 2, ..., N), with one additional directed edge added. The added edge has two different
 * vertices chosen from 1 to N, and was not an edge that already existed.
 *
 * The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that
 * represents a directed edge connecting nodes u and v, where u is a parent of child v.
 *
 * Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes.
 * If there are multiple answers, return the answer that occurs last in the given 2D-array.
 *
 * Example 1:
 *
 * Input: [[1,2], [1,3], [2,3]]
 * Output: [2,3]
 * Explanation: The given directed graph will be like this:
 *
 *   1
 *  / \
 * v   v
 * 2-->3
 *
 * Example 2:
 *
 * Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
 * Output: [4,1]
 * Explanation: The given directed graph will be like this:
 *
 * 5 <- 1 -> 2
 *      ^    |
 *      |    v
 *      4 <- 3
 *
 * Note:
 * The size of the input 2D-array will be between 3 and 1000.
 * Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.
 *
 * Solution
 *
 * There are two cases for the tree structure to be invalid:
 *
 * 1) A node having two parents;
 *    including corner case: e.g. [[4,2],[1,5],[5,2],[5,3],[2,4]]
 * 2) A circle exists
 *
 * Steps:
 * 1) Check whether there is a node having two parents.
 *     If so, store them as candidates A and B, and set the second edge invalid.
 *
 * 2) Perform normal union find.
 *     If the tree is now valid
 *            simply return candidate B
 *     else if candidates not existing
 *            we find a circle, return current edge;
 *     else
 *            remove candidate A instead of B.
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantDirectedConnection = edges => {
  // Step 1. Check whether there is a node having two parents
  // If so, store them as candidates A and B, and set the second edge invalid
  let canA = [-1, -1];
  let canB = [-1, -1];
  let parent = Array(2001).fill(0);

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const u = edge[0];
    const v = edge[1];

    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      // Found two candidates
      canB = [u, v];
      canA = [parent[v], v];
      edges[i][1] = 0; // Mark current edge as invalid
    }
  }

  // Step 2. Perform normal union find.
  parent = Array(2001).fill(-1);

  const find = i => {
    if (parent[i] === -1) {
      return i;
    }
    return find(parent[i]);
  };

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    if (edge[1] === 0) {
      continue; // Ignore the invalid edge
    }

    // Find
    const x = find(edge[0]);
    const y = find(edge[1]);

    // Found a circle
    if (x === y) {
      // No candidate found, return the current edge
      if (canA[0] === -1) {
        return edge;
      }
      return canA;
    }

    // Union
    parent[x] = y;
  }

  // If the tree is valid, just return the 2nd candidate
  return canB;
};

export default findRedundantDirectedConnection;
