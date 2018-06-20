/**
 * Graph Utilities
 *
 * Undirected graph serialization:
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

import Queue from 'common/queue';
import UndirectedGraphNode from 'common/undirected-graph-node';

/**
 * Encodes an undirected graph to a single string.
 *
 * @param {UndirectedGraphNode} graph
 * @return {string}
 */
export const serializeUndirectedGraph = graph => {
  if (!graph) {
    return null;
  }

  const queue = new Queue();
  queue.enqueue(graph);

  const adjacencyList = new Map();

  const visited = new Set();
  visited.add(graph);

  const result = [];

  while (!queue.isEmpty()) {
    const size = queue.size();

    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      const { label, neighbors } = node;

      if (!adjacencyList.has(node)) {
        adjacencyList.set(node, new Set());
      }

      const level = [label];

      for (let j = 0; j < neighbors.length; j++) {
        const neighbor = neighbors[j];

        if (!adjacencyList.has(neighbor)) {
          adjacencyList.set(neighbor, new Set());
        }

        if (!adjacencyList.get(node).has(neighbor)) {
          adjacencyList.get(node).add(neighbor);
          adjacencyList.get(neighbor).add(node);

          level.push(neighbor.label);
        }

        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }

      result.push(level.join(','));
    }
  }

  return result.join('#');
};

/**
 * Decodes your encoded data to UndirectedGraphNode
 *
 * @param {string} str
 * @return {UndirectedGraphNode}
 */
export const deserializeUndirectedGraph = str => {
  const getNode = label => {
    if (map.has(label)) {
      return map.get(label);
    }

    const node = new UndirectedGraphNode(label);
    map.set(label, node);
    return node;
  };

  if (!str) {
    return null;
  }

  let graph = null;
  const map = new Map();

  const levels = str.split('#');

  levels.forEach(level => {
    const labels = level.split(',');
    const node = getNode(labels[0]);

    if (!graph) {
      graph = node;
    }

    for (let i = 1; i < labels.length; i++) {
      const neighbor = getNode(labels[i]);

      node.neighbors.push(neighbor);
      neighbor.neighbors.push(node);
    }
  });

  return graph;
};
