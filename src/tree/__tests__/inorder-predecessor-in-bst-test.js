import { assert } from 'chai';
import { serializeTree, deserializeTree, searchTreeNode } from 'utils/tree-util';
import { inorderPredecessor, inorderPredecessorR } from '../inorder-predecessor-in-bst';

describe('Inorder Predecessor in BST', () => {
  const testCases = [
    ['1', 1, null],
    ['1,0', 1, 0],
    ['3,2,null,1', 2, 1],
    ['9,7,null,3,null,null,5', 7, 5],
    ['7,null,8,null,9,null,10', 9, 8],
  ];

  testCases.map((testCase, index) => {
    it(`should get the inorder predecessor in BST: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const p = searchTreeNode(root, testCase[1]);
      const expected = testCase[2];
      const actual = inorderPredecessor(root, p);
      assert.equal(actual ? actual.val : null, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`[Recursion] should get the inorder predecessor in BST: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const p = searchTreeNode(root, testCase[1]);
      const expected = testCase[2];
      const actual = inorderPredecessorR(root, p);
      assert.equal(actual ? actual.val : null, expected);
    });
  });
});
