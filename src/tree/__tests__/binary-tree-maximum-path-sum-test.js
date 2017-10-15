import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import maxPathSum from '../binary-tree-maximum-path-sum';

describe('Binary Tree Maximum Path Sum', () => {
  const testCases = [['1', 1], ['1,2,3', 6], ['1,-1,-2', 1], ['0,0,1', 1]];

  testCases.map((testCase, index) => {
    it(`should calculate the max path sum for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = maxPathSum(root);
      assert.equal(actual, expected);
    });
  });
});
