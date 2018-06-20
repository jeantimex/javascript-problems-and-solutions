/**
 * Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
 *
 *
 * OJ's undirected graph serialization:
 * Nodes are labeled uniquely.
 *
 * We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 * As an example, consider the serialized graph {0,1,2#1,2#2,2}.
 *
 * The graph has a total of three nodes, and therefore contains three parts as separated by #.
 *
 * First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 * Second node is labeled as 1. Connect node 1 to node 2.
 * Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 * Visually, the graph looks like the following:
 *
 *        1
 *       / \
 *      /   \
 *     0 --- 2
 *          / \
 *          \_/
 */

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

import UndirectedGraphNode from 'common/undirected-graph-node';

/**
 * DFS Solution
 *
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
export const cloneGraph = graph => {
  const map = new Map();

  const clone = node => {
    if (!node) {
      return null;
    }

    if (map.has(node)) {
      return map.get(node);
    }

    const copy = new UndirectedGraphNode(node.label);
    map.set(node, copy);

    node.neighbors.forEach(neighbor => {
      copy.neighbors.push(clone(neighbor));
    });

    return copy;
  };

  return clone(graph);
};

/**
 * BFS Solution
 *
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
export const cloneGraphBFS = graph => {
  const getCopy = node => {
    if (map.has(node)) {
      return map.get(node);
    }
    const copy = new UndirectedGraphNode(node.label);
    map.set(node, copy);
    return copy;
  };

  if (!graph) {
    return null;
  }

  const map = new Map();
  const queue = [graph];
  const visited = new Set();

  visited.add(graph);

  while (queue.length > 0) {
    const node = queue.shift();
    const copy = getCopy(node);

    node.neighbors.forEach(neighbor => {
      const neighborCopy = getCopy(neighbor);
      copy.neighbors.push(neighborCopy);

      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  return map.get(graph);
};
