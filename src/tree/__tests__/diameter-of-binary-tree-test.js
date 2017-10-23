import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import diameterOfBinaryTree from '../diameter-of-binary-tree';

describe('Diameter of Binary Tree', () => {
  const testCases = [['1', 1], ['1,2,3,4,5', 4]];

  testCases.map((testCase, index) => {
    it(`should get the diameter of binary tree: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = diameterOfBinaryTree(root);
      assert.equal(actual, expected);
    });
  });
});
