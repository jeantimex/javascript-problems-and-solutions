/**
 * Equations are given in the format A / B = k, where A and B are variables represented as strings,
 * and k is a real number (floating point number). Given some queries, return the answers.
 *
 * If the answer does not exist, return -1.0.
 *
 * Example:
 * Given a / b = 2.0, b / c = 3.0.
 * queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
 * return [6.0, 0.5, -1.0, 1.0, -1.0 ].
 *
 * The input is: vector<pair<string, string>> equations, vector<double>& values,
 * vector<pair<string, string>> queries , where equations.size() == values.size(),
 * and the values are positive. This represents the equations. Return vector<double>.
 *
 * According to the example above:
 *
 * equations = [ ["a", "b"], ["b", "c"] ],
 * values = [2.0, 3.0],
 * queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].
 *
 * The input is always valid. You may assume that evaluating the queries will result in no division
 * by zero and there is no contradiction.
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  const result = [];

  // Step 1. Build the undirected graph with adjacency list
  const adjList = buildGraph(equations, values);

  // Step 2. For each query, try to find a path in the graph
  // that can link the nodes in the query
  for (let i = 0; i < queries.length; i++) {
    const [from, to] = queries[i];
    const value = dfs(adjList, from, to, 1, new Set());

    // If value is null, that means there's no such path
    result.push(value ? value : -1.0);

    if (value) {
      // Update the graph to avoid duplicate computation
      adjList.get(from).set(to, value);
      adjList.get(to).set(from, 1 / value);
    }
  }

  return result;
};

/**
 * @param {Map<string, Map<string, number>>} adjList
 * @param {string} node
 * @param {string} to
 * @param {number} product
 * @param {Set} visited
 */
const dfs = (adjList, node, to, product, visited) => {
  if (!adjList.has(node)) {
    return null; // Dead end
  }

  visited.add(node); // Mark the current node as visited

  const neighbors = [...adjList.get(node).keys()];

  for (let i = 0; i < neighbors.length; i++) {
    const v = neighbors[i];
    const current = product * adjList.get(node).get(v);

    if (v === to) {
      // Found the path, return the product
      return current;
    }

    if (!visited.has(v)) {
      // Continue to search for the path
      const value = dfs(adjList, v, to, current, visited);

      if (value) {
        return value;
      }
    }
  }

  return null;
};

const buildGraph = (equations, values) => {
  const adjList = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    const value = values[i];

    if (!adjList.has(from)) {
      adjList.set(from, new Map());
    }

    if (!adjList.has(to)) {
      adjList.set(to, new Map());
    }

    // Build the undirected graph
    adjList.get(from).set(to, value);
    adjList.get(to).set(from, 1 / value);
  }

  return adjList;
};

export default calcEquation;
