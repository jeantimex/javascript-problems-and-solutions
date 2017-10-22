import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import longestConsecutive from '../binary-tree-longest-consecutive-sequence';

describe('Binary Tree Longest Consecutive Sequence', () => {
  const testCases = [['1,null,3,2,4,null,null,null,5', 3], ['2,null,3,2,null,1', 2], ['1,3,null,4,2,5', 3]];

  testCases.map((testCase, index) => {
    it(`should get the longest consecutive sequence for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = longestConsecutive(root);
      assert.equal(actual, expected);
    });
  });
});
