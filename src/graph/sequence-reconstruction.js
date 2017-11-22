/**
 * Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs.
 * The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 104. Reconstruction
 * means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence
 * so that all sequences in seqs are subsequences of it). Determine whether there is only one sequence
 * that can be reconstructed from seqs and it is the org sequence.
 *
 * Example 1:
 *
 * Input:
 * org: [1,2,3], seqs: [[1,2],[1,3]]
 *
 * Output:
 * false
 *
 * Explanation:
 * [1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid
 * sequence that can be reconstructed.
 * Example 2:
 *
 * Input:
 * org: [1,2,3], seqs: [[1,2]]
 *
 * Output:
 * false
 *
 * Explanation:
 * The reconstructed sequence can only be [1,2].
 * Example 3:
 *
 * Input:
 * org: [1,2,3], seqs: [[1,2],[1,3],[2,3]]
 *
 * Output:
 * true
 *
 * Explanation:
 * The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].
 * Example 4:
 *
 * Input:
 * org: [4,1,5,2,6,3], seqs: [[5,2,6,3],[4,1,5,2]]
 *
 * Output:
 * true
 */

/**
 * DFS Solution
 *
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
export const sequenceReconstructionDFS = (org, seqs) => {
  // Step 1. Build the graph using adjacency list and indgree map
  const { adjList, indegree } = buildGraph(seqs);

  // Step 2. Find all topological sort
  const visited = new Set();

  const results = [];

  dfs(adjList, indegree, visited, results, []);

  return results.length === 1 && results[0].toString() === org.toString();
};

/**
 * BFS Solution
 *
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
export const sequenceReconstructionBFS = (org, seqs) => {
  // Step 1. Build the graph using adjacency list and indgree map
  const { adjList, indegree } = buildGraph(seqs);

  // Step 2. BFS
  const verticies = [...adjList.keys()];

  if (verticies.length !== org.length) {
    return false;
  }

  // Create a queue and enqueue all vertices with indegree 0
  const queue = verticies.filter(u => indegree.get(u) === 0);

  // Initialize count of visited vertices
  let index = 0;

  while (queue.length > 0) {
    const size = queue.length;

    if (size > 1) {
      return false;
    }

    const u = queue.shift();

    if (u !== org[index++]) {
      return false;
    }

    adjList.get(u).forEach(v => {
      indegree.set(v, indegree.get(v) - 1);

      if (indegree.get(v) === 0) {
        queue.push(v);
      }
    });
  }

  return index === org.length;
};

const dfs = (adjList, indegree, visited, results, solution) => {
  const verticies = [...adjList.keys()];

  // To indicate whether all topological are found or not
  let flag = false;

  for (let i = 0; i < verticies.length; i++) {
    const u = verticies[i];

    // If indegree is 0 and not yet visited then only choose that vertex
    if (indegree.get(u) === 0 && !visited.has(u)) {
      // Meaning that we still have nodes to traverse, we are not finished yet
      flag = true;

      // Reducing indegree of adjacent vertices
      adjList.get(u).forEach(v => {
        indegree.set(v, indegree.get(v) - 1);
      });

      // Including in result
      solution.push(u);
      visited.add(u);

      dfs(adjList, indegree, visited, results, solution);

      // Resetting visited, res and indegree for backtracking
      visited.delete(u);
      solution.pop();
      adjList.get(u).forEach(v => {
        indegree.set(v, indegree.get(v) + 1);
      });
    }
  }

  // We reach here if all vertices are visited.
  // So we add the solution here
  if (!flag) {
    results.push(solution.slice());
  }
};

const buildGraph = seqs => {
  const adjList = new Map();
  const indegree = new Map();

  seqs.forEach(seq => {
    for (let i = 0; i < seq.length; i++) {
      const v = seq[i];

      if (!adjList.has(v)) {
        adjList.set(v, []);
        indegree.set(v, 0);
      }

      if (i > 0) {
        const u = seq[i - 1];

        adjList.get(u).push(v);
        indegree.set(v, indegree.get(v) + 1);
      }
    }
  });

  return { adjList, indegree };
};
