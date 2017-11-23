import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import findRedundantDirectedConnection from '../redundant-connection-ii';

describe('Redundant Connection II', () => {
  const testCases = [
    [[[1, 2], [1, 3], [2, 3]], [2, 3]],
    [[[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]], [4, 1]],
    [[[1, 2], [2, 3], [3, 4], [4, 1], [5, 1]], [4, 1]],
    [[[1, 2], [2, 3], [3, 4], [5, 1], [4, 1]], [4, 1]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should find the redundant connection`, () => {
      const edges = testCase[0];
      const expected = testCase[1];
      const actual = findRedundantDirectedConnection(edges);
      assert.deepEqual(actual, expected);
    });
  });
});
