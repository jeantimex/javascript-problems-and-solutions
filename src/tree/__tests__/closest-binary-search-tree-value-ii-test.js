import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import closestKValues from '../closest-binary-search-tree-value-ii';

describe('Closest Binary Search Tree Value II', () => {
  const testCases = [
    ['1', 0.1, 1, [1]],
    ['7,3,12,1,4,10,14,null,2,null,null,8,11,13,15', 9, 5, [7, 8, 10, 11, 12]],
    ['7,3,12,1,4,10,14,null,2,null,null,8,11,13,15', 13.8, 5, [11, 12, 13, 14, 15]],
  ];

  testCases.map((testCase, index) => {
    it(`should get the k closest nodes for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const target = testCase[1];
      const k = testCase[2];
      const expected = testCase[3];
      const actual = closestKValues(root, target, k).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
