import { assert } from 'chai';
import inorderTraversal from '../binary-tree-inorder-traversal';
import { tree1, tree2, tree3, tree4, tree5 } from 'common/trees';

describe('Binary Tree Inorder Traversal', () => {
  const testCases = [
    [null, []],
    [tree1, [2, 1, 3]],
    [tree2, [1, 2]],
    [tree3, [1, 3, 2, 4]],
    [tree4, [1, 3, 2]],
    [tree5, [3, 2, 1]],
  ];

  testCases.map((testCase, index) => {
    it(`should pass test case ${index}`, () => {
      const input = testCase[0];
      const expected = testCase[1];
      const actual = inorderTraversal(input);
      assert.deepEqual(actual, expected);
    });
  });
});
