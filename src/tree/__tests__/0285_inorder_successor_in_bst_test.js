import { assert } from 'chai';
import { serializeTree, deserializeTree, searchTreeNode } from 'utils/tree-util';
import { inorderSuccessor, inorderSuccessorR } from '../inorder-successor-in-bst';

describe('Inorder Successor in BST', () => {
  const testCases = [
    ['1', 1, null],
    ['1,0', 0, 1],
    ['3,2,null,1', 1, 2],
    ['7,3,null,1,5,null,null,4', 3, 4],
    ['7,null,8,null,9,null,10', 8, 9],
  ];

  testCases.map((testCase, index) => {
    it(`should get the inorder successor in BST: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const p = searchTreeNode(root, testCase[1]);
      const expected = testCase[2];
      const actual = inorderSuccessor(root, p);
      assert.equal(actual ? actual.val : null, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should get the inorder successor in BST: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const p = searchTreeNode(root, testCase[1]);
      const expected = testCase[2];
      const actual = inorderSuccessorR(root, p);
      assert.equal(actual ? actual.val : null, expected);
    });
  });
});
