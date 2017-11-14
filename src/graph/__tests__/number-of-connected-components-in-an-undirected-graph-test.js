import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import {
  countComponentsDFS,
  countComponentsBFS,
  countComponentsUnionFind,
} from '../number-of-connected-components-in-an-undirected-graph';

describe('Number of Connected Components in an Undirected Graph', () => {
  const testCases = [
    [5, [[0, 1], [1, 2], [3, 4]], 2],
    [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 1],
    [2, [[0, 1], [1, 0]], 1],
  ];

  testCases.forEach((testCase, index) => {
    it(`should count the connected components with DFS ${index}`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = countComponentsDFS(n, edges);
      assert.equal(actual, expected);
    });

    it(`should count the connected components with BFS ${index}`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = countComponentsBFS(n, edges);
      assert.equal(actual, expected);
    });

    it(`should count the connected components with union find ${index}`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = countComponentsUnionFind(n, edges);
      assert.equal(actual, expected);
    });
  });
});
