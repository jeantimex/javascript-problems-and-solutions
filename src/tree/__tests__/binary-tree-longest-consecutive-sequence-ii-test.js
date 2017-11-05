import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import longestConsecutive from '../binary-tree-longest-consecutive-sequence-ii';

describe('Binary Tree Longest Consecutive Sequence II', () => {
  const testCases = [['1,2,3', 2], ['2,1,3', 3], ['1,2,0', 3], ['null', 0], ['2,3,1', 3]];

  testCases.map((testCase, index) => {
    it(`should return the longest consecutive sequence ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = longestConsecutive(root);
      assert.equal(actual, expected);
    });
  });
});
