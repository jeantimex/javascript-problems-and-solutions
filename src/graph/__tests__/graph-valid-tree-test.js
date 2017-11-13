import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import { validGraphTree, validTree } from '../graph-valid-tree';

describe('Graph Valid Tree', () => {
  const testCases = [
    [5, [[0, 1], [0, 2], [0, 3], [1, 4]], true],
    [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], false],
    [1, [[0, 0]], false],
    [2, [[0, 0], [1, 1]], false],
    [2, [], false],
    [3, [[0, 1], [1, 2], [2, 0]], false],
  ];

  testCases.forEach((testCase, index) => {
    it(`should validate the graph tree using adjacency list`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = validGraphTree(n, edges);
      assert.equal(actual, expected);
    });

    it(`should validate the graph tree using union find`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = validTree(n, edges);
      assert.equal(actual, expected);
    });
  });
});
