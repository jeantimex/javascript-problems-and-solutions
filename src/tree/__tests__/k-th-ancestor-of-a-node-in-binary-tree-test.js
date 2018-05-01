import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { kthAncestor } from '../k-th-ancestor-of-a-node-in-binary-tree';

describe('K-th ancestor of a node in Binary Tree', () => {
  const testCases = [[null, 0, 0, -1], ['1,2,3,4,5', 4, 2, 1], ['1,2,3,4,5', 5, 2, 1], ['1,2,3,4,5', 4, 3, -1]];

  testCases.map((testCase, index) => {
    it(`should get the k-th ancestor of node in binary tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const val = testCase[1];
      const k = testCase[2];
      const expected = testCase[3];
      const actual = kthAncestor(root, val, k);
      assert.equal(actual, expected);
    });
  });
});
