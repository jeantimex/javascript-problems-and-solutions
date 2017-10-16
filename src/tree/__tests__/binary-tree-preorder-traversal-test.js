import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import preorderTraversal from '../binary-tree-preorder-traversal';

describe('Binary Tree Preorder Traversal', () => {
  const testCases = [['null', []], ['1', [1]], ['1,2,3', [1, 2, 3]]];

  testCases.map((testCase, index) => {
    it(`should traverse the tree in preorder manner ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = preorderTraversal(root);
      assert.deepEqual(actual, expected);
    });
  });
});
