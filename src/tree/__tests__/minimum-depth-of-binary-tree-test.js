import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import minDepth from '../minimum-depth-of-binary-tree';

describe('Minimum Depth of Binary Tree', () => {
  const testCases = [['', 0], ['null', 0], ['1', 1], ['1,2', 2], ['1,null,2', 2], ['1,2,3,4', 2]];

  testCases.map((testCase, index) => {
    it(`should calculate the minimum depth of binary tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const actual = minDepth(root);
      const expected = testCase[1];
      assert.equal(actual, expected);
    });
  });
});
