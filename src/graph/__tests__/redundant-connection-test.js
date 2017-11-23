import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import findRedundantConnection from '../redundant-connection';

describe('Redundant Connection', () => {
  const testCases = [
    [[[1, 2], [1, 3], [2, 3]], [2, 3]],
    [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]], [1, 4]],
    [[[1, 2]], []],
  ];

  testCases.forEach((testCase, index) => {
    it(`should find the redundant connection`, () => {
      const edges = testCase[0];
      const expected = testCase[1];
      const actual = findRedundantConnection(edges).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
