/**
 * Undirected Graph Node
 */

export default class UndirectedGraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = []; // Array of UndirectedGraphNode
  }
}
