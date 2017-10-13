import { assert } from 'chai';
import { serializeTree } from 'utils/tree-util';
import buildTree from '../construct-binary-tree-from-inorder-and-postorder-traversal';

describe('Construct Binary Tree From Postorder and Inorder Traversal', () => {
  const testCases = [
    [[1], [1], '1'],
    [[4, 5, 2, 6, 3, 1], [4, 2, 5, 1, 3, 6], '1,2,3,4,5,null,6'],
    [[4, 5, 6, 7], [4, 5, 6, 7], '7,6,null,5,null,4'],
  ];

  testCases.map((testCase, index) => {
    it(`should construct the tree ${index}`, () => {
      const preorder = testCase[0];
      const inorder = testCase[1];
      const expected = testCase[2];
      const actual = serializeTree(buildTree(preorder, inorder));
    });
  });
});
