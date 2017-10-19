import { assert } from 'chai';
import TreeNode from 'common/tree-node';
import { serializeTree, deserializeTree, searchTreeNode } from 'utils/tree-util';
import lowestCommonAncestor from '../lowest-common-ancestor-of-a-binary-tree';

describe('Lowest Common Ancestor', () => {
  const testCases = [['2,1,3', 2, 3, 2], ['5,3,7,2,4,6,8', 6, 8, 7], ['2,1,3', 4, 5, null], ['5,3,null,2,4', 2, 4, 3]];

  testCases.map((testCase, index) => {
    it(`should get the LCA of a binary search tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const p = searchTreeNode(root, testCase[1]);
      const q = searchTreeNode(root, testCase[2]);
      const expected = testCase[3];
      const actual = lowestCommonAncestor(root, p, q);
      assert.equal(actual ? actual.val : null, expected);
    });
  });
});
