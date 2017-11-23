import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import findMinHeightTrees from '../minimum-height-trees';

describe('Minimum Height Trees', () => {
  const testCases = [
    [4, [[1, 0], [1, 2], [1, 3]], [1]],
    [6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]], [3, 4]],
    [1, [], [0]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the minimum height trees ${index}`, () => {
      const n = testCase[0];
      const edges = testCase[1];
      const expected = testCase[2];
      const actual = findMinHeightTrees(n, edges).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
