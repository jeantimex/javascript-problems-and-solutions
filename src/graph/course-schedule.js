/**
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 *
 * For example:
 *
 * 2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have finished
 * course 0. So it is possible.
 *
 * 2, [[1,0],[0,1]]
 * There are a total of 2 courses to take. To take course 1 you should have finished
 * course 0, and to take course 0 you should also have finished course 1. So it is
 * impossible.
 *
 * Note:
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
 * Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input prerequisites.
 * click to show more hints.
 *
 * Hints:
 * This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists,
 * no topological ordering exists and therefore it will be impossible to take all courses.
 *
 * Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic
 * concepts of Topological Sort.
 * https://class.coursera.org/algo-003/lecture/52
 *
 * Topological sort could also be done via BFS.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  // Construct a graph with adjacency list
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  const visited = [];
  const stack = [];

  const hasCycle = u => {
    visited[u] = true;
    stack[u] = true;

    for (let i = 0; i < adjList[u].length; i++) {
      const v = adjList[u][i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Backtracking
    stack[u] = false;

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;
};

export default canFinish;
