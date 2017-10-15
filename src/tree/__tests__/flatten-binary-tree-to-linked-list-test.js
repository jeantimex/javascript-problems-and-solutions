import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { flatten, preorder } from '../flatten-binary-tree-to-linked-list';

describe('Flatten Binary Tree to Linked List', () => {
  const testCases = [
    ['1', '1'],
    ['1,null,2', '1,null,2'],
    ['1,2', '1,null,2'],
    ['1,2,5,3,4,null,6', '1,null,2,null,3,null,4,null,5,null,6'],
  ];

  testCases.map((testCase, index) => {
    it(`should flattern binary tree ${testCase[0]} using postorder`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      flatten(root);
      const actual = serializeTree(root);
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should flattern binary tree ${testCase[0]} using preorder`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      preorder(root);
      const actual = serializeTree(root);
      assert.equal(actual, expected);
    });
  });
});
