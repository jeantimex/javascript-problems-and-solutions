import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import { cloneGraph, cloneGraphBFS } from '../clone-graph';

describe('Clone Graph', () => {
  const testCases = [null, '0', '0,1#1', '0,1,2#1,2#2,2'];

  testCases.forEach((testCase, index) => {
    it(`should clone the graph DFS ${testCase}`, () => {
      const graph = deserializeUndirectedGraph(testCase);
      const expected = testCase;
      const actual = serializeUndirectedGraph(cloneGraph(graph));
      assert.equal(actual, expected);
    });
  });

  testCases.forEach((testCase, index) => {
    it(`should clone the graph BFS ${testCase}`, () => {
      const graph = deserializeUndirectedGraph(testCase);
      const expected = testCase;
      const actual = serializeUndirectedGraph(cloneGraphBFS(graph));
      assert.equal(actual, expected);
    });
  });
});
