import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import widthOfBinaryTree from '../maximum-width-of-binary-tree';

describe('Maximum Width of Binary Tree', () => {
  const testCases = [
    ['null', 0],
    ['1,3,2,5,3,null,9', 4],
    ['1,3,null,5,3', 2],
    ['1,3,2,5', 2],
    ['1,3,2,5,null,null,9,6,null,null,7', 8],
  ];

  testCases.map((testCase, index) => {
    it(`should get the max width of binary tree`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = widthOfBinaryTree(root);
      assert.equal(actual, expected);
    });
  });
});
