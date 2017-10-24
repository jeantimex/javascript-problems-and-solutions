import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import constructMaximumBinaryTree from '../maximum-binary-tree';

describe('Maximum Binary Tree', () => {
  const testCases = [[[3, 2, 1, 6, 0, 5], '6,3,5,null,2,0,null,null,1']];

  testCases.map((testCase, index) => {
    it(`should construct the maximum binary tree ${testCase[0]}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = serializeTree(constructMaximumBinaryTree(nums));
      assert.equal(actual, expected);
    });
  });
});
