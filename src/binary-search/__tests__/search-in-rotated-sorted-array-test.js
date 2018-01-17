import { assert } from 'chai';
import search from '../search-in-rotated-sorted-array';

describe('Search in Rotated Sorted Array', () => {
  const testCases = [
    [[4, 5, 6, 7, 0, 1, 2], 4, 0],
    [[], 0, -1],
    [[1], 0, -1],
    [[4, 5, 6, 7, 0, 1, 2], 1, 5],
    [[1, 3, 4], 4, 2],
    [[5, 3, 4], 4, 2],
  ];

  testCases.forEach((testCase, index) => {
    it(`should find the index of target`, () => {
      const [nums, target, expected] = testCase;
      const actual = search(nums, target);
      assert.equal(actual, expected);
    });
  });
});
