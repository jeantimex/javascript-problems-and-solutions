import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import postorderTraversal from '../binary-tree-postorder-traversal';

describe('Binary Tree Postorder Traversal', () => {
  const testCases = [['null', []], ['1', [1]], ['1,2', [2, 1]], ['1,2,3', [2, 3, 1]]];

  testCases.map((testCase, index) => {
    it(`should perform post order traversal for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = postorderTraversal(root);
      assert.deepEqual(actual, expected);
    });
  });
});
