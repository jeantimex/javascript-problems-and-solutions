import { assert } from 'chai';
import numTrees from '../unique-binary-search-trees';

describe('Unique Binary Search Trees', () => {
  const testCases = [[0, 0], [1, 1], [3, 5]];
  testCases.map((testCase, index) => {
    it(`should count the unique binary search trees correctly for input: ${testCase[0]}`, () => {
      const n = testCase[0];
      const expected = testCase[1];
      const actual = numTrees(n);
      assert.equal(actual, expected);
    });
  });
});
