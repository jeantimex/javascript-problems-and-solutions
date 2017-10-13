import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import maxDepth from '../maximum-depth-of-binary-tree';

describe('Maximum Depth of Binary Tree', () => {
  const testCases = [['null', 0], ['1', 1], ['1,2', 2], ['1,2,null,3', 3]];

  testCases.map((testCase, index) => {
    it(`should get the maximum depth of binary tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const actual = maxDepth(root);
      const expected = testCase[1];
      assert.equal(actual, expected);
    });
  });
});
